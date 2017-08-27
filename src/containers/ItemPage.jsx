import React, {Component} from "react";
import {connect} from "react-redux";

import {addItem, loadItem, addToCart, toggleCurtain} from "../actions/";
import Header from "./Header";
import Curtain from "./Curtain";
import Checkout from "./Checkout";

class ItemPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quantity: 1,
			curtain: false
		};

		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
	}

	componentWillMount() {
		if(!this.props.item) {
			this.props.addItem(loadItem(this.props.params.id));
		}
	}

	handleAddToCart() {
		var {id, image, title, price} = this.props.item;
		var currentQuantity = this.state.quantity;
		this.props.addToCart({
			id, image, title, price,
			quantity: currentQuantity
		});
	}

	handlePlus() {
		let currentQuantity = this.state.quantity;
		this.setState({
			quantity: currentQuantity + 1
		});
	}

	handleMinus() {
		let currentQuantity = this.state.quantity;
		if(currentQuantity > 1) {
			this.setState({
				quantity: currentQuantity - 1
			});
		}
	}

	render() {
		var {item} = this.props;

		if(!item) {
			return <div></div>;
		}

		return (
			<div>
				<Header />
				<div className="container item-page">
					<img src={item.image} className="item-main-image" alt="" />
					<div className="info">
						<span>{item.price}$</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi, corporis debitis earum, cumque unde esse fugiat rerum porro similique tenetur distinctio neque quis doloribus cupiditate corrupti? Vero quia eveniet iure earum esse pariatur doloribus, fugiat? Dolor quam voluptate earum ex vero. Sit accusantium facere saepe distinctio, quisquam at veniam porro eveniet natus, nulla dolore cumque maiores placeat, omnis. Veritatis odio debitis, distinctio vel animi. Veritatis asperiores ut eveniet enim accusamus natus fugiat quisquam veniam adipisci iure labore, illo fugit, dolorum vitae perferendis iusto libero alias perspiciatis. Ab repudiandae laboriosam ea minus quod, assumenda incidunt totam possimus, eaque quasi, ad!</p>
						<div className="buttons">
							<div className="controls">
								<button onClick={this.handleMinus} className="control-button">-</button>
								<span>{this.state.quantity}</span>
								<button onClick={this.handlePlus} className="control-button">+</button>
							</div>
							<div className="action-buttons">
								<button onClick={this.handleAddToCart}>Add to Cart</button>
								<button onClick={this.props.toggleCurtain}>Buy right now</button>
							</div>
						</div>
					</div>
				</div>
				<Curtain />
				<Checkout />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		item: state.reducer.items[ownProps.params.id]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addItem: item => dispatch(addItem(item)),
		addToCart: item => dispatch(addToCart(item)),
		toggleCurtain: () => dispatch(toggleCurtain())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);