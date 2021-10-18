import './styles/css/main.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, About, Did, Mapu, Wallets, Contact} from "./components";

function App() {
	return(
		<div id="wrapper">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/about" ><About /></Route>
					<Route exact path="/did" ><Did /></Route>
					<Route exact path="/mapu" ><Mapu /></Route>
					<Route exact path="/wallets" ><Wallets /></Route>
					<Route exact path="/contact" ><Contact /></Route>			
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
