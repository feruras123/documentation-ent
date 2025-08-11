/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import SideBar from "./Sidebar";
import ProfilePane from "./ProfilePane";
import TabComponent from "./TabComponent";

function DashboardComponent({ children }) {
	const [open, setOpen] = useState(false);

	return (
		<main className="container-fluid no-gutters dashboard">
			<div className="row">
				<SideBar open={open} setOpen={() => setOpen(!open)} />
				<section className="col 0 d-flex flex-column setup__scroller">
					<ProfilePane open={open} setOpen={() => setOpen(!open)} />
					<div className="col mt-5">
						<div className=" pb-5 container-fluid container-lg  bg-white  rounded-20 p-4">
							{children}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth.user,
});

export default connect(mapStateToProps)(DashboardComponent);
