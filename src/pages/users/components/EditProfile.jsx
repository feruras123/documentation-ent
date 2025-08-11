/** @format */

// /** @format */
// /* eslint-disable no-unused-vars */

// import React from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { Form, Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
// import { useSelector, useDispatch } from "react-redux";
// import _ from "lodash";
// import FeatherIcon from "feather-icons-react";
// import { setKbroUsers } from "../../../redux/kbroUserArrSlice";
// import { srv } from "../../../srvConfig";
// import cssOverride from "./notificationStyles.module.css";

// function EditProfile() {
// 	const dispatch = useDispatch();
// 	const history = useHistory();
// 	const userData = useSelector((state) => state.activitySlice);
// 	// eslint-disable-next-line no-unused-vars
// 	const [notificationGroup, setNotificationGroup] = React.useState("Group");
// 	const [dropdownToggle, setDropdownToggle] = React.useState(false);
// 	const [dropdownTgl, setToggle] = React.useState(false);
// 	const [isLoading, setIsLoading] = React.useState(false);
// 	// eslint-disable-next-line no-unused-vars
// 	const [error, setError] = React.useState(null);
// 	const [subject, setSubject] = React.useState("");
// 	const [message, setMessage] = React.useState("");
// 	const [html, setHtml] = React.useState("");
// 	const [firstName, setFirstName] = React.useState(userData.firstname);
// 	const [email, setEmail] = React.useState(userData.email);
// 	const [lastName, setLastName] = React.useState(userData.lastName);
// 	const [counselor, setCounselor] = React.useState(userData.assignedAgent);
// 	const [choice, setChoice] = React.useState("INDIVIDUAL");
// 	const [gradeArr, setGradeArr] = React.useState([]);
// 	const [assignedCounselor] = React.useState("");
// 	const [operationLog, setOperationLog] = React.useState([]);
// 	const [deleteState, setDelete] = React.useState(null);

// 	// eslint-disable-next-line no-unused-vars
// 	const [uploadMessage, setUploadMessage] = React.useState("");
// 	const [modalOpen, setModalOpen] = React.useState(false);
// 	const [deleteModal, setDeleteModal] = React.useState(false);
// 	// eslint-disable-next-line no-unused-vars
// 	const [success, setSuccess] = React.useState(null);
// 	const settingsSlice = useSelector((state) => state.settingsSlice);
// 	const [settings, setSettings] = React.useState(settingsSlice);
// 	const userId = localStorage.getItem("uid");

// 	React.useEffect(() => {
// 		axios
// 			.post(`${srv}/getDashboardUserSettings`, { uid: userId })
// 			.then((res) => {
// 				console.log(res);
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

// 	const grades = [
// 		"K",
// 		"1",
// 		"2",
// 		"3",
// 		"4",
// 		"5",
// 		"6",
// 		"7",
// 		"8",
// 		"9",
// 		"10",
// 		"11",
// 		"12",
// 	];

// 	const [grade, setGrade] = React.useState(userData.grade);

// 	function returnGender() {
// 		// eslint-disable-next-line default-case
// 		switch (userData.gender) {
// 			case 1:
// 				return "Male";
// 			case 2:
// 				return "Female";
// 			case 6:
// 				return "Non-Binary";
// 			default:
// 				return "Not Defined";
// 		}
// 	}
// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		setIsLoading(true);
// 		const payload = {
// 			originalEmail: userData.email,
// 			firstName: firstName,
// 			lastName: lastName,
// 			email: email,
// 			counselor: counselor,
// 			grade: grade,
// 		};

// 		axios.post(`${srv}/updateStudentProfile`, payload).then((res) => {
// 			if (res.data.type === "SUCCESS") {
// 				setUploadMessage(res.data.msg);
// 				// eslint-disable-next-line no-shadow
// 				const payload = {
// 					kbroUsers: [],
// 				};
// 				setTimeout(() => {
// 					setIsLoading(false);
// 					dispatch(setKbroUsers(payload));
// 					history.push("/dashboard");
// 				}, 1000);
// 			} else if (res.data.type === "ERROR") {
// 				setUploadMessage(res.data.msg);
// 				setIsLoading(false);
// 			}
// 		});
// 	}

// 	function deleteApproved() {
// 		setIsLoading(true);
// 		setUploadMessage(null);
// 		axios.post(`${srv}/unEnrollKbroUser`, { email: email }).then((res) => {
// 			if (res.data.type === "SUCCESS") {
// 				setUploadMessage(`${email} was successfully deleted`);
// 				const payload = {
// 					kbroUsers: [],
// 				};
// 				setTimeout(() => {
// 					setIsLoading(false);
// 					dispatch(setKbroUsers(payload));
// 					history.push("/dashboard");
// 				}, 1000);
// 			} else if (res.data.type === "SUCCESS") {
// 				setUploadMessage(`${email} was NOT deleted`);
// 			}
// 		});
// 	}

// 	return (
// 		<>
// 			<Modal isOpen={deleteModal} className={cssOverride.modal}>
// 				<ModalHeader>DeleteProfile</ModalHeader>
// 				<ModalBody className={cssOverride.modalBody}>
// 					<div className={cssOverride.textContainer}>
// 						<h6>Are you sure you want to delete {email}?</h6>
// 						<p className={cssOverride.p}>
// 							This user will be removed from the dasbhoard but
// 							will still be able to play Kbro.
// 						</p>
// 					</div>

