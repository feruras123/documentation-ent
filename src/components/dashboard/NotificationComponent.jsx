/** @format */

import React from "react";
import FeatherIcon from "feather-icons-react";
import { Dropdown } from "react-bootstrap";
import { avatar } from "../../assets/images/images";

function NotificationComponent() {
	return (
		<Dropdown>
			<Dropdown.Toggle className="p-2 m-0 ">
				<span className="notification-badge">45</span>
				<FeatherIcon icon="bell" className="pointer" />
			</Dropdown.Toggle>
			<Dropdown.Menu className="pb-3">
				<div className="px-3 x-small pt-1">
					<span className="x-small fw-bold"> Notificat1ions</span>
					<div className="d-flex align-items-center pt-2">
						<div className="fw-bold xs-small">Today</div>
						<div className="ms-auto">
							<FeatherIcon
								icon="more-horizontal"
								style={{ strokeWidth: "1px" }}
								size={25}
							/>{" "}
						</div>
					</div>
				</div>
				<Dropdown.Item className=" py-1" href="#/action-1">
					<div className="d-flex align-items-center">
						<img src={avatar} className="avatar-sm p-0 m-0" alt="" />
						<div className="  ps-2 fw-medium">
							<span className="xs-small fw-bold p-0 m-0">
								Tyler Hughman has a new alert
							</span>
							<p className="p-0 m-0 " style={{ fontSize: "6px" }}>
								50 mins ago
							</p>
						</div>
						<div className="ps-4 ms-auto">
							<FeatherIcon size={11} fill="#66A858" stroke="1" icon="circle" />
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item className=" py-1" href="#/action-1">
					<div className="d-flex align-items-center">
						<img src={avatar} className="avatar-sm p-0 m-0" alt="" />
						<div className="  ps-2 fw-medium">
							<span className="xs-small fw-bold p-0 m-0">
								Tyler Hughman has a new alert
							</span>
							<p className="p-0 m-0 " style={{ fontSize: "6px" }}>
								50 mins ago
							</p>
						</div>
						<div className="ps-4 ms-auto">
							<FeatherIcon size={11} fill="#D84747" stroke="1" icon="circle" />
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item className=" py-1" href="#/action-1">
					<div className="d-flex align-items-center">
						<img src={avatar} className="avatar-sm p-0 m-0" alt="" />
						<div className="  ps-2 fw-medium">
							<span className="xs-small fw-bold p-0 m-0">
								Tyler Hughman has a new alert
							</span>
							<p className="p-0 m-0 " style={{ fontSize: "6px" }}>
								50 mins ago
							</p>
						</div>
						<div className="ps-4 ms-auto">
							<FeatherIcon size={11} fill="#D84747" stroke="1" icon="circle" />
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item className=" py-1" href="#/action-1">
					<div className="d-flex align-items-center">
						<img src={avatar} className="avatar-sm p-0 m-0" alt="" />
						<div className="  ps-2 fw-medium">
							<span className="xs-small fw-bold p-0 m-0">
								Tyler Hughman has a new alert
							</span>
							<p className="p-0 m-0 " style={{ fontSize: "6px" }}>
								50 mins ago
							</p>
						</div>
						<div className="ps-4 ms-auto">
							<FeatherIcon size={11} fill="#D84747" stroke="1" icon="circle" />
						</div>
					</div>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default NotificationComponent;
