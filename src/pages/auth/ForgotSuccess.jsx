/** @format */
/* eslint-disable no-undef */
import React from "react";
import { withRouter } from "react-router-dom";
import AppModal from "@components/AppModal";
import PAGES_URL from "@router/routes";

function ForgotSuccess({ history }) {
	return (
		<AppModal name="forgotSuccess">
			<div className="auth__section d-flex flex-column text-dark-75">
				<div className="d-center flex-column col-10 col-md-10 mx-auto">
					{/* <img src={success} alt="" /> */}
					<h5 className="fw-normal">Email Sent</h5>
					<p className="text-center">
						If your email matches our records, you will receive an email.
					</p>
				</div>
				<button
					className="btn btn-link fw-bold text-center"
					data-bs-dismiss="modal"
					aria-label="Close"
					onClick={() => history.push(PAGES_URL.LOGIN)}
				>
					Back to Login
				</button>
			</div>
		</AppModal>
	);
}

export default withRouter(ForgotSuccess);
