/** @format */

import {
	FETCH_USERS,
	FETCHING,
	LOADING,
	ADD_ENTRY,
	FETCH_ENTRY,
} from "./types";

const initialState = {
	loading: null,
	fetching: true,
	entries: [],
	entry: null,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: action.payload };
		case FETCHING:
			return { ...state, fetching: action.payload };
		case FETCH_USERS:
			return { ...state, entries: action.payload };
		case ADD_ENTRY:
			return { ...state, entries: [action.payload, ...state.entries] };
		case FETCH_ENTRY:
			return { ...state, entry: action.payload };
		default:
			return state;
	}
}
