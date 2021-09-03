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
                    The DIDxWallet is Zilliqa's first <a href="https://github.com/pungtas/smart-contracts.tyron/blob/main/DID/DIDdapps/DIDxWallet/xwallet.tyron.scilla">open-source smart contract wallet</a>.
                    The xWallet implements the <a href="https://tyronzil.com">tyronzil.com</a> W3C DID Method, integrating the <a href="https://github.com/pungtas/smart-contracts.tyron/blob/main/DID/did.tyron.scilla">did.tyron</a> smart
                    contract, which allows the user to establish a decentralized digital identity. Your Tyron DID identity now got equipped with a free xWallet! We want to promote being open-source and
                    transparent, and you can read our code by searching did.tyron or xwallet.tyron in the <a href="https://ssibrowser.com">ssibrowser.com</a>.
                </p>
                <p>
                    The did.tyron technology supports <a href="https://vitalik.ca/general/2021/01/11/recovery.html">Social Recovery</a> - thus, if your Admin key gets compromised, you can lock your digital identity and recover it only through your social 
                    recoverers. This use case is an example of how the Tyron DID infrastructure increases the security of users.
                </p>
                <p>
                    With a DIDxWallet, you can:
                </p>
                <ul>
                    <li>
                        Have a unique decentralized identifier and DID Document where you can show your public addresses and keys. Then people know how to interact with your self-sovereign identity.
                    </li>
                    <li>
                        Own and transfer tokens
                        (<a href="https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-2.md">ZRC2-standard</a>).
                        
                    </li>
                    <li>
                        Social Recovery: if you lose access to your Admin secret-key, your social recoverers will be able to instruct your DIDxWallet to update its Admin with your new address. 
                    </li>
                    <li>
                        DeFi: by interacting directly with the <a href="https://zilswap.io">ZilSwap</a> decentralized exchange smart contract, your xWallet can trade $ZIL for Singapore dollars ($XSGD) and more!
                        Also, provide and remove liquidity.
                    </li>
                    <li>
                        Staking: you can delegate $ZIL from your xWallet to the <a href="https://stake.zilliqa.com/">Zilliqa staking</a> smart contract.
                    </li>
                </ul>
                <p>
                    It's all smart contract to smart contract, on-chain, no intermediaries. As a Tyron SSI, you only have to pay the gas to execute all the above decentralized features. More coming soon.    
                </p>
                <p>
                    The DIDxWallet open-source development started during last year's <a href="https://www.xfers.com/sg">Xfers</a> $XSGD Hackathon along with <a href="https://zilhive.org/">ZILHive</a> Innovation Grants. 
                    This year, it got upgraded with Ignite DAO funding to support $ZIL staking. Thanks, everyone!
                </p>
            </section>
        </div>
	);
}

export default withRouter(Wallets);
