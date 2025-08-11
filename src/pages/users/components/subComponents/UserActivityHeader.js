/** @format */

import React from "react";

import passportPhoto from "../../../../assets/img/profile.png";
// eslint-disable-next-line no-unused-vars
import EditProfile from "../EditProfile";
import activityCSS from "./activityStyles.module.css";

function UserActivityHeader({ firstName, lastName, age, grade }) {
	return (
		<div className={activityCSS.container}>
			<div className={activityCSS.subContainer}>
				<img
					className={activityCSS.pic}
					src={passportPhoto}
					alt="passport pic"
				/>
			</div>
			<div>
				<h4>{`${firstName} ${lastName} ${age}`}</h4>
				<h6 className={activityCSS.subheadline}>{`Grade ${grade}`}</h6>
			</div>
			<EditProfile />
		</div>
	);
}

export default UserActivityHeader;
