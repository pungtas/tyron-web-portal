import React from "react";
import logo from '../images/tyron_logo.png';

function Header() {
    return(
        <div id="header">
            <img src={logo} width="20%" alt="tyron_logo"/>
            <div class="content">
                <div class="inner">
                    <h1>Tyron Self-Sovereign Identity Protocol</h1>
                    <p>Own your data. Empower your world.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="https://www.ssibrowser.com">SSI Browser App</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
