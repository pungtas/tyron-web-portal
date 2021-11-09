import React from "react";
import incendios_chubut from "../images/incendios_chubut.jpg";
import { Link, withRouter } from "react-router-dom";

function Mapu() {
	return(
		<div id="main" style={{ marginTop: '7%', marginBottom: '10%' }}>
            <span role="img" aria-label="back arrow" style={{ marginBottom: '3%' }}><Link to="/about">🔙</Link></span>
            <h2 style={{ width: "100%", textAlign:"center" }}>Self-sovereign communities</h2>
            <section style={{ width:'100%' }}>
            <p>
                We all care about our natural environment, to a greater or lesser extent. The focus on climate change, natural disasters and other 
                collective threats invite us to work together to solve them. However, these issues are complex, and for the individual, it can be difficult 
                to know what to do and where to start. Information is scattered, and like-minded communities are sometimes disconnected from each other. 
            </p>
            <p>
                The SSI Protocol strives towards connecting people that want to protect nature and its precious ecosystems. <i>Mapu</i> will be the 
                web portal for digital identities that organize campaigns to aid natural and human-made disasters, enabling people to send them donations 
                peer-to-peer to support their projects.
            </p>
                <p>A few recent examples show the grave consequences of climate change:</p>
                <span class="image main"><img src={incendios_chubut} alt=""/></span>
                <ul>
                    <li>
                        Thousands of hectares got
                        {' '}<a
                            href="https://www.opendemocracy.net/en/democraciaabierta/patagonia-argentina-mining-indigenous-politics-fire/"
                            rel="noreferrer" target="_blank"
                        >
                            intentionally burned in Patagonia in March 2021
                        </a>.
                        In the Chubut province of Argentina, fires destroyed more than 500 houses along seven towns,
                        including national parks.
                    </li>
                    <li>
                        More than 6 million hectares burned in Australia.
                    </li>
                    <li>
                        NASA satellites detected about 1.4 million anomalies in the southern Amazon, compared to 1.1 million in 2019. In the Pantanal, 
                        along the border of Brazil, Paraguay, and Bolivia, fires destroyed 4.4 million hectares in 2020, about 28% of the Pantanal.
                    </li>
                    
                </ul>
                <p>
                    If we can improve our ability to work together to organize and aid - even far away from the centre of the disaster - we get closer to 
                    avoiding tragedies like those above. Blockchain technologies can help us distribute information freely and quickly to donate money 
                    peer-to-peer. So if you are looking for a place to start helping, join our <i>Mapu</i> communities launching soon!
                </p>
            </section>
        </div>
	);
}

export default withRouter(Mapu);
