/** @format */

import React from "react";
import FeatherIcon from "feather-icons-react";

function ChartCard({ children, className, icon }) {
	return (
		<div className={`shadow rounded-20 p-3 pb-5 my-3 ${className}`}>
			<div className="d-flex mb-3">
				<div className="fw-bold  x-small">Gender Identity</div>
				<div className="d-flex align-items-center ms-auto">
					<FeatherIcon icon={icon} size={20} fill={200} />
				</div>
			</div>
			{children}
		</div>
	);
}

function StatCard({ icon, title, score }) {
	return (
		<div className=" shadow rounded-20 py-2 px-3 my-3 shrink">
			<div className="d-flex align-items-center">
				<div className="shadow rounded-10 p-2 me-3">
					<FeatherIcon icon="users" size={25} style={{ strokeWidth: "1px" }} />
				</div>
				<div style={{ fontFamily: "Poppins" }}>
					<p className=" small fw-bold lh-initial p-0 m-0"> {title}</p>

					<span className="text-dark-75 fw-bold"> {score}</span>
				</div>
			</div>
		</div>
	);
}

export { StatCard, ChartCard };
