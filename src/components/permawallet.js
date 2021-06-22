import React from "react";
import { Link, withRouter } from "react-router-dom";

function Permawallet() {
	return(
		<div id="main">
            <span role="img" aria-label="back arrow" style={{ marginTop:"7%", marginBottom: '2%' }}><Link to="/">🔙</Link></span>
            <h2 style={{ width: "100%", textAlign:"center" }} class="major">Wallets</h2>
            <h3>SSI permaWallet</h3>
            <section style={{ width: "100%" }}>
                <p>The amount of keys that a decentralized identity requires as <Link to="/did">verification methods</Link> is an issue. Most wallets in the market rely on third parties, so the secure management of secret keys can be a problem for the user - even more when they have secret keys for different blockchains. The Tyron SSI Protocol Dapp solves this issue by implementing its own <a href="https://www.youtube.com/watch?v=LOrXOxc2yp0">Decentralized Key Management System</a> on-chain on the immutable permaweb and backing up the user's DID secret keys into their Self-Sovereign Identity permaWallet.</p>
                <p>An SSI permaWallet is a smart contract owned by its user where all keys got encrypted by the user's <code>SSI permaweb secret key</code> (their Arweave main key). Whenever necessary, the user can read the data from their on-chain wallet, decrypt it and use it to make the signatures required by their self-sovereign identity.</p>
                <p>With an SSI permaWallet, the user must only worry about one private key: their <code>SSI permaweb secret key</code>. This improved user experience also brings to the user peace of mind that all their other secret keys and personal information are encrypted, safely stored and always available on their on-chain wallet that lives on the permaweb - a decentralized, immutable and uncensorable Web 3.0.</p>
                <h4>Travel Rule SSI Passport for multi-chain KYC</h4>
                <p>The SSI permaWallet also stores the user's Travel Rule SSI Passport: An <a href="https://intervasp.org/wp-content/uploads/2020/05/IVMS101-interVASP-data-model-standard-issue-1-FINAL.pdf">IVMS101 message</a> that makes this self-hosted wallet compliant with the FATF Travel Rule. This passport has the user's personal information encrypted by the user's SSI Travel Rule Key. When executing a virtual asset transfer, the user attaches a copy of this key encrypted by the beneficiary's SSI Communication Key - so that the beneficiary, and only the beneficiary, can read their Travel Rule SSI Passport.</p>
                <h4>SSI Communication Key</h4>
                <p>Self-sovereign identities can send messages to each other, encrypting them with the receiver's SSI Communication Key - so that only the receiver can read them. For example, when sending a transfer, the originator can attach their SSI Travel Rule Key encrypted by the beneficiary's SSI Communication Key so they can read the originator's Travel Rule Passport.</p>
            </section>
            <h3>DID xWallet</h3>
            <section style={{ width: "100%" }}>
                <p>The <a href="https://github.com/pungtas/smart-contracts.tyron/blob/main/DID/DIDdapps/DIDxWallet.tyron.scilla">DIDxWallet</a> is a smart contract wallet in active development.</p>
            </section>
        </div>
	);
}

export default withRouter(Permawallet);
