/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import Alert from "@components/Alert";
import AuthComponent from "@components/AuthComponent";
import { InputPassword } from "@components/Inputs";
import Button from "@components/Buttons";
import { resetPassword } from "@reduxes/actions/auth";

function ResetPassword({
	reset,
	loading,
	match: {
		params: { token },
	},
}) {
	const [state, setState] = useState({ password: "", confirm: "", token });
	const [alert, setAlert] = useState({ message: "", status: "" });

	const handleInputChange = (e) => {
		e.preventDefault();
		setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		reset(state, handleResponse);
	};

	const handleResponse = (res) => {
		setAlert({ ...res });
	};
	return (
		<AuthComponent display="d-none">
			<form className="w-auth" onSubmit={handleSubmit}>
				<h1 className="display-4">Reset Password</h1>
				<p className="lead fw-lighter text-dark-50 mb-4">
					Please enter a secure password to complete this process
				</p>
				<Alert message={alert.message} status={alert.status} />
				<InputPassword
					className="form-control mb-3"
					placeholder="Password"
					id="password"
					value={state.password}
					onChange={handleInputChange}
					name="password"
				/>
				<InputPassword
					className="form-control mb-3"
					placeholder="Confirm Password"
					id="confirm"
					value={state.confirm}
					onChange={handleInputChange}
					name="confirm"
				/>
				<p className="text-end lead ">Need help? </p>
				<Button
					loading={loading}
					className="btn-primary w-100 text-white fw-medium mt-2"
				>
					Reset Password
				</Button>
			</form>
		</AuthComponent>
	);
}

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
	reset: (data, response) => dispatch(resetPassword(data, response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
