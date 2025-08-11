/** @format */

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ApolloProvider } from "@graphql";
import store from "@reduxes/store";
import { saveState } from "@reduxes/localStorage";
import apolloClient from "@graphql/client";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle";
import "@assets/styles/app.scss";

// Redux store subscription
store.subscribe(() => {
	saveState(store.getState());
});

const root = createRoot(document.getElementById("root"));

root.render(
	<ApolloProvider client={apolloClient}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>,
);
