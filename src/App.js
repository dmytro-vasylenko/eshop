import React, {Component} from "react";

import Header from "./containers/Header";
import Shop from "./containers/Shop";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Shop />
			</div>
		);
	}
}

export default App;
