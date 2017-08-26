import axios from "axios";

import * as types from "../constants/ActionTypes";

export function addItem(payload) {
	return {
		type: types.ADD_ITEM,
		payload
	};
};

export function setShopIsLoad() {
	return {
		type: types.SET_SHOP_IS_LOAD
	};
};

export function addToCart(item) {
	return {
		type: types.ADD_TO_CART,
		payload: item
	};
};

export function toggleCurtain() {
	return {
		type: types.TOGGLE_CURTAIN
	};
};

export function fetchData(url, dispatch) {
	axios.get(url).then(response => {
		dispatch(response);
	});
}








var values = [
	{
		id: 1,
		img: "../items/1.jpg",
		title: "Test item",
		price: "100",
		rating: 3.3
	},
	{
		id: 2,
		img: "../items/2.jpg",
		title: "Test item num 2",
		price: "200",
		rating: 4.9
	},
	{
		id: 3,
		img: "../items/3.jpg",
		title: "Test item num 3",
		price: "300",
		rating: 4.7
	},
	{
		id: 4,
		img: "../items/4.jpg",
		title: "Test item num 4",
		price: "400",
		rating: 4.1
	},
	{
		id: 5,
		img: "../items/5.jpg",
		title: "Test item num 5",
		price: "500",
		rating: 5.0
	},
	{
		id: 6,
		img: "../items/6.jpg",
		title: "Test item num 6",
		price: "600",
		rating: 1.6
	},
	{
		id: 7,
		img: "../items/7.jpg",
		title: "Test item num 7",
		price: "700",
		rating: 3.6
	},
	{
		id: 8,
		img: "../items/8.jpg",
		title: "Test item num 8",
		price: "800",
		rating: 3
	}
];


export function loadItems() {
	return values;
}

export function loadItem(id) {
	return values.filter(item => item.id === Number(id))[0];
}