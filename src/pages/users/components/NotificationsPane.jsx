/** @format */

// /** @format */
// /* eslint-disable no-unused-vars */

// import React, { useState } from "react";
// import Card from "@components/cards/Card";
// import _ from "lodash";
// import {
// 	Dropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem,
// 	Form,
// 	Label,
// 	Input,
// } from "reactstrap";
// import axios from "axios";
// import { io } from "socket.io-client";
// import exportFromJSON from "export-from-json";
// import { useSelector } from "react-redux";
// import cssOverride from "./notificationStyles.module.css";
// import { srv } from "../../../srvConfig";
// import AddNewAccount from "./AddNewAccount";

// export default function NotificationsPane() {
// 	// // eslint-disable-next-line no-unused-vars
// 	const [notificationGroup, setNotificationGroup] = React.useState("Group");
// 	const [dropdownToggle, setDropdownToggle] = React.useState(false);
// 	// const [dropdownTgl, setToggle] = React.useState(false);
// 	// // eslint-disable-next-line no-unused-vars
// 	const [error, setError] = React.useState(null);
// 	const [subject, setSubject] = React.useState("");
// 	const [message, setMessage] = React.useState("");
// 	// const [html, setHtml] = React.useState("");
// 	// const [firstName, setFirstName] = React.useState("");
// 	// const [email, setEmail] = React.useState("");
// 	// const [lastName, setLastName] = React.useState("");
// 	// const [grade, setGrade] = React.useState("6");
// 	// const [counselor, setCounselor] = React.useState(null);
// 	// const [choice, setChoice] = React.useState("INDIVIDUAL");
// 	const [isLoading, setIsLoading] = React.useState(false);
// 	// const [gradeArr, setGradeArr] = React.useState([]);
// 	// const [assignedCounselor] = React.useState("");
// 	// const [operationLog, setOperationLog] = React.useState([]);

// 	// // eslint-disable-next-line no-unused-vars
// 	const [uploadMessage, setUploadMessage] = React.useState("");
// 	// const [modalOpen, setModalOpen] = React.useState(false);
// 	// // eslint-disable-next-line no-unused-vars
// 	const [success, setSuccess] = React.useState(null);
// 	const settingsSlice = useSelector((state) => state.settingsSlice);
// 	const [settings, setSettings] = React.useState(settingsSlice);
// 	const userId = localStorage.getItem("uid");
// 	React.useEffect(() => {
// 		axios
// 			.post(`${srv}/getDashboardUserSettings`, { uid: userId })
// 			.then((res) => {
// 				const payload = {
// 					addUserProfiles: res.data.addUserProfiles,
// 					deleteUserProfiles: res.data.deleteUserProfiles,
// 					editUserProfiles: res.data.editUserProfiles,
// 					messageUsers: res.data.messageUsers,
// 					uploadAndExport: res.data.uploadAndExport,
// 					realTimeNotifications: res.data.realTimeNotifications,
// 					updateNotifications: res.data.updateNotifications,
// 				};
// 				setSettings(payload);
// 			});
// 	}, []);

// 	// const grades = [
// 	//   "K",
// 	//   "1",
// 	//   "2",
// 	//   "3",
// 	//   "4",
// 	//   "5",
// 	//   "6",
// 	//   "7",
// 	//   "8",
// 	//   "9",
// 	//   "10",
// 	//   "11",
// 	//   "12",
// 	// ];

// 	// const [fileState, setFileState] = React.useState();

// 	// function setFile(e) {
// 	//   const file = e.target.files[0];
// 	//   const formData = new FormData();
// 	//   formData.append("name", file.name);
// 	//   formData.append("file", file);
// 	//   setFileState(() => formData);
// 	// }

// 	// function handleSubmit(e) {
// 	//   setUploadMessage("Please wait...");
// 	//   e.preventDefault();
// 	//   const uploaderEmail = localStorage.getItem("email");
// 	//   const payload = {
// 	//     firstName: firstName,
// 	//     email: email,
// 	//     lastName: lastName,
// 	//     grade: grade,
// 	//     counselor: counselor,
// 	//   };

// 	//   if (choice === "BATCH") {
// 	//     axios
// 	//       .post(`${srv}/setStudentProfile/${uploaderEmail}`, fileState)
// 	//       // eslint-disable-next-line consistent-return
// 	//       .then((res) => {
// 	//         if (res.data.type === "ERROR") {
// 	//           return setUploadMessage(res.data.msg);
// 	//         }
// 	//         if (res.data.DATA === "SUCCESS") {
// 	//           return setModalOpen(false);
// 	//         }
// 	//         if (res.data.operationLog) {
// 	//           setOperationLog(res.data.operationLog);
// 	//           return setUploadMessage(
// 	//             "Please see the log below for more information about this batch enrollment"
// 	//           );
// 	//         }
// 	//       });
// 	//   } else if (choice === "INDIVIDUAL") {
// 	//     axios
// 	//       .post(`${srv}/setIndividualStudentProfile/${uploaderEmail}`, payload)
// 	//       .then((res) => {
// 	//         if (res.data.type === "SUCCESS") {
// 	//           setUploadMessage(res.data.msg);
// 	//           setTimeout(() => {
// 	//             setModalOpen(false);
// 	//             setFirstName("");
// 	//             setEmail("");
// 	//             setLastName("");
// 	//             setGrade("");
// 	//             setCounselor("");
// 	//           }, 1500);
// 	//         } else if (res.data.type === "ERROR") {
// 	//           setUploadMessage(res.data.msg);
// 	//         }
// 	//       });
// 	//   }
// 	// }
// 	// // eslint-disable-next-line no-shadow
// 	function sendMessage(e) {
// 		e.preventDefault();
// 		setIsLoading(true);
// 		const first = localStorage.getItem("firstName");
// 		const last = localStorage.getItem("lastName");
// 		// eslint-disable-next-line no-shadow
// 		const email = localStorage.getItem("email");
// 		const organization = localStorage.getItem("organization");

