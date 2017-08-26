import React, {Component} from "react";
import {Link} from "react-router";

class Header extends Component {
	render() {
		return (
			<div id="header">
				<div className="container">
					<Link to="/">Home page</Link>
				</div>
			</div>
		);
	}
}

export default Header;