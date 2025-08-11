/** @format */

// /** @format */

// import React from "react";
// import cssOverride from "./notificationStyles.module.css";
// import DropdownField from "@components/form/DropdownField";
// import { Button, SelectButton } from "@components/form/ButtonField";
// import { grades, ethnicityData } from "@utils/constants/users/index";
// import { FormModal } from "@components/modals/Modal";
// import { InlineInputField, InputFile } from "@components/form/InputField";
// import { addNewUser, addBatchUser } from "@redux/actions/action";
// import { withAlert } from "react-alert";
// import * as xlsx from "xlsx/xlsx.mjs";

// const initialState = {
// 	firstName: "",
// 	lastName: "",
// 	email: "",
// 	grade: null,
// 	counselor: "",
// 	choice: "individual",
// 	isModal: false,
// 	downloadLog: "",
// 	message: "",
// 	operationLog: "",
// 	isDropDown: false,
// 	isSelected: false,
// 	ethnicity: "",
// 	fileName: "",
// 	batch: {},
// };

// class AddNewAccount extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = initialState;

// 		this.handleInputChange = this.handleInputChange.bind(this);
// 		this.handleButtonChange = this.handleButtonChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	// Whenever an input changes value, change the corresponding state variable
// 	handleInputChange(event) {
// 		event.preventDefault();
// 		const target = event.target;
// 		this.setState({ [target.name]: target.value });
// 	}

// 	handleModal(isModal) {
// 		!isModal
// 			? this.setState({ isModal: true })
// 			: this.setState({ isModal: false });
// 	}

// 	handleChoice(choice) {
// 		this.setState({ choice });
// 	}

// 	handleButtonChange(selected) {
// 		this.setState({ grade: selected, isSelected: selected });
// 	}

// 	handleEthnicity = (value) => {
// 		this.setState({ ethnicity: value });
// 	};

// 	handleFiles = (e) => {
// 		e.preventDefault();
// 		if (e.target.files) {
// 			const reader = new FileReader();
// 			reader.onload = (e) => {
// 				const data = e.target.result;
// 				const workbook = xlsx.read(data, { type: "array" });
// 				const sheetName = workbook.SheetNames[0];
// 				const myHeader = [
// 					"assignedCounselor",
// 					"name",
// 					"grade",
// 					null,
// 					null,
// 					null,
// 					null,
// 					"ethnicity",
// 					"email",
// 				];
// 				const worksheet = workbook.Sheets[sheetName];
// 				const json = xlsx.utils.sheet_to_json(worksheet, {
// 					header: myHeader,
// 					blankrows: false,
// 				});
// 				this.setState({ batch: json });
// 				console.log(json);
// 			};
// 			this.setState({ fileName: e.target.files[0].name });
// 			reader.readAsArrayBuffer(e.target.files[0]);
// 		}
// 	};

// 	// Handle the form submission by calling Userfront.signup()
// 	handleSubmit(event) {
// 		this.setState({ message: "Please wait" });
// 		event.preventDefault();
// 		const { alert } = this.props;
// 		if (this.state.choice == "individual") {
// 			const payload = {
// 				firstName: this.state.firstName,
// 				lastName: this.state.lastName,
// 				email: this.state.email,
// 				assignedCounselor: this.state.counselor,
// 				grade: this.state.grade,
// 				ethnicity: this.state.ethnicity,
// 			};

// 			addNewUser(payload, alert, this.handleResponse);
// 		}

// 		if (this.state.choice == "batch") {
// 			const payload = { batch: this.state.batch };
// 			addBatchUser(payload, alert, this.handleResponse);
// 		}
// 	}

// 	handleResponse = (res) => {
// 		if (res.status == "success") {
// 			if (this.state.choice == "individual") {
// 				this.setState({
// 					...initialState,
// 					isModal: true,
// 				});
// 			}
// 		}
// 		this.setState({ message: res.message });
// 	};

