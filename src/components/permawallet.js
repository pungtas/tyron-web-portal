import React from "react";
import { Link, withRouter } from "react-router-dom";

function Permawallet() {
	return(
		<div id="main">
            <span role="img" aria-label="back arrow" style={{ marginTop:"7%", marginBottom: '2%' }}><Link to="/">🔙</Link></span>
            <h2 style={{ width: "100%", textAlign:"center" }}>Wallets</h2>
            <section style={{ width: "100%" }}>
                <p>

                    The amount of keys that a decentralized identity requires as verification methods is an issue. Most wallets in the 
                     market are custodial, relying on intermediaries or third parties, so the secure management of secret keys could be 
                     a problem for the user - even more when they have private keys for different blockchains. The SSI Protocol targets this issue 
                     by developing the Tyron Decentralized Key Management System on a decentralized-storage web - the <a href="https://www.arweave.org/">permaweb </a> -
                     enabling you to save your secret keys and encrypted personal information in your permaWallet own smart contract.
                </p>
            <h3 class="major">SSI permaWallet</h3>
                <p>
                    An SSI permaWallet is a smart contract on Arweave owned by its user with all personal data encrypted by their permaweb secret key. Whenever you want, 
                     you can read the data from your on-chain wallet, decrypt it and use it to make the signatures required by your digital identities. 
                     Then, you must only keep one private key safe, which is your SSI secret key. Improving this user experience also brings peace of mind that all other 
                     secret keys and personal information are encrypted, safely stored and always available on your SSI wallet that lives on the permaweb, a decentralized-storage, 
                     uncensorable web.
                </p>
                <h4>Travel Rule SSI Passport for multi-chain KYC</h4>
                <p>
                    The SSI permaWallet can store your Travel Rule SSI Passport which is an encrypted <a href="https://intervasp.org/wp-content/uploads/2020/05/IVMS101-interVASP-data-model-standard-issue-1-FINAL.pdf">
                     IVMS101 message</a> that makes your self-hosted SSI wallet compliant with the FATF Travel Rule. This passport has all personal information encrypted by your Travel Rule 
                     secret key. When executing a virtual asset transfer, the originator attaches a copy of their Travel Rule key encrypted by the beneficiary's SSI Communication Key - 
                     so that the beneficiary, and only the beneficiary, can read the originator's Travel Rule SSI Passport.</p>
                <h4>SSI Communication Key</h4>
                <p>
                    Self-sovereign identities can send messages to each other, encrypting them with the receiver's SSI Communication Key - so that only the receiver can decrypt and read them. 
                     For example, when sending a transfer, the originator can attach their Travel Rule secret key encrypted by the beneficiary's SSI Communication Key so they 
                     can read the originator's Travel Rule SSI Passport.</p>
            <h3 class="major">DID xWallet</h3>
                <p>The <a href="https://github.com/pungtas/smart-contracts.tyron/blob/main/DID/DIDdapps/DIDxWallet.tyron.scilla">DIDxWallet</a> is a smart contract wallet in open-source development.</p>
            </section>
        </div>
	);
}

export default withRouter(Permawallet);
