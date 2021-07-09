import React from "react";
import Chart from "react-google-charts";
import { Link, withRouter } from "react-router-dom";

function PSC() {
	return(
		<div id="main">
            <span role="img" aria-label="back arrow" style={{ marginTop:"7%", marginBottom: '2%' }}><Link to="/">🔙</Link></span>
            <h2 style={{ width: "100%", textAlign:"center" }} class="major">Profit-Sharing Community</h2>
            <section style={{ width: "100%" }}>
                <p>The SSI Protocol will grow to be governed by the Tyron Pungtas Profit-Sharing Community with $TYRON as its profit-sharing token. Accordingly, $TYRON hodlers will:</p>
                <ul>
                    <li>Receive an income from the protocol's fee - proportional to their stake. There will be a minimum stake to become a hodler.</li>
                    <li>Vote and constitute the SSI Governance.</li>
                    <li>Access exclusive DeFi passive incomes, e.g. as an SSI Agent that operates a gas station. Also, $TYRON rewards for TYRON/ZIL liquidity providers on ZilSwap.</li>
                </ul>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ticker</td>
                                <td>TYRON</td>
                                <td>The unique symbol assigned to $TYRON.</td>
                            </tr>
                            <tr>
                                <td>Initial supply</td>
                                <td>10,000,000</td>
                                <td>The initial amount of tokens that will get minted.</td>
                            </tr>
                            <tr>
                                <td>Smallest unit</td>
                                <td>AYJA</td>
                                <td>One $TYRON can get divided into 1,000,000,000 $AYJA.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section style={{ width:'100%' }}>        
                <h3 class="major">$TYRON initial allocation</h3>
                <p>The circulating supply of $TYRON increases across time. It'll start with 10,000,000 $TYRON as the initial supply, 51% of which (5,100,000 $TYRON) will get permanently allocated to the Tyron Pungtas Profit-Sharing Community (PSC) to become a community interest company (CIC) so to give the CIC an income stream from protocol's fees. 65% of the company's profits will get yearly invested in one or more <Link to="/mapu">SSI decentralized communities</Link> voted by SSI Governance.</p>
                <p>As a % of the initial supply:</p>
                <Chart
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['', ''],
                        ['Community Interest Company (CIC)', 51],
                        ['$TYRON hodlers', 49],
                        
                    ]}
                    options={{
                        is3D: true,
                        backgroundColor: 'transparent',
                        chartArea:{ width:'100%', height:'100%', left: 96, right: 96 },
                        fontName: "Source Sans Pro",
                        colors: ["#32527b", "#aaa9ad"],
                        legend: { position: 'left', textStyle: { color: 'white', fontSize: 16, bold: 'true' }},
                        tooltip: { text: 'percentage', textStyle: { bold: 'true' }},
                        pieSliceTextStyle: { color: 'black', bold: 'true' }
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                <h3>Lock-up periods & distribution </h3>
                <div class="table-wrapper">
                    <table class="alt">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Allocation ($TYRON)</th>
                                <th>Lock-up period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tyron Pungtas CIC</td>
                                <td>5,100,000</td>
                                <td>Permanent</td>
                            </tr>
                            <tr>
                                <td>$TYRON hodlers</td>
                                <td>4,900,000</td>
                                <td>Exponential decay</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section style={{ width:'100%' }}> 
                <h3 class="major">SSI Governance</h3>
                <p>Decentralized governance with the following features:</p>
                <ul>
                    <li>A quorum of 67% of the voting power</li>
                    <li>1 $TYRON = 1 vote</li>
                </ul>
                <p>To decide:</p>
                <ul>
                    <li>Profit-sharing tokens that liquidity mine $TYRON - e.g. $xgZIL</li>
                    <li>Mint rate of $TYRON from gas stations</li>
                    <li>Fee price for SSI products and services such as to purchase an SSI domain name or to execute DID CRUD operations</li>
                    <li>The SSI decentralized communities that will win the yearly allocation of the CIC's 65% of profits</li>
                    <li>Lockup period for $TYRON liquidity mining</li>
                </ul>
            </section>
            <section style={{ width:'100%' }}>
                <h3 class="major">Travel Rule SSI Passport</h3>
                <p>In compliance with the Financial Action Task Force (FATF) Travel Rule, the SSI Protocol grants every self-sovereign identity the possibility to have an Travel Rule SSI Passport that implements the <a href="https://intervasp.org/wp-content/uploads/2020/05/IVMS101-interVASP-data-model-standard-issue-1-FINAL.pdf">InterVASP Messaging Standard IVMS101</a> encrypted in their <Link to="/wallets">SSI permaWallet</Link>. To avoid illegal activities that harm society, such as terrorism financing and money laundering, developing into a web of trust.</p>
                <p>Such a compliance mechanism makes $TYRON attractive to both retail and institutional investors. The private companies and other organizations that integrate the Tyron Self-Sovereign Identity Protocol will comply with the FATF Travel Rule when requiring their customer base to enable their Travel Rule SSI Passport.</p>
            </section>
        </div>
	);
}

export default withRouter(PSC);
