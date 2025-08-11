/** @format */

import { SET_USER, LOGOUT_USER, AUTHENTICATED, LOADING } from "./types";

const initialState = {
	authenticated: null,
	user: null,
	loading: null,
};
2;

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: action.payload };
		case AUTHENTICATED:
			return { ...state, authenticated: true };
		case SET_USER:
			return { ...state, user: action.payload };
		case LOGOUT_USER:
			return {
				...initialState,
			};
		default:
			return state;
	}
}
