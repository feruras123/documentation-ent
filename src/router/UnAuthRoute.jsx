/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PAGES_URL from "@router/routes";

function UnauthRoute({ component: Component, authenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				!authenticated ? (
					<Route render={() => <Component {...props} />} />
				) : (
					<Redirect to={PAGES_URL.DASHBOARD} />
				)
			}
		/>
	);
}

const mapStatetoProps = (state) => ({
	authenticated: state.auth.authenticated,
});

export default connect(mapStatetoProps, null)(UnauthRoute);
