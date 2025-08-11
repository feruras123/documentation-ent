/** @format */

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import axios from "axios";
import rootReducer from "@reduxes/reducers/rootReducer";
import { loadState } from "@reduxes/localStorage";
import { logoutUser } from "@reduxes/actions/auth";
import history from "@reduxes/actions/history";
import apolloClient from "@graphql/client";

const LoggerMiddleware = createLogger();
const persistedState = loadState();


// Configure thunk with extra arguments including Apollo Client
const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(LoggerMiddleware, thunk)),
);

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) store.dispatch(logoutUser());
		if (error.response.status === 404) history.push("/404");
		return Promise.reject(error);
	},
);

axios.defaults.headers.common.Authorization = localStorage.getItem("token");

export default store;
