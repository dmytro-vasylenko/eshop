import React, {Component} from "react";
import {connect} from "react-redux";

class Checkout extends Component {
	render() {
		return (
			<div id="checkout" className={this.props.isOpen && "open-checkout"}>
				Hello! I am checkout.
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isOpen: state.reducer.isCheckoutOpen
	};
};

export default connect(mapStateToProps)(Checkout);