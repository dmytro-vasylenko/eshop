import React, {Component} from "react";

class Item extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		alert("open item...");
	}

	render() {
		const {id, img, title, price} = this.props;

		return (
			<div className="item" onClick={this.handleClick}>
				<img src={img} />
				<div className="title">
					<h3>{title}</h3>
					<span>{price}</span>
				</div>
			</div>
		);
	}
}

export default Item;