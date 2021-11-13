import React from "react";
import { withRouter } from "react-router-dom";

function Contact() {
	return(
		<div id="main" style={{ marginTop: '7%', marginBottom: '10%' }}>
            <h2 style={{ width: "100%", textAlign:"center" }}>Contact</h2>
            <section style={{ width: "100%", textAlign:"center" }}>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <p>
                            <a
                                className="icon brands fa-discord"
                                href="https://discord.gg/NPbd92HJ7e"
                                rel="noreferrer" target="_blank"
                            >
                            <span className="label">
                                Discord
                            </span>
                            </a>
                            <code>
                                <a
                                    href="https://discord.gg/NPbd92HJ7e"
                                    rel="noreferrer" target="_blank"
                                >
                                    Tyron SSI Community
                                </a>
                            </code>
                        </p>
                    </li>
                    <li>
                        <p>
                            Email: <code>tyron@ssiprotocol.com</code>
                        </p>
                    </li>
                    <li>
                        <a
                            className="icon brands fa-discord"
                            href="https://discord.gg/FMAUh4ZNwZ"
                            rel="noreferrer" target="_blank"
                        >
                        <span className="label">
                            Discord
                        </span>
                        </a>{' '} 
                        In Zilgineers:
                        <code>
                            <a
                                href="https://discord.gg/FMAUh4ZNwZ"
                                rel="noreferrer" target="_blank"
                            >
                                tyron-ssi-protocol
                            </a>
                        </code>
                    </li>
                </ul>
            </section>	
        </div>
	);
}

export default withRouter(Contact);
