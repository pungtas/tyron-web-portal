import React from "react";
import { Link, withRouter } from "react-router-dom";

function Wallets() {
	return(
		<div id="main">
            <span role="img" aria-label="back arrow" style={{ marginTop:"7%", marginBottom: '2%' }}><Link to="/">🔙</Link></span>
            <h2 style={{ width: "100%", textAlign:"center" }}>Wallets</h2>
            <section style={{ width: "100%" }}>
                <p>
                    The Tyron Self-Sovereign Identity Protocol develops open-source smart contract wallets.
                </p>
                <p>
                    Due to the <Link to="/did">DID verification methods</Link>, there is a security issue related to the different keys that a decentralized identity requires. 
                    Most current wallets on the market are custodial, relying on intermediaries or third parties, meaning that the secure management of 
                    your secret/private keys is at the hands of others. This is less desirable for users that want more control over their keys, also when operating on different blockchains.
                    The SSI Protocol targets this issue by developing the Tyron Decentralized Key Management 
                    System that stores encrypted data on decentralized networks like <a href="https://www.arweave.org/">Zilliqa</a> or the <a href="https://www.arweave.org/">Arweave</a> permaweb.
                </p>
            <h3 class="major">Decentralized identifier smart contract wallet</h3>
                <p>
                    The <a href="https://github.com/pungtas/smart-contracts.tyron/blob/main/DID/DIDdapps/DIDxWallet/xwallet.tyron.scilla">DIDxWallet</a> is Zilliqa's first smart 
                    contract wallet. The DIDxWallet integrates the <a href="https://tyronzil.com">tyronzil.com</a> W3C DID Method, implementing
                    the <a href="https://github.com/pungtas/smart-contracts.tyron/blob/main/DID/did.tyron.scilla">did.tyron</a> smart contract, allowing the user to establish a decentralised 
                    digital identity. Which now, got equipped with its very own wallet!
                </p>
                <p>
                    The did.tyron technology supports <a href="https://vitalik.ca/general/2021/01/11/recovery.html">Social Recovery</a> - thus, if your Admin key gets compromised, you can lock your digital identity and recover it through your social 
                    recoverers. Such a use case is an example of how the tyronzil W3C DID infrastructure increases the security of users.
                </p>
                <p>
                    With a DIDxWallet, you can:
                </p>
                <ul>
                    <li>
                        Own and transfer tokens
                        (<a href="https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-2.md">ZRC2-standard</a>).
                        
                    </li>
                    <li>
                        Social Recovery: if you lose access to your Admin secret-key, your social recoverers will be able to instruct your DIDxWallet to update its Admin with your new address. 
                    </li>
                    <li>
                        DeFi: by interacting directly with the <a href="https://zilswap.io">ZilSwap</a> decentralized exchange smart contract, your DIDxWallet can swap $ZIL for Singapore dollars ($XSGD) and more!
                        Also, provide and remove liquidity.
                    </li>
                    <li>
                        Staking: you can delegate $ZIL from your DIDxWallet to the <a href="https://stake.zilliqa.com/">Zilliqa staking</a> smart contract.
                    </li>
                </ul>
                <p>
                    The DIDxWallet open-source development started during last year's <a href="https://www.xfers.com/sg">Xfers</a> $XSGD Hackathon along with <a href="https://zilhive.org/">ZILHive</a> Innovation Grants. This year got upgraded 
                    with Ignite DAO funding to support $ZIL staking. Thanks, everyone!
                </p>
            </section>
        </div>
	);
}

export default withRouter(Wallets);
