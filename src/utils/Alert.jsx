/** @format */

import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

function AlertTemplate({ message, options, style, close }) {
	return (
		<div className="pl-4 mr-xl-4 pt-4" style={{ ...style }}>
			<div
				className={`px-2 mr-3 mr-md-4 d-flex align-items-center alert ${
					options.type === "success"
						? "alert-success"
						: options.type === "error"
							? "alert-danger"
							: ""
				}`}
				style={{ width: "300px" }}
			>
				<p className="mb-0 small font-weight-light ml-1 pr-4">{message}</p>
				<p
					className="small mb-0 ml-auto font-weight-bold p-1"
					onClick={close}
					style={{ cursor: "pointer" }}
				>
					x
				</p>
			</div>
		</div>
	);
}

function Alert({ children }) {
	const options = {
		position: positions.TOP_RIGHT,
		transition: transitions.FADE,
		timeout: 5000,
		offset: "0px",
	};
	return (
		<AlertProvider template={AlertTemplate} {...options}>
			{children}
		</AlertProvider>
	);
}

export default Alert;
