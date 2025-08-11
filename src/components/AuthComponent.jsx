/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images/images";

function AuthComponent({ signup, children }) {
	return (
		<main className="auth-bg ">
			<section className="container no-gutters text-primary">
				{window.location.pathname !== "/" && (
					<Link to="" className="back">
						<i className="fas fa-chevron-left me-2" />
						Back to Login
					</Link>
				)}
				<div className="row vh-100 align-items-lg-center">
					<div
						className={`col-12 col-lg-6 d-center ${
							signup ? "order-lg-2 pe-lg-0" : "ps-lg-0"
						}`}
					>
						<div className="d-flex align-items-base pt-5 pt-md-0">
							<div>
								<img
									src={Logo}
									className="auth-logo position-relative"
									alt=""
								/>
							</div>
							{/* <h1 className="display-1 m-0 p-0 fw-normal lh-initial mx-2">
								K&apos;BRO
							</h1> */}
							<h2 className="mb-0  fw-lighter lh-initial">Enterprise</h2>
						</div>
					</div>
					<div
						className={`col-12 col-lg-6 d-flex justify-content-center auth-section-${
							signup ? "right" : "left"
						} py-md-5`}
					>
						{children}
					</div>
				</div>
			</section>
		</main>
	);
}

export default AuthComponent;
