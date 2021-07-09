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
						Through our community and business model as a profit-sharing community, we want to invest in mitigating climate
						change and in other projects that seek to make our future brighter.
					</p>
				<h3 class="major">Self-sovereign identity (SSI)</h3>
					<p>
						Self-Sovereign Identity enables people like you to manage their digital, online identities, proving who they are
						without a middleman. This is achieved by anchoring <Link to="/did">decentralized identifiers</Link> on blockchain 
						networks as a shared root of trust. With this technology, we can have legitimacy as users but without giving away 
						our data to a centralised authority that owns our information. Thus, in the Tyron network, you become the sovereign 
						owner of your online identity and data.
					</p>
					<p>
						Specifically, Tyron develops web portals that are open-source software such as <Link to="/wallets">wallets</Link> and the
						<a href="https://ssibrowser.com"> SSI Browser</a>. Through these portals, self-sovereign identities can share public 
						and encrypted data, as well as make donations to aid natural and human-made disasters that endanger our planet’s ecosystems.
					</p>
			</section>
		</div>
	);
}

export default withRouter(About);
