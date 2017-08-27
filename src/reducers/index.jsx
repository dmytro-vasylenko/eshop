import * as types from "../constants/ActionTypes";

const initialState = {
	items: {},
	isShopLoad: false,
	cart: [],
	isCurtainOpen: false,
	isCheckoutOpen: false
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case types.ADD_ITEM:
			return {
				items: Object.assign({}, state.items, {
					[action.payload.id]: action.payload
				}),
				isShopLoad: state.isShopLoad,
				cart: state.cart,
				isCurtainOpen: state.isCurtainOpen
			};
		case types.SET_SHOP_IS_LOAD:
			return Object.assign({}, state, {
				isShopLoad: true
			});
		case types.ADD_TO_CART:
			return Object.assign({}, state, {
				cart: [...state.cart, action.payload]
			});
		case types.TOGGLE_CURTAIN:
			var currentCurtainState = state.isCurtainOpen;
			var checkoutState = currentCurtainState ? false : state.isCheckoutOpen;
			return Object.assign({}, state, {
				isCurtainOpen: !currentCurtainState,
				isCheckoutOpen: checkoutState
			});
		case types.TOGGLE_CHECKOUT:
			var currentCheckoutState = state.isCheckoutOpen;
			return Object.assign({}, state, {
				isCheckoutOpen: !currentCheckoutState
			});
		case types.CLEAR_CART:
			return Object.assign({}, state, {
				cart: []
			});
		default:
			return state;
	}
}

export default reducer;