/** @format */

import {
	FETCH_USERS,
	FETCHING,
	ADD_ENTRY,
	LOADING,
	FETCH_ENTRY,
} from "../reducers/types";
import {
	GET_USERS,
	GET_USER_PROFILE,
	GET_USER_ACTIVITY,
} from "@graphql/queries";
import {
	CREATE_USER_MUTATION,
} from "@graphql/mutations";
import apolloClient from "@graphql/client";

/**
 *
 * @param {*} data
 * @param {*} response
 * @returns
 */

// Updated from REST to GraphQL
export const fetchUsers = (data) => async (dispatch, getState) => {
	dispatch({ type: FETCHING, payload: true });

	try {
		const result = await apolloClient.query({
			query: GET_USERS,
			variables: {
				filters: data.filters || {},
				pagination: data.pagination || { page: 1, limit: 10 },
			},
		});

		const users = result.data.users;
		if (users) {
			dispatch({ type: FETCH_USERS, payload: users });
		}
		dispatch({ type: FETCHING, payload: false });
	} catch (err) {
		console.error("Failed to fetch users:", err.graphQLErrors?.[0]?.message || err.message);
		dispatch({ type: FETCHING, payload: false });
	}
};

// Updated from REST to GraphQL
export const fetchUser = (id) => async (dispatch, getState) => {
	dispatch({ type: FETCHING, payload: true });

	try {
		const result = await apolloClient.query({
			query: GET_USER_PROFILE,
			variables: { id },
		});

		const user = result.data.user;
		if (user) {
			dispatch({ type: FETCH_ENTRY, payload: user });
		}
		dispatch({ type: FETCHING, payload: false });
	} catch (err) {
		console.error("Failed to fetch user:", err.graphQLErrors?.[0]?.message || err.message);
		dispatch({ type: FETCHING, payload: false });
	}
};

// Updated from REST to GraphQL
export const fetchUserActivity = (id, dateRange) => async (dispatch, getState) => {
	dispatch({ type: FETCHING, payload: true });

	try {
		const result = await apolloClient.query({
			query: GET_USER_ACTIVITY,
			variables: { 
				userId: id,
				dateRange: dateRange || {}
			},
		});

		const activity = result.data.userActivity;
		if (activity) {
			dispatch({ type: FETCH_ENTRY, payload: activity });
		}
		dispatch({ type: FETCHING, payload: false });
	} catch (err) {
		console.error("Failed to fetch user activity:", err.graphQLErrors?.[0]?.message || err.message);
		dispatch({ type: FETCHING, payload: false });
	}
};

// Updated from REST to GraphQL
export const createUser = (data, response) => async (dispatch, getState) => {
	dispatch({ type: LOADING, payload: true });

	try {
		const result = await apolloClient.mutate({
			mutation: CREATE_USER_MUTATION,
			variables: {
				input: data,
			},
		});

		const user = result.data.createUser;
		if (user) {
			response({ message: "User created successfully", status: "success" });
			dispatch({ type: ADD_ENTRY, payload: user });
		} else {
			response({ message: "Failed to create user", status: "error" });
		}
	} catch (err) {
		console.error("User creation failed:", err.graphQLErrors?.[0]?.message || err.message);
		const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "Something went wrong";
		response({ message: errorMessage, status: "error" });
	} finally {
		dispatch({ type: LOADING, payload: false });
	}
};