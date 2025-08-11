/** @format */

import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

function Button({ className, disabled, loading, children, size, ...props }) {
	const override = css`
		border-color: #ffffff;
		position: relative;
		top: -20px;
		left: -10px;
	`;
	return (
		<button
			className={`btn ${className}`}
			{...props}
			disabled={disabled || loading}
		>
			{loading ? (
				<PuffLoader css={override} size={size ?? 34} color="#ffffff" />
			) : (
				children
			)}
		</button>
	);
}

export default Button;
