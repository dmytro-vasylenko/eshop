import React, {Component} from "react";
import {connect} from "react-redux";

import Header from "./Header";

class Admin extends Component {
	render() {
		return (
			<div>
				<Header />
				<h1>Admin panel</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.reducer.items
	};
};

export default connect(mapStateToProps)(Admin);