/** @format */

import {
	FETCHING,
	SET_COUNSELORS,
	SET_ETHNICITY,
	SET_GENDERS,
	SET_GRADES,
	SET_SCHOOLS,
	SET_STATIC_CHART,
} from "../reducers/types";
import {
	GET_GENDERS,
	GET_GRADES,
	GET_ETHNICITY,
	GET_COUNSELORS,
	GET_SCHOOLS,
	GET_DASHBOARD_DATA,
} from "@graphql/queries";
import apolloClient from "@graphql/client";

/**
 *
 * @param {*} response
 * @returns
 */

// Updated from REST to GraphQL
export const fetchGenders = () => async (dispatch, getState) => {
	try {
		const result = await apolloClient.query({
			query: GET_GENDERS,
		});

		const genders = result.data.genders;
		if (genders) {
			dispatch({ type: SET_GENDERS, payload: genders });
		}
	} catch (err) {
		console.error("Failed to fetch genders:", err.graphQLErrors?.[0]?.message || err.message);
	}
};

// Updated from REST to GraphQL
export const fetchGrades = () => async (dispatch, getState) => {
	try {
		const result = await apolloClient.query({
			query: GET_GRADES,
		});

		const grades = result.data.grades;
		if (grades) {
			dispatch({ type: SET_GRADES, payload: grades });
		}
	} catch (err) {
		console.error("Failed to fetch grades:", err.graphQLErrors?.[0]?.message || err.message);
	}
};

// Updated from REST to GraphQL
export const fetchEthnicity = () => async (dispatch, getState) => {
	try {
		const result = await apolloClient.query({
			query: GET_ETHNICITY,
		});

		const ethnicityList = result.data.ethnicity;
		if (ethnicityList) {
			dispatch({ type: SET_ETHNICITY, payload: ethnicityList });
		}
	} catch (err) {
		console.error("Failed to fetch ethnicity data:", err.graphQLErrors?.[0]?.message || err.message);
	}
};

// Updated from REST to GraphQL
export const fetchCounselors = (data) => async (dispatch, getState) => {
	try {
		const result = await apolloClient.query({
			query: GET_COUNSELORS,
			variables: {
				districtId: data.districtId, // Adjust based on your data structure
			},
		});

		const counselors = result.data.counselors;
		if (counselors) {
			dispatch({ type: SET_COUNSELORS, payload: counselors });
		}
	} catch (err) {
		console.error("Failed to fetch counselors:", err.graphQLErrors?.[0]?.message || err.message);
	}
};

// Updated from REST to GraphQL
export const fetchSchools = (data) => async (dispatch, getState) => {
	try {
		const result = await apolloClient.query({
			query: GET_SCHOOLS,
			variables: {
				districtId: data?.districtId, // Adjust based on your data structure
			},
		});

		const schoolList = result.data.schools;
		if (schoolList) {
			dispatch({ type: SET_SCHOOLS, payload: schoolList });
		}
	} catch (err) {
		console.error("Failed to fetch schools:", err.graphQLErrors?.[0]?.message || err.message);
	}
};

// Updated from REST to GraphQL
export const fetchDashboard = (filters) => async (dispatch, getState) => {
	dispatch({ type: FETCHING, payload: true });

	try {
		const result = await apolloClient.query({
			query: GET_DASHBOARD_DATA,
			variables: {
				filters: filters || {},
			},
		});

		const {
			ethnicity,
			sexual_orientation,
			genders,
			grades,
		} = result.data.dashboard || {};

		const staticChart = {
			ethnicity,
			sexual_orientation,
			genders,
			grades,
		};

		dispatch({ type: SET_STATIC_CHART, payload: staticChart });
		dispatch({ type: FETCHING, payload: false });
	} catch (err) {
		console.error("Failed to fetch dashboard data:", err.graphQLErrors?.[0]?.message || err.message);
		dispatch({ type: FETCHING, payload: false });
	}
};