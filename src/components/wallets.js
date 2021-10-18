import React from "react";
import { Link, withRouter } from "react-router-dom";

function Wallets() {
	return(
		<div id="main">
            <span role="img" aria-label="back arrow" style={{ marginTop:"7%", marginBottom: '2%' }}><Link to="/">🔙</Link></span>
            <h2 style={{ width: "100%", textAlign:"center" }}>DID<span style={{ textTransform: 'lowercase'}}>x</span>Wallet</h2>
            <section style={{ width: "100%" }}>    
                <p>
                    This wallet, the Decentralized Identifier smart contract wallet, is the protocol's flagship.
                </p>
                <p>
                    The DIDxWallet implements the <a href="https://tyronzil.com">tyronzil</a> W3C DID Method, integrating the did.tyron smart
                    contract, which allows the user to establish a decentralized digital identity. Your Decentralized Identifier now got equipped with its own xWallet! We want to promote being open-source and
                    transparent, and you can read our code by searching did.tyron or xwallet.tyron in the <a href="https://ssibrowser.com">ssibrowser.com</a>.
                </p>
                <p>
                    The did.tyron technology supports <a href="https://vitalik.ca/general/2021/01/11/recovery.html">Social Recovery</a> - thus, if your DID Controller key gets compromised, you can lock your wallet and recover it only through your social 
                    recoverers. This use case is an example of how the tyronzil DID infrastructure increases the security of users.
                </p>
                <p>
                    With a DIDxWallet, you can:
                </p>
                <ul>
                    <li>
                        Have a unique decentralized identifier and DID Document where you can show your services and verification methods. Then people know how to interact and authenticate with your digital identity.
                    </li>
                    <li>
                        Own and transfer tokens
                        (<a href="https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-2.md">ZRC2-standard</a>).
                        
                    </li>
                    <li>
                        Social Recovery: if you lose access to your DID Controller private key, your social recoverers will be able to instruct your DIDxWallet to update its controller with your new address. 
                    </li>
                    <li>
                        DeFi: by interacting directly with the <a href="https://zilswap.io">ZilSwap</a> decentralized exchange, your xWallet can provide liquidity (yield farming) and trade tokens.
                    </li>
                    <li>
                        Staking: you can delegate $ZIL from your xWallet to the <a href="https://stake.zilliqa.com/">Zilliqa staking</a> smart contract.
                    </li>
                </ul>
                <p>
                    It's all smart contract to smart contract, on-chain, no intermediaries. You only have to pay the gas cost to execute the transactions.
                </p>
                <p>
                    Due to the DID verification methods, there is a security issue related to the different keys that a DID requires. Moreover, most wallets on the market are custodial, relying on intermediaries or third parties,
                    meaning that the secure management of your private keys is at the hands of others. This is less desirable for users that want more control over their keys, also when operating on different blockchains.
                    The SSI Protocol targets this issue with our Decentralized Key Management System that stores encrypted private keys in the DIDxWallet.
                </p>
                
            </section>
        </div>
	);
}

export default withRouter(Wallets);
