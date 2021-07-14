import React from "react";
import { Link, withRouter } from "react-router-dom";

function Wallets() {
	return(
		<div id="main">
            <span role="img" aria-label="back arrow" style={{ marginTop:"7%", marginBottom: '2%' }}><Link to="/">🔙</Link></span>
            <h2 style={{ width: "100%", textAlign:"center" }}>Wallets</h2>
            <section style={{ width: "100%" }}>
                <p>
                    Due to the <Link to="/did">DID verification methods</Link>, there is a security issue related to the different keys that a decentralized identity requires. 
                    Most current wallets on the market are custodial, relying on intermediaries or third parties, meaning that the secure management of 
                    secret/private keys is at the hands of others. This is less desirable for users that want to have more direct control of their own keys, 
                    especially when operating on different blockchains. The SSI Protocol targets this issue by developing the Tyron Decentralized Key Management 
                    System on a decentralized-storage web, the <a href="https://www.arweave.org/">permaweb </a>. The permaweb enables you to save your secret keys
                    and encrypted personal information in your permaWallet, your very own smart contract on the Tyron network.
                </p>
            <h3 class="major">SSI permaWallet</h3>
                <p>
                    An SSI permaWallet is a smart contract on Arweave, owned by its user with all personal data encrypted by their SSI secret key. 
                    Accessing your permaWallet, you can read the data from your on-chain wallet, decrypt it, and use it to make the signatures required
                    for your digital identities. Through this method, you only need to keep one secret key safe, your SSI secret key; and all other private
                    keys and personal information are encrypted, safely stored and always available on your SSI permaWallet. This feature enhances the user 
                    experience as it is simpler for the user and with a more secure structure since your permaWallet lives on the permaweb, a decentralized-storage web.
                </p>
                <h4>Travel Rule SSI Passport for multi-chain KYC</h4>
                <p>
                    The SSI permaWallet can store your Travel Rule SSI Passport, which is an encrypted <a href="https://intervasp.org/wp-content/uploads/2020/05/IVMS101-interVASP-data-model-standard-issue-1-FINAL.pdf">
                    IVMS101 message</a> that makes your self-hosted SSI wallets compliant with the FATF Travel Rule. This passport has all personal information encrypted by your Travel Rule 
                    secret key. When executing a virtual asset transfer, the originator attaches a copy of their Travel Rule key encrypted by the beneficiary's SSI Communication Key.
                    This way, the receiver of the transfer, and only the receiver/beneficiary, can read the sender/originator's Travel Rule SSI Passport.
                </p>
                <h4>SSI Communication Key</h4>
                <p>
                    On the Tyron network, self-sovereign identities can send messages to each other through SSI Comm, encrypting those messages with the receiver's SSI Communication Key so 
                    that only the receiver can decrypt and read them. For example, when sending a transfer, the originator can SSI Comm their Travel Rule secret key encrypted by the 
                    receiver/beneficiary's SSI Communication Key so they can read the originator's Travel Rule SSI Passport and prevent money laundering.</p>
            <h3 class="major">DID xWallet</h3>
                <p>The <a href="https://github.com/pungtas/smart-contracts.tyron/blob/main/DID/DIDdapps/DIDxWallet.tyron.scilla">DIDxWallet</a> is a smart contract wallet in open-source development.</p>
                <p>Features include:</p>
                <ul>
                    <li>
                        Social recovery: by enabling social recovery, you can have two users as recoverers. That means that if you lose access to your admin secret-key, they will be able
                        to order your xWallet to update its <code>admin</code> with your new address. 
                    </li>
                    <li>
                        Token swaps: by interacting directly with the <a href="https://zilswap.io">ZilSwap</a> smart contract, your xWallet can swap $ZIL for Singapore dollars ($XSGD) and more!
                    </li>
                    <li>
                        Staking: you can delegate $ZIL from your xWallet to the <a href="https://stake.zilliqa.com/">Zilliqa staking</a> smart contract. Your xWallet will also calculate your 
                        staking performance based on how much and for how long you have been staking and reward you in xPoints, Tyron's reputation points. Then your SSN operator will be able 
                        to give you extra benefits according to your xPoints.
                    </li>
                    <li>
                        Meta-transactions (xOrders): some transactions on your xWallet can get executed by a third party that we define as an SSI Agent. By making a transaction for you, your agent pays 
                        the gas fees and enables exciting new features such as limit orders and auto-staking! For extra security and to prevent misbehaving agents, before accepting a 
                        meta-transaction, your xWallet verifies that the xOrder given by your agent got indeed signed by your DID secret key that only you know.
                    </li>
                </ul>
            </section>
        </div>
	);
}

export default withRouter(Wallets);
