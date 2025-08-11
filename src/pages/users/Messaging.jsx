/** @format */

import React from "react";
import Button from "@components/Buttons";
import FeatherIcon from "feather-icons-react";

function Messaging() {
	return (
		<>
			<div className="shadow rounded-20 p-3 ">
				<span className="fw-bold x-small ">Global Notifications</span>
				<p className="fw-normal x-small mt-3 mb-0 pb-0">Target Group</p>
				<div className="shadow rounded-10 p-2">
					<select name="" id="" className="x-small px-3 border-0 w-100">
						<option value="">Not Okay</option>
					</select>
				</div>
				<p className="fw-normal x-small mt-3 mb-0 pb-0">Title</p>
				<div className="shadow rounded-10 p-2">
					<input
						name=""
						id=""
						placeholder="( Example: What's up )"
						className="x-small px-3 border-0 w-100"
					/>
				</div>
				<p className="fw-normal x-small mt-3 mb-0 pb-0">Body</p>
				<div className="shadow rounded-10 p-2">
					<textarea
						rows="5"
						className="x-small px-3 border-0 w-100"
						placeholder="( Example: You haven't visited What's up today )"
					>
						{}
					</textarea>
				</div>
				<div className="d-flex">
					<Button className="mt-3 btn-primary btn__xs x-small ms-auto">
						Send Message
					</Button>
				</div>
			</div>
			<div
				className="shadow rounded-20 p-3 mt-4   overflow-scroll"
				style={{ maxHeight: "35%" }}
			>
				<div>
					<span className="fw-bold x-small mb-3">
						Global Notifications & History
					</span>
					<div className="shadow rounded-10 mt-3 p-2">
						<div className="d-flex align-items-center p-1">
							<div style={{ lineHeight: "15px" }}>
								<span className="text-dark-50 x-small d-block">
									Thursday 21/01/2019
								</span>
								<i className="fw-medium text-dark x-small">
									"Keep the momentum going"
								</i>
							</div>
							<FeatherIcon className="ms-auto" size={14} icon="x" fill="red" />
						</div>
					</div>
					<div className="shadow rounded-10 mt-3 p-2">
						<div className="d-flex align-items-center p-1">
							<div style={{ lineHeight: "15px" }}>
								<span className="text-dark-50 x-small d-block">
									Thursday 21/01/2019
								</span>
								<i className="fw-medium text-dark x-small">
									"Keep the momentum going"
								</i>
							</div>
							<FeatherIcon className="ms-auto" size={14} icon="x" fill="red" />
						</div>
					</div>
					<div className="shadow rounded-10 mt-3 p-2">
						<div className="d-flex align-items-center p-1">
							<div style={{ lineHeight: "15px" }}>
								<span className="text-dark-50 x-small d-block">
									Thursday 21/01/2019
								</span>
								<i className="fw-medium text-dark x-small">
									"Keep the momentum going"
								</i>
							</div>
							<FeatherIcon className="ms-auto" size={14} icon="x" fill="red" />
						</div>
					</div>
					<div className="shadow rounded-10 mt-3 p-2">
						<div className="d-flex align-items-center p-1">
							<div style={{ lineHeight: "15px" }}>
								<span className="text-dark-50 x-small d-block">
									Thursday 21/01/2019
								</span>
								<i className="fw-medium text-dark x-small">
									"Keep the momentum going"
								</i>
							</div>
							<FeatherIcon className="ms-auto" size={14} icon="x" fill="red" />
						</div>
					</div>
					<div className="shadow rounded-10 mt-3 p-2">
						<div className="d-flex align-items-center p-1">
							<div style={{ lineHeight: "15px" }}>
								<span className="text-dark-50 x-small d-block">
									Thursday 21/01/2019
								</span>
								<i className="fw-medium text-dark x-small">
									"Keep the momentum going"
								</i>
							</div>
							<FeatherIcon className="ms-auto" size={14} icon="x" fill="red" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Messaging;
