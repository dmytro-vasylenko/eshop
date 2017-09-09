import React, {Component} from "react";
import { hashHistory } from "react-router";

class Item extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		hashHistory.push("/item/" + this.props.data.id);
	}

	render() {
		const {image, title, price} = this.props.data;

		return (
			<div className="item" onClick={this.handleClick}>
				<img src={image} alt="" />
				<div className="title">
					<h3>{title}</h3>
					<span>{price}</span>
				</div>
			</div>
		);
	}
}

export default Item;