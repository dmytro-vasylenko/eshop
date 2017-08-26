import React, {Component} from "react";
import {connect} from "react-redux";

import {toggleCurtain, clearCart} from "../actions/";

class Curtain extends Component {
	componentWillUnmount() {
		if(this.props.isOpen) {
			this.props.toggleCurtain();
		}
	}

	render() {
		return (
			<div id="curtain" className={this.props.isOpen && "open-curtain"}>
				<button onClick={this.props.toggleCurtain}>Back to shopping</button>
				<div className="items">
					{Object.keys(this.props.items).map(key => {
						let item = this.props.items[key];
						return (
							<div className="curtain-item">
								<img src={item.image} alt="" />
								<h2>{item.title}</h2>
							</div>
						);
					})}
				</div>
				<div className="bottom-buttons">
					<button onClick={this.props.clearCart}>Clear</button>
					<button>Proceed to checkout</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.reducer.cart,
		isOpen: state.reducer.isCurtainOpen
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleCurtain: () => dispatch(toggleCurtain()),
		clearCart: () => dispatch(clearCart())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Curtain);