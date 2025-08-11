/** @format */

import React from "react";
import { fetchEnterpriseUsers } from "@redux/actions/action";

class UserLists extends React.Component {
	constructor(props) {
		super(props);
	}

	showUsers() {
		fetchEnterpriseUsers(this.callback);
		console.log(fetchEnterpriseUsers(this.callback));
	}

	callback = (data) => {
		console.log(data);
	};

	render() {
		return <div>{this.showUsers}</div>;
	}
}

export default UserLists;
