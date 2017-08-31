import React, {Component} from "react";
import {connect} from "react-redux";

import {toggleCurtain, toggleCheckout, clearCart} from "../actions/";
import ItemInCart from "./ItemInCart";

class Curtain extends Component {
	componentWillUnmount() {
		if(this.props.isOpen) {
			this.props.toggleCurtain();
		}
	}

	render() {
		let curtainClass = (this.props.isCheckoutOpen && "shift-curtain") || (this.props.isOpen && "open-curtain");
		return (
			<div id="curtain" className={curtainClass}>
				<button onClick={this.props.toggleCurtain}>Back to shopping</button>
				<div className="items">
					{Object.keys(this.props.items).map((index, key) => {
						return <ItemInCart item={this.props.items[key]} key={key} />
					})}
				</div>
				<div className="bottom-buttons">
					<button onClick={this.props.clearCart}>Clear</button>
					<button onClick={this.props.toggleCheckout}>Proceed to checkout</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.reducer.cart,
		isOpen: state.reducer.isCurtainOpen,
		isCheckoutOpen: state.reducer.isCheckoutOpen
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleCurtain: () => dispatch(toggleCurtain()),
		toggleCheckout: () => dispatch(toggleCheckout()),
		clearCart: () => dispatch(clearCart())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Curtain);