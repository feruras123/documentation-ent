/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

function SidebarLink({ children, onClick, exact, icon, ...props }) {
	return (
		<NavLink
			className="d-flex align-items-center text-white nav--link fw-medium mb-3 py-2 active"
			activeClassName="fw-bold text-dark-75 nav--link__active"
			exact={exact}
			{...props}
		>
			{children}
		</NavLink>
	);
}

export default SidebarLink;
