/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormModal } from "@components/modals/Modal";
import {
	Dropdown,
	DropdownToggle,
	Form,
	DropdownMenu,
	DropdownItem,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import axios from "axios";
import cssOverride from "./styles.module.css";
import emailValidator from "../../../utils/emailValidator";
import { srv } from "../../../srvConfig";
import containsSpecialChars from "../../../utils/containsSpecialChars";

function EditAccount({ currentView }) {
	const history = useHistory();
	const [show, setShow] = useState(false);
	const [dropdownOpen, setOpen] = useState(false);
	const [email, setEmail] = React.useState("");
	const [roleState, setRole] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [firstName, setFirstName] = React.useState(currentView.firstName);
	const [lastName, setLastName] = React.useState(currentView.lastName);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	React.useEffect(() => {
		if (currentView) {
			setFirstName(() => currentView.firstName);
			setLastName(() => currentView.lastName);
			setEmail(() => currentView.email);
			setRole(() => currentView.accessPermissions);
		}
	}, [currentView]);

	function handleEmailInput(e) {
		e.preventDefault();
		const input = e.target.value;
		setEmail(() => input);
	}

	function submitEdits() {
		const dataPackage = {
			id: currentView.id,
			role: roleState,
			firstName,
			lastName,
			email,
		};
		if (emailValidator(dataPackage.email) !== false) {
			// dataPackage.fullName = nameValidator(dataPackage.fullName);
			setIsLoading(true);
			axios.post(`${srv}/updateDashboardUser`, dataPackage).then(() => {
				setIsLoading(false);
				setShow(false);
				history.push("/dashboard");
			});
		}
	}

	function handleFirstNameInput(e) {
		e.preventDefault();
		if (!containsSpecialChars(e.target.value)) {
			const input = e.target.value;
			setFirstName(() => input);
		}
	}

	function handleLastNameInput(e) {
		if (!containsSpecialChars(e.target.value)) {
			e.preventDefault();
			const input = e.target.value;
			setLastName(() => input);
		}
	}

	return (
		<>
			<button className="btn btn-default btn-sm ml-3" onClick={handleShow}>
				Edit
			</button>
			<FormModal
				clickFunc={submitEdits}
				handleShow={show}
				handleClose={handleClose}
				saveLabel={isLoading ? "Loading... " : "Confirm Edits"}
				cancelLabel="Cancel"
			>
				<div className="p-3">
					<h1>Edit Account Information</h1>
				</div>
				<Form
					style={{
						marginLeft: "auto",
						marginRight: "auto",
					}}
					className={cssOverride.formStyle}
				>
					<Label className={cssOverride.labelstyle}>
						<div className={cssOverride.subContainer}>
							Account Type :
							<Dropdown
								isOpen={dropdownOpen}
								toggle={() => setOpen(() => !dropdownOpen)}
							>
								<DropdownToggle className={cssOverride.dropdown} caret>
									{roleState}
								</DropdownToggle>

								<DropdownMenu>
									<DropdownItem
										className={cssOverride.dropdown}
										onClick={() => setRole("Admin")}
										value="Admin"
									>
										Admin
									</DropdownItem>
									<DropdownItem
										className={cssOverride.dropdown}
										onClick={() => setRole("Employee")}
										value="Employee"
									>
										Employee
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Label>
					{/* <GroupInputField label={"Password:"} placeholder={"***********"} /> */}
					<hr />
					<FormGroup>
						<Label className={cssOverride.labelstyle} for="fullName">
							<div className={cssOverride.subContainer}>
								First Name :
								<Input
									className={cssOverride.inputEl}
									onChange={(e) => handleFirstNameInput(e)}
									type="test"
									name="fullName"
									id="fullName"
									value={firstName}
								/>
							</div>
						</Label>
					</FormGroup>
					<FormGroup>
						<Label className={cssOverride.labelstyle} for="fullName">
							<div className={cssOverride.subContainer}>
								Last Name :
								<Input
									className={cssOverride.inputEl}
									onChange={(e) => handleLastNameInput(e)}
									type="test"
									name="fullName"
									id="fullName"
									value={lastName}
								/>
							</div>
						</Label>
					</FormGroup>

					<FormGroup>
						<Label className={cssOverride.labelstyle} for="email">
							<div className={cssOverride.subContainer}>
								Email :
								<Input
									className={cssOverride.inputEl}
									onChange={(e) => handleEmailInput(e)}
									value={email}
									type="email"
									name="email"
									id="email"
								/>
							</div>
						</Label>
					</FormGroup>
				</Form>
			</FormModal>
		</>
	);
}

export default EditAccount;
