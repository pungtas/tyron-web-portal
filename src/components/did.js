import React from "react";
import { Link, withRouter } from "react-router-dom";

function Did() {
	return(
		<div id="main" style={{ marginTop: '7%', marginBottom: '10%' }}>
            <span role="img" aria-label="back arrow" style={{ marginBottom: '3%' }}>
                <Link to="/wallets">🔙</Link>
            </span>
            <h2 style={{ width: "100%", textAlign:"center" }}>Decentralized Identifiers</h2>
            <p>
                The W3C Decentralized Identifier Working Group has developed the
                {' '}<a 
                    href="https://w3c.github.io/did-core/"
                    rel="noreferrer" target="_blank"
                >
                    Decentralized Identifiers (DIDs)
                </a>{' '}
                specification that defines a DID as a unique identifier that enables verifiable, decentralized digital identity. The Tyron Self-Sovereign Identity Protocol 
                is conformant with this specification by implementing the
                {' '}<a
                    href="https://www.tyronzil.com/"
                    rel="noreferrer" target="_blank"
                >
                    tyronzil
                </a>{' '}
                DID Method, listed in the
                {' '}<a
                    href="https://w3c.github.io/did-spec-registries/"
                    rel="noreferrer" target="_blank"
                >
                    W3C DID Specification Registries
                </a>.
                A digital identity's decentralized identifier relies on public attributes described in its DID Document. Such attributes are service endpoints and verification methods.
            </p>
            <section>
            <h3 class="major">Services</h3>
            <p>
                Network addresses, such as an HTTP URL (web2) or blockchain address (web3), are endpoints at which services operate, and these web addresses 
                are publicly available at the digital identity's DID Document. Services can refer to privacy-preserving communication (SSI Comm) and social networking apps, 
                among many others. For example, the init.tyron dapp (SSI Initialization & Domain Name System smart contract) shows in its DID services the web addresses of
                {' '}<a
                    href="https://zilswap.io/swap"
                    rel="noreferrer" target="_blank"
                >
                    ZilSwap
                </a>{' '}
                and
                {' '}<a 
                    href="https://stake.zilliqa.com/"
                    rel="noreferrer" target="_blank"
                >
                    Zilliqa's non-custodial staking
                </a>{' '}
                smart contracts. This way, other digital identities can remote-read these web addresses instead of having to save (and update) this information themselves.
            </p>
            <h3 class="major">Verification methods</h3>
            <p>
                Cryptographic key pairs allow the user to authenticate themselves or authorize transactions through digital signatures. Verification methods 
                correspond to verification relationships such as:
            </p>
            <ul>
                <li><b>Authentication:</b> To sign in to a service or website.</li>
                <li><b>Assertion:</b> To sign claims in
                    {' '}<a
                        href="https://www.w3.org/TR/vc-data-model/"
                        rel="noreferrer" target="_blank"
                    >
                        verifiable credentials
                    </a>.</li>
                <li><b>Key agreement:</b> A public key of yours that people can use to encrypt confidential information into a message that only you can 
                decrypt with your corresponding private key.</li>
                <li><b>Capability invocation:</b> A key that invokes a cryptographic capability to, e.g., authorize the update of your DID Document.</li>
                <li><b>Capability delegation:</b> To delegate a cryptographic capability to another party.</li>
            </ul>
            </section>
        </div>
	);
}

export default withRouter(Did);
