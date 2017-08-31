import React, {Component} from "react";

class ItemInCart extends Component {
	render() {
		let {item} = this.props;

		return (
			<div className="curtain-item">
				<img src={item.image} alt="" />
				<h2>{item.title}</h2>
			</div>
		);
	}
}

export default ItemInCart;