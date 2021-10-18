import React from "react";
import { Link, withRouter } from "react-router-dom";

function Home() {
    return (
        <div id="header" style={{ marginTop: '1%', width: '100%' }}>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/did">DID</Link></li>
                    <li><Link to="/wallets">DID<span style={{ textTransform: 'lowercase'}}>x</span>Wallet</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Home);
