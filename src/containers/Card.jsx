import React, {Component} from "react";

const CARD_NUMBER_LENGTH = 4;

class Card extends Component {
	constructor(props) {
		super(props);
		
		this.setNumber = this.setNumber.bind(this);
		this.setExpires = this.setExpires.bind(this);

		this.state = {
			number: [[], [], [], []],
			expires: [[], []]
		};
	}

	setNumber(event, index) {
		let number = this.state.number;
		let value = event.target.value;
		// eslint-disable-next-line
		if(value != Number(value)) {
			return;
		}
		number[index] = value;

		if(this.state.number[index].length === CARD_NUMBER_LENGTH) {
			if(index < 3) {
				document.querySelectorAll(".card-number input")[index + 1].focus();
			} else {
				document.querySelectorAll(".card-expires input")[0].focus();
			}
		} else if(this.state.number[index].length === 0 && index > 0) {
			document.querySelectorAll(".card-number input")[index - 1].focus();
		}

		this.setState({number});
	}

	setExpires(event, index) {
		let expires = this.state.expires;
		let value = event.target.value;
		// eslint-disable-next-line
		if(value != Number(value)) {
			return;
		}

		expires[index] = value;

		if(this.state.expires[index].length === 2 && index === 0) {
			document.querySelectorAll(".card-expires input")[index + 1].focus();
		} else if(this.state.expires[index].length === 0 && index === 1) {
			document.querySelectorAll(".card-expires input")[index - 1].focus();
		}

		this.setState({expires});
	}

	render() {
		return (
			<div className="card">
				<div className="chip" />
				<div className="card-number">
					<input type="number" value={this.state.number[0]} onChange={e => this.setNumber(e, 0)} placeholder="****" />
					<input type="number" value={this.state.number[1]} onChange={e => this.setNumber(e, 1)} placeholder="****" />
					<input type="number" value={this.state.number[2]} onChange={e => this.setNumber(e, 2)} placeholder="****" />
					<input type="number" value={this.state.number[3]} onChange={e => this.setNumber(e, 3)} placeholder="****" />
				</div>
				<div className="card-expires">
					<input type="number" value={this.state.expires[0]} onChange={e => this.setExpires(e, 0)} placeholder="MM" />
					<div className="separator">/</div>
					<input type="number" value={this.state.expires[1]} onChange={e => this.setExpires(e, 1)} placeholder="YY" />
				</div>
			</div>
		);
	}
}

export default Card;