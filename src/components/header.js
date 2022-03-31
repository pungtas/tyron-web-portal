import React from "react";
import logo from '../images/tyron_logo.png';
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
                            href="https://ssiprotocol.notion.site/ssiprotocol/TYRON-Whitepaper-5ca16fc254b343fb90cfeb725cbfa2c3"
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
