import {connect} from "react-redux";

class Intz {
	constructor() {
		this.langs = ["en", "ru"];
		this.texts = {
			HOME_PAGE: {
				en: "Home page",
				ru: "Главная страница"
			},
			ADD_TO_CART: {
				en: "Add to cart",
				ru: "Добавить в корзину"
			},
			BUY_RIGHT_NOW: {
				en: "Buy right now",
				ru: "Купить прямо сейчас"
			},
			BACK_TO_SHOPPING: {
				en: "Back to shopping",
				ru: "Вернуться к покупкам"
			},
			CLEAR: {
				en: "Clear",
				ru: "Очистить"
			},
			PROCEED_TO_CHECKOUT: {
				en: "Proceed to checkout",
				ru: "Оформить"
			}
		};
		this.lang = "en";
	}

	getTextFor(key) {
		return this.texts[key][this.lang];
	}

	// getTexts(lang) {
	// 	return this.
	// }

	setLang(lang) {
		if(this.langs.includes(lang)) {
			this.lang = lang;
		}
	}

	test() {
		console.log("test:", this.props.test);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		test: dispatch()
	};
};

export default connect(null, mapDispatchToProps)(Intz);