import React, {Component} from "react";
import {connect} from "react-redux";

import Item from "./Item";
import {loadItems, addItem, setShopIsLoad} from "../actions/";
import Header from "./Header";

class Shop extends Component {
	componentWillMount() {
		if(!this.props.isLoad) {
			this.props.onLoadItems(loadItems());
			this.props.setShopIsLoad();
		}
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<div className="shop">
						{Object.keys(this.props.items).map((item, index) => {
							return <Item data={this.props.items[item]} key={index} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.reducer.items,
		isLoad: state.reducer.isShopLoad
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadItems: items => {
			items.forEach(item => dispatch(addItem(item)));
		},
		setShopIsLoad: () => dispatch(setShopIsLoad())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);