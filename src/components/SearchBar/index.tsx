import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router'
import {
    SMART_CONTRACTS_URLS,
    VALID_SMART_CONTRACTS
} from '../../constants/tyron';
import { DOMAINS } from '../../constants/domains';
import { fetchAddr, isValidUsername, resolve } from './utils';
import styles from './styles.module.scss';
import { updateUser } from '../../store/user';
import { useStore } from 'effector-react';
import { updateContract } from '../../store/contract';
import { updateDoc } from '../../store/did-doc';
import { updateLoggedIn } from '../../store/loggedIn';
import { updateDonation } from '../../store/donation';
import { $wallet } from '../../store/wallet';
import { $isAdmin, updateIsAdmin } from '../../store/admin';
import { $net } from '../../store/wallet-network';

interface LayoutSearchBarProps {
    children: ReactNode;
  }

function Component(props: LayoutSearchBarProps) {
    const callbackRef = useCallback(inputElement => {
        if (inputElement) {
            inputElement.focus();
        }
    }, []);

    const {children} = props;
    const Router = useRouter();
    const net = useStore($net);
    const zil_address = useStore($wallet);
    const is_admin = useStore($isAdmin);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [input, setInput] = useState('');
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [domain, setDomain] = useState('');
    const [exists, setIdentity] = useState(false);
    const [xpoints, setXpoints] = useState(false);
    const [vc, setVC] = useState(false);
    const [treasury, setTreasury] = useState(false);

    useEffect(() => {
        if (register) {
            Router.push('/Buy')
        } else if (exists && is_admin?.hideWallet) {
            Router.push('/PublicIdentity')
        } else if (xpoints) {
            Router.push('/XPoints')
        } else if (vc) {
            Router.push('/VerifiableCredentials')
        } else if (treasury) {
            Router.push('/Treasury')
        } else if (is_admin?.verified && !is_admin.hideWallet) {
            Router.push('/DIDxWallet')
        }
    }, [register, exists, is_admin, xpoints, vc, treasury]);

    const spinner = (
        <i className="fa fa-lg fa-spin fa-circle-notch" aria-hidden="true"></i>
    );

    const handleInput = ({
        currentTarget: { value }
    }: React.ChangeEvent<HTMLInputElement>) => {
        setError(''); updateLoggedIn(null); updateDonation(null); updateContract(null);
        setXpoints(false); setVC(false); setTreasury(false);
        updateIsAdmin({
            verified: false,
            hideWallet: true,
            legend: 'access DID wallet'
        })
        setIdentity(false); setRegister(false);

        const input = value.toLowerCase();
        setInput(input);
        if (value.includes('.')) {
            const [username = '', domain = ''] = input.split('.');
            setUsername(username);
            setDomain(domain);
        } else {
            setUsername(input);
            setDomain('did')
        }
    };
    const handleOnKeyPress = ({
        key
    }: React.KeyboardEvent<HTMLInputElement>) => {
        if (key === 'Enter') {
            getResults();
        }
    };

    const resolveDid = async () => {
        if (
            isValidUsername(username) ||
            username === 'init' ||
            username === 'tyron' || username === 'donate' || username === 'wfp'
        ) {
            await fetchAddr({ net, username, domain })
                .then(async (addr) => {
                    if (username === 'xpoints') {
                        setXpoints(true);
                    } else {
                        try {
                            await resolve({ net, addr })
                                .then(result => {
                                    setIdentity(true);
                                    const controller = (result.controller).toLowerCase();
                                    updateContract({
                                        addr: addr,
                                        controller: controller,
                                        status: result.status
                                    });
                                    if (controller === zil_address?.base16.toLowerCase()) {
                                        updateIsAdmin({
                                            verified: true,
                                            hideWallet: true,
                                            legend: 'access DID wallet'
                                        });
                                    } else {
                                        updateIsAdmin({
                                            verified: false,
                                            hideWallet: true,
                                            legend: 'access DID wallet'
                                        });
                                    }
                                    updateDoc({
                                        did: result.did,
                                        version: result.version,
                                        doc: result.doc,
                                        dkms: result.dkms,
                                        guardians: result.guardians
                                    })
                                }).catch(err => { throw err })
                        } catch (error) {
                            alert('Coming soon!')
                        }
                    }
                })
                .catch(() => {
                    setRegister(true);
                });
        } else {
            setError('Invalid username. Names with less than seven characters are premium and will be for sale later on.');
        }
    };

    const resolveDomain = async () => {
        await fetchAddr({ net, username, domain: 'did' })
            .then(async addr => {
                const result = await resolve({ net, addr });
                await fetchAddr({ net, username, domain })
                    .then(async (domain_addr) => {
                        const controller = result.controller;
                        if (controller.toLowerCase() === zil_address?.base16.toLowerCase()) {
                            updateIsAdmin({
                                verified: true,
                                hideWallet: true,
                                legend: 'access DID wallet'
                            });
                        } else {
                            updateIsAdmin({
                                verified: false,
                                hideWallet: true,
                                legend: 'access DID wallet'
                            });
                        }
                        updateContract({
                            addr: domain_addr,
                            controller: controller,
                            status: result.status
                        });
                        updateDoc({
                            did: result.did,
                            version: result.version,
                            doc: result.doc,
                            dkms: result.dkms,
                            guardians: result.guardians
                        })
                        switch (domain) {
                            case DOMAINS.VC:
                                setVC(true);
                                break;
                            case DOMAINS.TREASURY:
                                setTreasury(true);
                                break;
                            default:
                                setIdentity(true);
                                break;
                        }
                    })
                    .catch(() => {
                        setError(`Initialize this xWallet domain  at ${username}'s NFT Username DNS.`)
                    });
            })
            .catch(() => {
                setRegister(true);
            });
    }

    const getResults = async () => {
        setLoading(true); setError(''); setIdentity(false); setRegister(false); updateDonation(null);
        updateIsAdmin({
            verified: false,
            hideWallet: true,
            legend: 'access DID wallet'
        });
        updateUser({
            nft: username,
            domain: domain
        });
        switch (domain) {
            case DOMAINS.TYRON:
                if (VALID_SMART_CONTRACTS.includes(username))
                    window.open(
                        SMART_CONTRACTS_URLS[
                        username as unknown as keyof typeof SMART_CONTRACTS_URLS
                        ]
                    );
                else setError('Invalid smart contract');
                break;
            case DOMAINS.DID: await resolveDid();
                break;
            case DOMAINS.VC: await resolveDomain();
                break;
            case DOMAINS.TREASURY: await resolveDomain();
                break;
            case DOMAINS.PSC: alert('Coming soon!') //await resolveDomain();
                break;
            case DOMAINS.DEX: await resolveDomain();
                break;
            case DOMAINS.STAKE: await resolveDomain();
                break;
            default:
                setError('Invalid domain.')
                break
        }
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchDiv}>
                <input
                    ref={callbackRef}
                    type="text"
                    className={styles.searchBar}
                    onChange={handleInput}
                    onKeyPress={handleOnKeyPress}
                    value={input}
                    placeholder="Type an SSI username"
                    autoFocus
                />
                <div>
                    <button onClick={getResults} className={styles.searchBtn}>
                        {loading ? spinner : <i className="fa fa-search"></i>}
                    </button>
                </div>
            </div>
            {children}
            {
                error !== '' &&
                <code>
                    Error: {error}
                </code>
            }
        </div>
    );
}
// @todo research/decide which router (consider working with next.js)
export default Component;
