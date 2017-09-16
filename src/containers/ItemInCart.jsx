import React, {Component} from "react";

class ItemInCart extends Component {
	render() {
		let {item} = this.props;

		return (
			<div className="curtain-item">
				<img src={item.image} alt="" />
				<div className="item-info">
					<h2>{item.title}</h2>
					<span>{item.price}$ x {item.quantity} = {item.quantity * item.price}$</span>
				</div>
			</div>
		);
	}
}

export default ItemInCart;