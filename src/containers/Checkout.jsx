import React, {Component} from "react";
import {connect} from "react-redux";
import Cards from "react-credit-cards";

import {toggleCheckout} from "../actions/";
import "../styles/card.css";

class Checkout extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			card: {
				number: "",
				name: "",
				expiry: "",
				cvc: "",
				focused: "",
			}
		};
	}

	render() {
		var {card} = this.state;
		return (
			<div id="checkout" className={this.props.isOpen && "open-checkout"}>
				<button onClick={this.props.toggleCheckout} className="show-mobile">Back to cart</button>
				<div className="card">
					<Cards
						number={card.number}
						name={card.name}
						expiry={card.expiry}
						cvc={card.cvc}
						focused={card.focused}
					/>
					<div className="card-data">
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</div>
				</div>
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