import * as types from "../constants/ActionTypes";

export function addItem(payload) {
	return {
		type: types.ADD_ITEM,
		payload
	};
};