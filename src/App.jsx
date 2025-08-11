/** @format */

import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import PAGES_URL from "@router/routes";
import history from "@reduxes/actions/history";

import DashboardComponent from "@components/dashboard/DashboardComponent";
import UnAuthRoute from "./router/UnAuthRoute";
import AuthRoute from "./router/AuthRoute";
import {
	Login,
	ForgotPassword,
	Dashboard,
	ResetPassword,
	Users,
	UserProfile,
	UserActivity,
	Settings,
} from "./pages/pages";

function App() {
	return (
		<Router history={history}>
			<Switch>
				<UnAuthRoute exact path={PAGES_URL.LOGIN} component={Login} />
				<UnAuthRoute exact path={PAGES_URL.FORGOT} component={ForgotPassword} />
				<UnAuthRoute
					exact
					path={`${PAGES_URL.RESET}/:token`}
					component={ResetPassword}
				/>
				<DashboardComponent>
					<AuthRoute exact path={PAGES_URL.DASHBOARD} component={Dashboard} />
					<AuthRoute path={`${PAGES_URL.USERS}`} component={Users} exact />
					<Route
						path={`${PAGES_URL.USER_PROFILE}/:id/activity`}
						component={UserActivity}
						exact
					/>
					<Route
						path={`${PAGES_URL.USER_PROFILE}/:id`}
						component={UserProfile}
						exact
					/>
					<AuthRoute path={PAGES_URL.SETTINGS} component={Settings} />
				</DashboardComponent>
			</Switch>
		</Router>
	);
}

export default App;
