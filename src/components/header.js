import React from "react";
import logo from '../images/tyron.gif';
import { Link } from "react-router-dom";
import SSIBrowser from "./SSIBrowser";

function Header() {
    return(
        <>
        <SSIBrowser />
        <div id="header">
            <img src={logo} width="20%" alt="tyron_logo"/>
            <div class="content">
                <div class="inner">
                    <h1>Self-Sovereign Identity Protocol</h1>
                    <p>Own your data. Empower your world.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a
                            href="https://ssiprotocol.notion.site/TYRON-a-network-for-self-sovereign-identities-3e39d78b34464d178f4490048d026941"
                            rel="noreferrer" target="_blank"
                        >
                            whitepaper
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/wallets">DID<span style={{ textTransform: 'lowercase'}}>x</span>Wallet</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Header;
