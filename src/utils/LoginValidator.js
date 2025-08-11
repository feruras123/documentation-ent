/** @format */

import axios from "axios";
import { Component } from "react";
import { srv } from "../srvConfig";

// import React from "react";
// import { Redirect } from "react-router";
// import { PAGES_URL } from "@routers/routes";

class LoginValidator extends Component {
	static authenticate(user, token) {
		const {
			organization,
			firstName,
			lastName,
			email,
			plan,
			status,
			planActive,
			accessPermissions,
			firstLogin,
			isSupervisingEntity,
			supervisedOrgs,
			uid,
		} = user;
		localStorage.setItem("isSupervisingEntity", isSupervisingEntity);
		localStorage.setItem("supervisedOrgs", supervisedOrgs);
		localStorage.setItem("organization", organization);
		localStorage.setItem("firstName", firstName);
		localStorage.setItem("lastName", lastName);
		localStorage.setItem("email", email);
		localStorage.setItem("plan", plan);
		localStorage.setItem("status", status);
		localStorage.setItem("planActive", planActive);
		localStorage.setItem("accessPermissions", accessPermissions);
		localStorage.setItem("authenticated", true);
		localStorage.setItem("firstLogin", firstLogin);
		localStorage.setItem("uid", uid);
		localStorage.setItem("token", token);
		console.log(user);
	}

	static verifyToken(token, destinationEndpoint, history) {
		// eslint-disable-next-line consistent-return
		axios.post(`${srv}/verifyToken`, { token }).then((res) => {
			if (res.data.msg === "OK") {
				const {
					organization,
					firstName,
					lastName,
					email,
					plan,
					status,
					planActive,
					accessPermissions,
					token,
					firstLogin,
					isSupervisingEntity,
					supervisedOrgs,
					uid,
				} = res.data.creds;
				localStorage.setItem("isSupervisingEntity", isSupervisingEntity);
				localStorage.setItem("supervisedOrgs", supervisedOrgs);
				localStorage.setItem("organization", organization);
				localStorage.setItem("firstName", firstName);
				localStorage.setItem("lastName", lastName);
				localStorage.setItem("email", email);
				localStorage.setItem("plan", plan);
				localStorage.setItem("status", status);
				localStorage.setItem("planActive", planActive);
				localStorage.setItem("accessPermissions", accessPermissions);
				localStorage.setItem("authenticated", true);
				localStorage.setItem("firstLogin", firstLogin);
				localStorage.setItem("uid", uid);
				localStorage.setItem("token", token); // CHANGE THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				// firstLogn? redirect to password change : redirect to Pages dashboard!!!!
				// window.location.href = `/${destinationEndpoint}`;
				// return <Redirect to={`/${destinationEndpoint}`} />;
				history.push(`/${destinationEndpoint}`);
			} else {
				localStorage.setItem("authenticated", false);
				localStorage.setItem("token", "");
				localStorage.setItem("accessPermissions", "");
			}
		});
	}

	static verifyTokenNoRedirect(token) {
		// eslint-disable-next-line consistent-return
		axios.post(`${srv}/verifyToken`, { token }).then((res) => {
			console.log(res.data.msg);
			if (res.data.msg === "OK") {
				const {
					organization,
					firstName,
					lastName,
					email,
					plan,
					status,
					planActive,
					accessPermissions,
					token,
					firstLogin,
					isSupervisingEntity,
					supervisedOrgs,
					uid,
				} = res.data.creds;
				localStorage.setItem("isSupervisingEntity", isSupervisingEntity);
				localStorage.setItem("supervisedOrgs", supervisedOrgs);
				localStorage.setItem("organization", organization);
				localStorage.setItem("firstName", firstName);
				localStorage.setItem("lastName", lastName);
				localStorage.setItem("email", email);
				localStorage.setItem("plan", plan);
				localStorage.setItem("status", status);
				localStorage.setItem("planActive", planActive);
				localStorage.setItem("accessPermissions", accessPermissions);
				localStorage.setItem("authenticated", true);
				localStorage.setItem("firstLogin", false);
				localStorage.setItem("uid", uid);
				localStorage.setItem("token", token); // CHANGE THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			} else {
				localStorage.setItem("authenticated", false);
				localStorage.setItem("token", "");
				localStorage.setItem("accessPermissions", "");
				window.location.reload();
			}
		});
	}
}

export default LoginValidator;
