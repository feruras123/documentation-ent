/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";
import { forgotPassword } from "@reduxes/actions/auth";
import Alert from "@components/Alert";
import AuthComponent from "@components/AuthComponent";
import Button from "@components/Buttons";
import ForgotSuccess from "./ForgotSuccess";

function ForgotPassword({ forgot, loading }) {
	const [state, setState] = useState({ email: "" });
	const [alert, setAlert] = useState({ message: "", status: "" });

	const handleInputChange = (e) => {
		e.preventDefault();
		setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		forgot(state, handleResponse);
	};

	const handleResponse = (res) => {
		if (res.status == "success") $("#forgotSuccess").modal("show");
		setAlert({ ...res });
	};

	return (
		<AuthComponent>
			<form className="w-auth" onSubmit={handleSubmit}>
				<Alert status={alert.status} message={alert.message} />
				<p className="lead fw-lighter  mb-4">
					We will send you an email with instructions on how to reset your
					password.
				</p>
				<input
					className="form-control mb-4"
					placeholder="Email address or Phone Number"
					type="email"
					id="email"
					value={state.email}
					onChange={handleInputChange}
					name="email"
				/>
				<Button
					loading={loading}
					className="btn-primary w-100 text-white fw-medium mb-4 mt-3"
				>
					Email Me
				</Button>
				<Link to="#" className="lead d-block text-end">
					I don’t remember my email.
				</Link>
				<ForgotSuccess />
			</form>
		</AuthComponent>
	);
}

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
	forgot: (state, response) => dispatch(forgotPassword(state, response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
