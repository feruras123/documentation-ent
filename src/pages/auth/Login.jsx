/** @format */

import React, { useState } from "react";
import PAGES_URL from "@router/routes";
import { Link } from "react-router-dom";
import { loginUser } from "@reduxes/actions/auth";
import Alert from "@components/Alert";
import { connect } from "react-redux";
import { InputPassword } from "@components/Inputs";
import Button from "@components/Buttons";
import AuthComponent from "@components/AuthComponent";

function Login({ login, loading }) {
	const [state, setState] = useState({ email: "", password: "" });
	const [alert, setAlert] = useState({ status: "", message: "" });

	const handleInputChange = (e) => {
		setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// login action
		login(state, handleResponse);
	};

	const handleResponse = (res) => {
		setAlert({ ...res });
	};

	return (
		<AuthComponent>
			<form className="w-auth" onSubmit={handleSubmit}>
				<Alert message={alert.message} status={alert.status} />
				<input
					className="form-control mb-4"
					placeholder="Email address or Phone Number"
					type="email"
					id="email"
					value={state.email}
					onChange={handleInputChange}
					name="email"
				/>
				<InputPassword
					className="form-control mb-1"
					placeholder="Password"
					id="password"
					value={state.password}
					onChange={handleInputChange}
					name="password"
				/>
				<Link to={PAGES_URL.FORGOT} className="lead d-block text-end">
					Forgot your Password?
				</Link>
				<Button
					loading={loading}
					className="btn-primary w-100 text-white fw-medium mt-4"
				>
					Login
				</Button>

				<p className="lead text-dark-75 text-end my-3">
					Locked out? &nbsp;
					<Link to="" className="mb-0">
						Unlock account
					</Link>
				</p>
			</form>
		</AuthComponent>
	);
}

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
	login: (data, response) => dispatch(loginUser(data, response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