// 		// setSuccess(null);
// 		const payload = {
// 			messageType: "GROUP_MESSAGE",
// 			to: notificationGroup.toLowerCase(),
// 			subject: subject,
// 			message: message,
// 			fromFirst: first,
// 			fromLast: last,
// 			fromEmail: email,
// 			organization: organization,
// 		};
// 		if (
// 			payload.to &&
// 			payload.subject &&
// 			payload.message &&
// 			notificationGroup !== "Group"
// 		) {
// 			axios.post(`${srv}/sendMessage`, payload).then((res) => {
// 				if (res.data === "OK") {
// 					setSuccess("Message sent");
// 					setTimeout(() => {
// 						setSuccess(null);
// 					}, 5000);
// 					setError(null);
// 					setSubject("");
// 					setMessage("");
// 					setNotificationGroup("Group");
// 					setIsLoading(false);
// 				}
// 			});
// 		} else {
// 			setError("You have to fill out all fields!");
// 			setIsLoading(false);
// 		}
// 	}

// 	// function downloadLog() {
// 	//   let data = operationLog;
// 	//   data = data.filter(
// 	//     (d) =>
// 	//       d.firstName.length !== 0 &&
// 	//       d.lastName.length !== 0 &&
// 	//       d.email.length !== 0
// 	//   );
// 	//   const fileName = "download";
// 	//   const exportType = "xls";

// 	//   exportFromJSON({ data, fileName, exportType });
// 	// }

// 	// React.useEffect(() => {
// 	//   setOperationLog([]);
// 	//   setFirstName("");
// 	//   setEmail("");
// 	//   setLastName("");
// 	//   setGrade("");
// 	//   setCounselor("");
// 	//   setUploadMessage("");
// 	// }, [choice]);
// 	return (
// 		<>
// 			<AddNewAccount />
// 			<Form>
// 				<Card className="sendMessageCard">
// 					<p className="font-weight-bold">Global Notifications</p>
// 					{error ? <h5 style={{ color: "red" }}>{error}</h5> : null}
// 					{success ? (
// 						<h5 style={{ color: "green" }}>{success}</h5>
// 					) : null}
// 					<span className="font-weight-lighter">Target Group</span>
// 					<Card>
// 						<Label className={cssOverride.labelstyle}>
// 							<div className={cssOverride.subContainer}>
// 								Account Type :
// 								<Dropdown
// 									className={cssOverride.dropdownAccountType}
// 									isOpen={dropdownToggle}
// 									toggle={() =>
// 										setDropdownToggle(!dropdownToggle)
// 									}
// 								>
// 									<DropdownToggle
// 										className={cssOverride.dropdown}
// 										caret
// 									>
// 										{notificationGroup}
// 									</DropdownToggle>
// 									<DropdownMenu>
// 										<DropdownItem
// 											className={cssOverride.dropdown}
// 											onClick={() =>
// 												setNotificationGroup(
// 													() => "Not-Okay"
// 												)
// 											}
// 										>
// 											Not-Okay
// 										</DropdownItem>
// 										<DropdownItem
// 											className={cssOverride.dropdown}
// 											onClick={() =>
// 												setNotificationGroup(
// 													() => "Okay"
// 												)
// 											}
// 										>
// 											Okay
// 										</DropdownItem>
// 										<DropdownItem
// 											className={cssOverride.dropdown}
// 											onClick={() =>
// 												setNotificationGroup(
// 													() => "Better than ok"
// 												)
// 											}
// 										>
// 											Better than ok
// 										</DropdownItem>
// 									</DropdownMenu>
// 								</Dropdown>
// 							</div>
// 						</Label>
// 					</Card>

// 					<span>Title</span>
// 					<Card>
// 						<Input
// 							className={cssOverride.inputEl}
// 							onChange={(e) => setSubject(e.target.value)}
// 							type="text"
// 							name="subjectLine"
// 							id="subjectLine"
// 							placeholder="What's up?"
// 							value={subject}
// 						/>
// 					</Card>
// 					<span>Body</span>
// 					<Card>
// 						<Input
// 							className={cssOverride.inputEl}
// 							onChange={(e) => setMessage(e.target.value)}
// 							type="text"
// 							name="message"
// 							id="message"
// 							placeholder="Example: You haven't visited what's up today"
// 							value={message}
// 						/>
// 					</Card>
// 					<button
// 						onClick={(e) => sendMessage(e)}
// 						className="btn-primary float-right"
// 						disabled={isLoading}
// 					>
// 						{isLoading ? "Sending message..." : "Send Message"}
// 					</button>
// 				</Card>
// 			</Form>
// 		</>
// 	);
// }
