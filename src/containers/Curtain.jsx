import React, {Component} from "react";
import {connect} from "react-redux";

import {toggleCurtain} from "../actions/";

class Curtain extends Component {
	render() {
		return (
			<div id="curtain" className={this.props.isOpen && "open-curtain"}>
				<button onClick={this.props.toggleCurtain}>Close</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.reducer.items,
		isOpen: state.reducer.isCurtainOpen
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleCurtain: () => dispatch(toggleCurtain())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Curtain);