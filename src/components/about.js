import React from "react";
import steffen from '../images/steffen.JPEG';
import { Link, withRouter } from "react-router-dom";

function About() {
	return(
		<div id="main">
			<span role="img" aria-label="back arrow" style={{ marginTop:"7%", marginBottom: '2%' }}><Link to="/">🔙</Link></span>
			<h2 style={{ width: "100%", textAlign:"center" }}>About</h2>
			<span class="image main"><img src={steffen} alt="" /></span>
			<section style={{ width:'100%' }}>
				<p>
					The word <i>tyron</i> derives from the Greek <i>turannos</i>
					, meaning ’sovereign’. The purpose of the Tyron Self-Sovereign Identity Protocol is to 
					give people sovereignty over their data. Sovereignty to empower our world and to enhance our security online.
				</p>
				<p>
					Tyron Pungtas is a private limited company incorporated in the Republic of Singapore to comply with the legal
					requirements for the protection of our community.
				</p>
				<h3 class="major">Self-sovereign identity (SSI)</h3>
				<p>
					The Tyron SSI Protocol enables people like you to manage your digital, online identities, proving who you are
					without a middleman. This is achieved by anchoring <Link to="/did">decentralized identifiers</Link> on blockchain 
					networks as a shared root of trust. With this technology, we can have legitimacy as users without giving
					our data to a centralized authority that owns our information. Thus, the Tyron SSI Protocol empowers you to become
					the sovereign owner of your online identity and data assets.
				</p>
				<p>
				Specifically, Tyron develops open-source, decentralized applications such as <Link to="/wallets">smart contract wallets</Link>.
				And it also provides other products and services for self-sovereign identities.
				</p>
			</section>
		</div>
	);
}

export default withRouter(About);
