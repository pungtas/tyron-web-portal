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
					<p>The word <i>tyron</i> derives from the Greek <i>turannos</i> that means sovereign, and the purpose of the Tyron Self-Sovereign Identity Protocol is to give people sovereignty over their data. Sovereignty to empower our world by protecting nature and helping each other in times of need, selflessly.</p>
				<h3 class="major">Self-sovereign identity (SSI)</h3>
					<p>Self-sovereign identity enables people to manage their digital, online identities - proving who they are without a 
						middleman, by anchoring <Link to="/did">decentralized identifiers</Link> on blockchain networks as a shared root 
						of trust.
					</p>
					<p>Tyron develops web portals that are open-source <a href="https://github.com/pungtas" class="icon brands fa-github"><span class="label">GitHub</span></a>{' '}software
						to enable self-sovereign identities to share public and encrypted data, as well as make donations to aid natural and human-made disasters that endanger our planet's ecosystems.</p>
			</section>
		</div>
	);
}

export default withRouter(About);
