/** @format */

import React from "react";
import { connect } from "react-redux";
import FeatherIcon from "feather-icons-react";
import { Dropdown } from "react-bootstrap";
import { hamburger, avatar } from "@assets/images/images";
import NotificationComponent from "./NotificationComponent";
import { logoutUser } from "@reduxes/actions/auth";

function ProfilePane({ auth, logout, open, setOpen }) {
	return (
		<nav
			className="py-4 px-0 d-flex  px-lg-5 align-items-center  dashboard"
			style={{ position: "sticky", top: 0, zIndex: 1 }}
		>
			<div className="d-md-none">
				<img
					src={hamburger}
					alt=""
					className="me-4"
					onClick={() => setOpen(!open)}
				/>
			</div>
			<div className="d-flex align-items-center  fw-bold">
				<span className="lead "> Hillbourough County</span>
			</div>
			<div className="d-flex align-items-center ms-auto text-primary">
				<div className="search-container pe-3 me-lg-4 me-2">
					<form action="/search" method="get">
						<input
							className="search expandright"
							id="searchright"
							type="search"
							name="q"
							placeholder="Search"
						/>
						<label className="button searchbutton" htmlFor="searchright">
							<FeatherIcon icon="search" className="pointer" />
						</label>
					</form>
				</div>
				{/* <div className="pe-3 me-lg-4 me-2 ">
            <FeatherIcon icon="search" className={"pointer"} />
          </div> */}
				<div className="pe-3 me-lg-4 me-2 ">
					<NotificationComponent />
				</div>
				<Dropdown>
					<Dropdown.Toggle className="p-2 m-0 ">
						<div className="d-flex align-items-center ">
							<img src={avatar} className="avatar" alt="" />
							<div
								className="ps-2 text-left d-none d-lg-block"
								style={{ lineHeight: "18px" }}
							>
								<span
									className="fw-medium text-dark d-none d-lg-block"
									style={{ fontSize: "15px" }}
								>
									{auth && `${auth.first_name} ${auth.last_name}`}
								</span>{" "}
								<span
									style={{ fontSize: "12px" }}
									className="d-block fw-normal text-dark"
								>
									Mental Health Counselor
								</span>
							</div>

							<div className="ms-3 d-none d-lg-block">
								<FeatherIcon
									style={{ strokeWidth: "1px" }}
									icon="chevron-down"
								/>
							</div>
						</div>
					</Dropdown.Toggle>
					<Dropdown.Menu className="p-0 m-0">
						<Dropdown.Item className="dropdown-bottom py-2" href="#/action-1">
							<div className="d-flex">
								<FeatherIcon size={20} icon="settings" />
								<div className="x-small  ps-2 fw-medium">Account Settings</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item className="dropdown-bottom py-2" href="#/action-2">
							<div className="d-flex">
								<FeatherIcon size={20} icon="help-circle" />
								<div className="x-small ps-2 fw-medium">Help & Support</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item className="dropdown-bottom py-2" href="#/action-2">
							<div className="d-flex align-items-center">
								<FeatherIcon size={20} icon="message-square" />
								<div className="fw-medium x-small ps-2">
									Give Feedback
									<p style={{ fontSize: "6px" }} className="p-0 m-0">
										Let us know what you would like for us to improve on
									</p>
								</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item
							className="dropdown-bottom py-2"
							onClick={() => logout()}
						>
							<div className="d-flex">
								<FeatherIcon icon="log-out" />
								<div className="x-small ps-2 fw-medium">Logout</div>
							</div>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePane);
