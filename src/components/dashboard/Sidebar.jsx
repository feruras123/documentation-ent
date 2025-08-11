/** @format */

import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import Logo from "@assets/icons/dashboard-logo.svg";
import { NavLink } from "react-router-dom";
import PAGES_URL from "@router/routes";
import SidebarLink from "./SidebarLink";

function Sidebar({ open, setOpen }) {
	return (
		<aside
			className={`col-sm-4 col-lg-3 d-non d-flex vh-100 text-white sidebar px-4 px-lg-0 py-4 py-lg-5 ${
				open && "open"
			}`}
		>
			<div className="py-4 d-flex flex-column h-100 ">
				<div className="d-flex align-items-center ms-0 mb-5 w-100 sidebar-bottom">
					<img
						src={Logo}
						alt=""
						className="mb-3 px-4 m-0 auth-logo position-relative"
					/>
					{/* <div>
              <h4 className="fw-bold" style={{ textTransform: "capitalize" }}>
                {auth && auth.first_name + " " + auth.last_name}
              </h4>
              <Link to={PAGES_URL.PROFILE}>
                <button className="btn btn__sm btn__initial p-0 text-white mb-0 fw-medium">
                  Edit <i className="fas fa-pen ms-1"></i>{" "}
                </button>
              </Link>
            </div> */}
				</div>
				<SidebarLink onClick={setOpen} exact to={PAGES_URL.DASHBOARD}>
					Dashboard
				</SidebarLink>
				<SidebarLink onClick={setOpen} exact={false} to={PAGES_URL.USERS}>
					Users
				</SidebarLink>
				<SidebarLink onClick={setOpen} exact={false} to="PAGES_URL.DASHBOARD">
					Reports
				</SidebarLink>
				<SidebarLink onClick={setOpen} exact={false} to={PAGES_URL.SETTINGS}>
					Settings
				</SidebarLink>
				{/* <SidebarLink
            onClick={setOpen}
            exact={false}
            to={PAGES_URL.EMAIL_UPDATE}
          >
            Email Update History
          </SidebarLink>
          <SidebarLink onClick={setOpen} exact={false} to={PAGES_URL.PAYMENTS}>
            Payments
          </SidebarLink>

          <div className="mt-auto">
            <SidebarLink
              onClick={setOpen}
              exact={false}
              to={PAGES_URL.PARENT_TOOLS}
            >
              Parent Tools
            </SidebarLink>
            <SidebarLink onClick={setOpen} exact={true} to={PAGES_URL.HELP}>
              Need Help
            </SidebarLink> */}
				{/* <button
            className="btn btn-link d-flex mt-4 p-0 text-white fw-medium"
            onClick={() => logoutUser()}
          >
            Logout
          </button> */}
			</div>
		</aside>
	);
}

export default Sidebar;
