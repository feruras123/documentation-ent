/** @format */

import React from "react";
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";

const cssOverride = css`
	font-weight: 100 !important;
`;

function Alert({ status, message, loading, className }) {
	return (
		<>
			{!loading && status ? (
				<div className="row py-0">
					<div className="col-12 py-0 text-start">
						{status == "success" ? (
							<div className={`alert alert-success  ${className ?? "py-3"}  `}>
								<FeatherIcon icon="bell" size={className ? 15 : 20} />
								&nbsp;&nbsp;
								<span className={cssOverride}>{message}</span>
							</div>
						) : (
							<div className={`alert alert-danger ${className ?? "py-3"}   `}>
								<FeatherIcon icon="alert-octagon" size={className ? 15 : 20} />
								&nbsp;&nbsp;
								<span className={cssOverride}>{message}</span>
							</div>
						)}
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}

export default Alert;
