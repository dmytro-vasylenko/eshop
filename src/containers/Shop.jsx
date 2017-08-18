import React, {Component} from "react";
import {connect} from "react-redux";

import Item from "./Item";

class Shop extends Component {
	render() {
		return (
			<div className="shop">
				{this.props.items.map((item, index) => {
					<Item data={item.data} />
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items
	};
};

export default connect(mapStateToProps)(Shop);