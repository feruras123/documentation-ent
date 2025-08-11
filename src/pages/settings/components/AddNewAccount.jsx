/** @format */

import React from "react";
import { FormModal } from "@components/modals/Modal";
import FeatherIcon from "feather-icons-react";
import DropdownField from "@components/form/DropdownField";
import { Button } from "@components/form/ButtonField";
import { FormGroup, Input } from "reactstrap";
import { addDashboardUser } from "@redux/actions/action";
import Alert from "@components/alerts/Alert";
import { withAlert } from "react-alert";
import cssOverride from "./styles.module.css";

const permissionData = [
	{
		id: 1,
		name: "Administrator",
	},
	{
		id: 1,
		name: "Employee",
	},
];

class AddNewAccount extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			isModal: this.props.show,
			organization: localStorage.getItem("organization"),
			accessPermissions: "",
			message: "",
			responseStatus: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleModal() {
		this.state.isModal
			? this.setState({ isModal: false })
			: this.setState({ isModal: true });
	}

	// Whenever an InlineInputField changes value, change the corresponding state variable
	handleInputChange(event) {
		event.preventDefault();
		const { target } = event;
		this.setState({ [target.name]: target.value });
	}

	handleDropDown = (value) => {
		this.setState({ accessPermissions: value });
	};

	handleSubmit(event) {
		event.preventDefault();
		const payload = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			organization: this.state.organization,
			accessPermissions: this.state.accessPermissions,
		};

		addDashboardUser(payload, alert, this.handleResponse);
	}

	handleResponse = (res) => {
		if (res.status == "success") {
			this.setState({
				isModal: true,
			});
		}
		this.setState({ message: res.message, responseStatus: res.status });
	};

	render() {
		return (
			<FormModal toggle={this.props.show} isOpen={this.props.setShow} header="">
				<div className="p-3">
					<h1>
						<FeatherIcon icon="plus" size={17} /> Add New Account
					</h1>
				</div>

				<div className={cssOverride.container}>
					<form onSubmit={this.handleSubmit} className={cssOverride.formStyle}>
						<Alert
							status={this.state.responseStatus}
							message={this.state.message}
						/>
						<FormGroup>
							<label className={cssOverride.labelstyle}>
								<div className={cssOverride.subContainer}>
									Account Type :
									<DropdownField
										className={cssOverride.dropdown}
										items={permissionData}
										label=""
										defaultText="Account Type"
										onSelect={this.handleDropDown}
									/>
								</div>
							</label>
						</FormGroup>

						<FormGroup>
							<label className={cssOverride.labelstyle} htmlFor="firstName">
								<div className={cssOverride.subContainer}>
									First Name :
									<Input
										className={cssOverride.InputEl}
										onChange={this.handleInputChange}
										value={this.state.firstName}
										type="text"
										name="firstName"
										id="firstName"
									/>
								</div>
							</label>
						</FormGroup>

						<FormGroup>
							<label className={cssOverride.labelstyle} htmlFor="lastName">
								<div className={cssOverride.subContainer}>
									Last Name :
									<Input
										className={cssOverride.InputEl}
										type="text"
										name="lastName"
										id="lastName"
										onChange={this.handleInputChange}
										value={this.state.lastName}
									/>
								</div>
							</label>
						</FormGroup>

						<FormGroup>
							<label className={cssOverride.labelstyle} htmlFor="email">
								<div className={cssOverride.subContainer}>
									Email :
									<Input
										className={cssOverride.InlineInputFieldEl}
										onChange={this.handleInputChange}
										value={this.state.email}
										type="email"
										name="email"
										id="email"
									/>
								</div>
							</label>
						</FormGroup>

						<FormGroup>
							<label className={cssOverride.labelstyle} htmlFor="email">
								<div className={cssOverride.subContainer}>
									Location :
									<Input
										className={cssOverride.InlineInputFieldEl}
										onChange={this.handleInputChange}
										value={this.state.organization}
										type="organization"
										name="organization"
										id="organization"
										disabled
									/>
								</div>
							</label>
						</FormGroup>

						<hr />

						<div className={cssOverride.submitBtnContainer}>
							<button type="button" className={cssOverride.cancelBtn}>
								Cancel
							</button>
							<Button className={cssOverride.submitbtn}>Save</Button>
						</div>
					</form>
				</div>
			</FormModal>
		);
	}
}
export default withAlert()(AddNewAccount);
