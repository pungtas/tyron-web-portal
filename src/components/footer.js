import React from "react";

function Footer() {
    return(
        <footer id="footer">
            <p>
                <a
                    class="icon brands fa-twitter"
                    href="https://twitter.com/ssiprotocol"
                    rel="noreferrer" target="_blank"
                >
                    <span class="label">
                        Twitter
                    </span>
                </a>
            </p>
            <p>
                <a
                    class="icon brands fa-github"
                    href="https://github.com/pungtas"
                    rel="noreferrer" target="_blank"                    
                >
                    <span class="label">
                        GitHub
                    </span>
                </a>
            </p>
            <p>
                <a
                    class="icon brands fa-discord"
                    href="https://discord.gg/FMAUh4ZNwZ"
                    rel="noreferrer" target="_blank"
                >
                    <span class="label">
                        Discord
                    </span>
                </a>
            </p>
		</footer>
    );
}

export default Footer;