// 	render() {
// 		return (
// 			<div className="d-flex">
// 				<FormModal
// 					toggle={() => this.handleModal(this.state.isModal)}
// 					isOpen={this.state.isModal}
// 					header="+ Add New Account"
// 				>
// 					<div className={cssOverride.choiceContainer}>
// 						<Button
// 							isActive={true}
// 							onClick={() => this.handleChoice("batch")}
// 						>
// 							Batch Enrolment
// 						</Button>
// 						<Button onClick={() => this.handleChoice("individual")}>
// 							Individual Enrollment
// 						</Button>
// 					</div>
// 					<form
// 						className={cssOverride.masterInputContainer}
// 						onSubmit={this.handleSubmit}
// 					>
// 						{this.state.choice === "individual" ? (
// 							<div className={cssOverride.masterInputContainer}>
// 								<InlineInputField
// 									required
// 									onChange={this.handleInputChange}
// 									value={this.state.firstName}
// 									type="text"
// 									name="firstName"
// 									id="firstName"
// 									label={"Firstname"}
// 								/>
// 								<InlineInputField
// 									required
// 									onChange={this.handleInputChange}
// 									value={this.state.lastName}
// 									type="text"
// 									name="lastName"
// 									id="lastName"
// 									label={"Lastname"}
// 								/>
// 								<InlineInputField
// 									required
// 									onChange={this.handleInputChange}
// 									value={this.state.email}
// 									type="text"
// 									name="email"
// 									id="email"
// 									label={"Email"}
// 								/>

// 								<InlineInputField
// 									required
// 									onChange={this.handleInputChange}
// 									value={this.state.counselor}
// 									type="text"
// 									name="counselor"
// 									id="counselor"
// 									label={"Counselor"}
// 								/>
// 								<DropdownField
// 									items={ethnicityData}
// 									label={"Ethnicity"}
// 									defaultText={"Please choose ethnicity"}
// 									onSelect={this.handleEthnicity}
// 								/>

// 								<div
// 									className={cssOverride.gradeButtonContainer}
// 								>
// 									<h6>Choose a grade:</h6>
// 									{grades.map((grade, idx) => {
// 										return (
// 											<SelectButton
// 												item={grade}
// 												isActive={this.state.isSelected}
// 												onClick={() =>
// 													this.handleButtonChange(
// 														grade
// 													)
// 												}
// 												key={idx}
// 											/>
// 										);
// 									})}
// 								</div>
// 							</div>
// 						) : (
// 							<>
// 								<InputFile
// 									onChange={this.handleFiles}
// 									className={cssOverride.fileUpload}
// 									type="file"
// 									name="file"
// 									id="file"
// 									label={"+ Additional files"}
// 								/>
// 								<p style={{ fontSize: "12px" }}>
// 									{this.state.fileName}
// 								</p>
// 							</>
// 						)}

// 						{this.state.message}
// 						{this.state.operationLog.length > 0 ? (
// 							<Button
// 								className={cssOverride.operationLog}
// 								onClick={this.state.downloadLog}
// 							>
// 								Download Summary Log
// 							</Button>
// 						) : null}
// 						<div className={cssOverride.btnContainer}>
// 							<Button
// 								className={cssOverride.submitButtons}
// 								onClick={() =>
// 									this.handleModal(this.state.isModal)
// 								}
// 							>
// 								{this.state.operationLog.length > 0
// 									? "Close"
// 									: "Cancel"}
// 							</Button>
// 							{this.state.operationLog.length > 0 ? null : (
// 								<Button
// 									className={cssOverride.submitButtons}
// 									type="submit"
// 								>
// 									Submit
// 								</Button>
// 							)}
// 						</div>
// 					</form>
// 				</FormModal>
// 				<Button
// 					onClick={() => this.handleModal(this.state.isModal)}
// 					className={cssOverride.upload}
// 				>
// 					+ Add New Profile
// 				</Button>
// 			</div>
// 		);
// 	}
// }

// export default withAlert()(AddNewAccount);