// 					<div className={cssOverride.deleteButtonContainer}>
// 						<Button
// 							className={cssOverride.gradeBtn}
// 							onClick={() => setDeleteModal(false)}
// 						>
// 							Cancel
// 						</Button>
// 						<Button
// 							disabled={isLoading}
// 							className={cssOverride.gradeBtn}
// 							onClick={deleteApproved}
// 						>
// 							{isLoading ? "Please wait..." : "Confirm"}
// 						</Button>
// 					</div>
// 				</ModalBody>
// 			</Modal>
// 			{settings.editUserProfiles ? (
// 				<button
// 					className={`btn p-0 mb-3 font-weight-bold text-dark ${cssOverride.editProfile}`}
// 					style={{ fontSize: ".875rem" }}
// 					onClick={() => setModalOpen(!modalOpen)}
// 				>
// 					<FeatherIcon
// 						icon={"edit"}
// 						className={cssOverride.icon}
// 						size={24}
// 					/>
// 					Edit Profile
// 				</button>
// 			) : null}
// 			<button
// 				className={`btn p-0 mb-3 font-weight-bold text-dark ${cssOverride.editProfile}`}
// 				style={{ fontSize: ".875rem" }}
// 				onClick={() => setDeleteModal(true)}
// 			>
// 				<FeatherIcon
// 					icon={"trash"}
// 					className={cssOverride.icon}
// 					size={24}
// 				/>
// 				Delete Profile
// 			</button>
// 			<div className="d-flex">
// 				<Modal isOpen={modalOpen} className={cssOverride.modal}>
// 					<ModalHeader>Edit Profile</ModalHeader>
// 					<ModalBody className={cssOverride.modalBody}>
// 						<Form
// 							className={cssOverride.masterInputContainer}
// 							onSubmit={(e) => handleSubmit(e)}
// 						>
// 							<div className={cssOverride.choiceContainer}></div>

// 							<div className={cssOverride.masterInputContainer}>
// 								<div className={cssOverride.inputContainer}>
// 									<h6>First Name:</h6>
// 									<Input
// 										required
// 										onChange={(e) =>
// 											setFirstName(() => e.target.value)
// 										}
// 										className={cssOverride.dataInput}
// 										value={firstName}
// 										type="text"
// 										name="firstName"
// 										id="firstName"
// 									/>
// 								</div>
// 								<div className={cssOverride.inputContainer}>
// 									<h6>Last Name:</h6>
// 									<Input
// 										required
// 										onChange={(e) =>
// 											setLastName(() => e.target.value)
// 										}
// 										className={cssOverride.dataInput}
// 										value={lastName}
// 										type="text"
// 										name="lastName"
// 										id="lastName"
// 									/>
// 								</div>
// 								<div className={cssOverride.inputContainer}>
// 									<h6>Email:</h6>
// 									<Input
// 										required
// 										onChange={(e) =>
// 											setEmail(() => e.target.value)
// 										}
// 										className={cssOverride.dataInput}
// 										value={email}
// 										type="email"
// 										name="email"
// 										id="email"
// 									/>
// 								</div>
// 								<div className={cssOverride.inputContainer}>
// 									<h6>Counselor:</h6>
// 									<Input
// 										required
// 										onChange={(e) =>
// 											setCounselor(() => e.target.value)
// 										}
// 										className={cssOverride.dataInput}
// 										value={counselor}
// 										type="text"
// 										name="counsel"
// 										id="counsel"
// 									/>
// 								</div>
// 								<div
// 									className={cssOverride.gradeButtonContainer}
// 								>
// 									<h6>Choose a grade:</h6>
// 									{grades.map((grd) => {
// 										if (grd === grade) {
// 											return (
// 												<Button
// 													key={_.uniqueId()}
// 													className={
// 														cssOverride.gradeBtnActive
// 													}
// 													onClick={() =>
// 														setGrade(grd)
// 													}
// 												>
// 													{grd}
// 												</Button>
// 											);
// 										}
// 										return (
// 											<Button
// 												key={_.uniqueId()}
// 												className={cssOverride.gradeBtn}
// 												onClick={() => setGrade(grd)}
// 											>
// 												{grd}
// 											</Button>
// 										);
// 									})}
// 								</div>
// 							</div>

// 							{uploadMessage}

// 							<div className={cssOverride.btnContainer}>
// 								<Button
// 									disabled={isLoading}
// 									className={cssOverride.submitButtons}
// 									onClick={() => setModalOpen(false)}
// 								>
// 									{operationLog.length > 0
// 										? "Close"
// 										: "Cancel"}
// 								</Button>
// 								{operationLog.length > 0 ? null : (
// 									<Button
// 										disabled={isLoading}
// 										className={cssOverride.submitButtons}
// 										type="submit"
// 									>
// 										{isLoading
// 											? "Please wait..."
// 											: "Submit"}
// 									</Button>
// 								)}
// 							</div>
// 						</Form>
// 					</ModalBody>
// 				</Modal>
// 			</div>
// 		</>
// 	);
// }

// export default EditProfile;
