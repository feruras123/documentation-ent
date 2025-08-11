/** @format */

import {
	FETCHING,
	LOADING,
	SET_COUNSELORS,
	SET_ETHNICITY,
	SET_GENDERS,
	SET_GRADES,
	SET_SCHOOLS,
	SET_STATIC_CHART,
} from "./types";

const initialState = {
	ethnicity: null,
	genders: null,
	counselors: null,
	grades: null,
	schools: null,
	loading: null,
	fetching: null,
	staticChartData: null,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: action.payload };
		case FETCHING:
			return { ...state, fetching: action.payload };
		case SET_GENDERS:
			return { ...state, genders: action.payload };
		case SET_GRADES:
			return { ...state, grades: action.payload };
		case SET_ETHNICITY:
			return { ...state, ethnicity: action.payload };
		case SET_COUNSELORS:
			return { ...state, counselors: action.payload };
		case SET_SCHOOLS:
			return { ...state, schools: action.payload };
		case SET_STATIC_CHART:
			return { ...state, staticChartData: action.payload };

		default:
			return state;
	}
}
