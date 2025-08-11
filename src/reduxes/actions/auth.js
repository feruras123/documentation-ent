/** @format */

import axios from "axios";
import {
	SET_USER,
	LOADING,
	AUTHENTICATED,
	LOGOUT_USER,
} from "@reduxes/reducers/types";
import PAGES_URL from "@router/routes";
import history from "./history";
import {
	LOGIN_MUTATION,
	LOGOUT_MUTATION,
	FORGOT_PASSWORD_MUTATION,
	VALIDATE_RESET_TOKEN_MUTATION,
	RESET_PASSWORD_MUTATION,
} from "@graphql/mutations";
import apolloClient from "@graphql/client";

const apiBaseUrl = `${process.env.REACT_APP_API_ENDPOINT}`;

/**
 *
 * @param {*} data
 * @param {*} response
 * @returns
 */

// Updated From Rest To GraphQL
export const loginUser = (data, response) => async (dispatch, getState) => {
	dispatch({ type: LOADING, payload: true });

	try {
		const result = await apolloClient.mutate({
			mutation: LOGIN_MUTATION,
			variables: {
				login: data.email,
				password: data.password,
			},
		});

		const { error, token, user_id, hash } = result.data.profile_authorization || {};

		if (error) {
			dispatch({ type: LOADING, payload: false });
			response({ message: error, status: "error" });
		} else {
			// Create a user object with the user_id since we don't get full user data
			const user = { id: user_id };
			dispatch({ type: SET_USER, payload: user });
			dispatch({ type: LOADING, payload: false });
			dispatch({ type: AUTHENTICATED });

			response({ message: "Login successful", status: "success" });

			localStorage.setItem("token", `Bearer ${token}`);
			axios.defaults.headers.common.Authorization = `Bearer ${token}`;

			history.push(PAGES_URL.DASHBOARD);
		}
	} catch (err) {
		dispatch({ type: LOADING, payload: false });
		const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "Something went wrong";
		response({ message: errorMessage, status: "error" });
	}

	// Offline check fallback
	setTimeout(() => {
		if (!navigator.onLine) {
			response({
				message: "Check your internet connection",
				status: "error",
			});
		}
	}, 3000);
};

/**
 *
 * @param {*} email
 * @param {*} response
 */

// Updated From Rest To GraphQL
export const forgotPassword = (data, response) => async (dispatch, getState) => {
	dispatch({ type: LOADING, payload: true });

	try {
		const result = await apolloClient.mutate({
			mutation: FORGOT_PASSWORD_MUTATION,
			variables: {
				email: data.email,
			},
		});

		const { error, success, message } = result.data.profile_reset_password || {};

		if (success) {
			response({
				message: message || "Password reset email sent successfully",
				status: "success",
			});
		} else {
			response({
				message: error || "Something went wrong",
				status: "error",
			});
		}
	} catch (err) {
		const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "An error occurred while processing your request";
		response({
			message: errorMessage,
			status: "error",
		});
	} finally {
		dispatch({ type: LOADING, payload: false });
	}

	setTimeout(() => {
		if (!navigator.onLine) {
			response({
				message: "Check your internet connection",
				status: "error",
			});
		}
	}, 3000);
};

// Updated From Rest To GraphQL
export const validateResetToken = (token, response) => async (dispatch, getState) => {
	try {
		const result = await apolloClient.mutate({
			mutation: VALIDATE_RESET_TOKEN_MUTATION,
			variables: {
				token,
			},
		});

		const { success, error, message } = result.data.profile_validate_reset_token || {};

		if (success) {
			response({
				message: message || "Token is valid.",
				status: "success",
				token,
			});
		} else {
			response({
				message: error || "Invalid or expired token.",
				status: "error",
				token: false,
			});
		}
	} catch (err) {
		const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "Something went wrong";
		response({
			message: errorMessage,
			status: "error",
			token: false,
		});
	}

	setTimeout(() => {
		if (!navigator.onLine) {
			response({
				message: "Check your internet connection",
				status: "error",
				token: false,
			});
		}
	}, 3000);
};

// Updated From Rest To GraphQL
export const resetPassword = (data, response) => async (dispatch, getState) => {
	dispatch({ type: LOADING, payload: true });

	try {
		const result = await apolloClient.mutate({
			mutation: RESET_PASSWORD_MUTATION,
			variables: {
				token: data.token,
				newPassword: data.newPassword,
			},
		});

		const { error, success, message } = result.data.profile_reset_password_confirm || {};

		if (success) {
			response({
				message: message || "Password reset successfully.",
				status: "success",
				token: true,
			});
			dispatch({ type: LOADING, payload: false });

			setTimeout(() => {
				history.push("/");
			}, 2000);
		} else {
			response({
				message: error || "Unable to reset password.",
				status: "error",
			});
			dispatch({ type: LOADING, payload: false });
		}
	} catch (err) {
		const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "Something went wrong";
		response({
			message: errorMessage,
			status: "error",
		});
		dispatch({ type: LOADING, payload: false });
	}

	setTimeout(() => {
		if (!navigator.onLine) {
			response({
				message: "Check your internet connection",
				status: "error",
			});
		}
	}, 3000);
};

// Updated From Rest To GraphQL
export const logoutUser = () => async (dispatch, getState) => {
	const token = localStorage.getItem("token")?.replace("Bearer ", "");

	dispatch({ type: LOGOUT_USER, payload: null });

	try {
		await apolloClient.mutate({
			mutation: LOGOUT_MUTATION,
			variables: {
				token: token || "",
			},
		});
	} catch (err) {
		console.warn("Logout GraphQL error:", err.message);
		// Fail silently, still logout locally
	}

	localStorage.clear();
	window.location.href = "/";
};