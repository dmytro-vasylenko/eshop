import React, {Component} from "react";
import { browserHistory } from 'react-router'

class Item extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		browserHistory.push("/item/" + this.props.data.id);
	}

	render() {
		const {img, title, price} = this.props.data;

		return (
			<div className="item" onClick={this.handleClick}>
				<img src={img} alt="" />
				<div className="title">
					<h3>{title}</h3>
					<span>{price}</span>
				</div>
			</div>
		);
	}
}

export default Item;