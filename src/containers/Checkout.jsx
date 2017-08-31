import React, {Component} from "react";
import {connect} from "react-redux";

import {toggleCheckout} from "../actions/";
import Card from "./Card";

class Checkout extends Component {
	render() {
		return (
			<div id="checkout" className={this.props.isOpen && "open-checkout"}>
				<button onClick={this.props.toggleCheckout} className="show-mobile">Back to cart</button>
				<Card />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isOpen: state.reducer.isCheckoutOpen
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleCheckout: () => dispatch(toggleCheckout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);