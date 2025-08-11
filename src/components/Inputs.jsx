/** @format */

import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
// import { ArrowDown } from '../assets/images/images';

function Input({ className, ...props }) {
	return (
		<div className="form-group">
			<input type="text" className={`form-control ${className}`} {...props} />
		</div>
	);
}

function InputPassword({ className, parentClassName, ...props }) {
	const [toggler, setToggler] = useState(false);
	return (
		<div className={`position-relative w-100 ${parentClassName}`}>
			<input
				className={`form-control pe-5 ${className}`}
				placeholder="Password"
				id="password"
				type={toggler ? "text" : "password"}
				{...props}
			/>
			<p
				className="small mb-0 text-uppercase text-primary fw-bold position-absolute pointer toggler"
				style={{ right: "1.25rem" }}
				onClick={() => setToggler(!toggler)}
			>
				{toggler ? "hide" : "show"}
			</p>
		</div>
	);
}

function InputSearch({ className, parentClassName, ...props }) {
	const [toggler, setToggler] = useState(false);
	return (
		<div className={`position-relative w-100 ${parentClassName}`}>
			<input
				className={`form-control pe-5 ${className}`}
				id="search"
				type="text"
				{...props}
			/>
			<p
				className="small mb-0 text-uppercase text-primary fw-bold position-absolute pointer toggler"
				style={{ right: ".75rem", top: "5px" }}
				onClick={() => setToggler(!toggler)}
			>
				<FeatherIcon icon="search" size={18} />
			</p>
		</div>
	);
}

function Select({ className, nav, children, ...props }) {
	return (
		<div className={`position-relative ${!nav && "w-100"}`}>
			<select
				className={`form-select ${className}`}
				aria-label="Default select example"
				{...props}
			>
				{children}
			</select>
			<div className="position-absolute btn__absolute select-icon d-center h-100">
				{/* <img className="" src={ArrowDown} alt="" /> */}
			</div>
		</div>
	);
}

export default Input;
export { InputPassword, Select, InputSearch };
