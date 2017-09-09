import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

class Header extends Component {
	render() {
		let containerClass = "container ";
		if(this.props.isCompact) {
			containerClass =+ "container-compact";
		}

		let menu = [
			{link: "/", title: "Home page"},
			{link: "/admin", title: "Admin panel"}
		];


		return (
			<div id="header">
				<div className={containerClass}>
					<ul>
						{menu.map((item, index) => {
							return <li key={index}><Link to={item.link}>{item.title}</Link></li>;
						})}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isCompact: state.reducer.isCurtainOpen
	};
};

export default connect(mapStateToProps)(Header);