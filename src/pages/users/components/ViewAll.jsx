/** @format */

// /** @format */
// /* eslint-disable consistent-return */
// /* eslint-disable no-param-reassign */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-shadow */

// import React from "react";
// import { withRouter } from "react-router";
// import { Table } from "react-bootstrap";
// import FeatherIcon from "feather-icons-react";
// import Card from "@components/cards/Card";
// import axios from "axios";
// import { connect, useDispatch, useSelector } from "react-redux";

// import { Input, Modal, ModalBody, ModalHeader } from "reactstrap";
// import _ from "lodash";
// import NotificationsPane from "./NotificationsPane";
// import { PAGES_URL } from "../../../router/routes";
// import { srv } from "../../../srvConfig";
// import { setActivityData } from "@redux/activitySlice";
// import { setKbroUsersFetching } from "@redux/isLoadingSlice";
// import { setKbroUsers } from "@redux/kbroUserArrSlice";
// import { setMessages } from "@redux/globalMessageSlice";
// import LoginValidator from "../../../utils/LoginValidator";
// import { socket } from "../../../utils/socket";
// import LoadingModal from "../../../utils/LoadingModal";
// import returnWeekday from "../../../utils/returnWeekday";
// import {
// 	setNotOkayData,
// 	setOkayData,
// 	setBetterThanOkData,
// } from "../../../redux/notOkaySlice";
// import cssModule from "./viewAll.module.css";

// const ViewAll = ({ history }) => {
// 	// const socketID = useSelector((state) => state.socketIDSlice.socketID);
// 	// const globalMessages = useSelector(
// 	// 	(state) => state.globalMessageSlice.globalMessages
// 	// );

// 	// const reversedMessages = _.cloneDeep(globalMessages);
// 	// const reversed = reversedMessages.reverse();

// 	React.useEffect(() => {
// 		const token = localStorage.getItem("token");
// 		LoginValidator.verifyTokenNoRedirect(token);
// 	}, []);

// 	const users = useSelector((state) => state.kbroUserArrSlice.kbroUsers);
// 	const compiledStateData = useSelector((state) => state.compiledDataSlice);
// 	// const [users, setUsers] = React.useState(kbroUsers);
// 	const [filteredUsers, setFilteredUsers] = React.useState([]);
// 	const [loadingMessage, setLoadingMessage] = React.useState("");
// 	const [progressPercentage, setProgressPercentage] = React.useState(0);
// 	const [isLoading, setIsLoading] = React.useState(false);
// 	const [firstNameInput, setFirstName] = React.useState("");
// 	const [lastNameInput, setLastName] = React.useState("");
// 	const [emailInput, setEmailInput] = React.useState("");
// 	const [modalOpen, setModalOpen] = React.useState(false);
// 	const [messageData, setMessageData] = React.useState({
// 		organization: null,
// 		fromEmail: null,
// 		recipient: null,
// 		date: null,
// 		subject: null,
// 		msg: null,
// 	});
// 	// const [dropdownToggle, setDropdownToggle] = React.useState(false);
// 	const dispatch = useDispatch();

// 	const EDOrganization = localStorage.getItem("organization");
// 	const isSupervisingEntity = localStorage.getItem("isSupervisingEntity");
// 	let supervisedOrgs = localStorage.getItem("supervisedOrgs");

// 	if (isSupervisingEntity === "true") {
// 		supervisedOrgs = JSON.parse(JSON.stringify(supervisedOrgs));
// 	}

// 	socket.on("progress", (data) => {
// 		setLoadingMessage(data.operation);
// 		setProgressPercentage(data.percentage);
// 	});
// 	function toggle() {
// 		setModalOpen(() => !modalOpen);
// 	}
// 	function returnOrganizations(isSupervisor) {
// 		if (isSupervisor !== "undefined") {
// 			return supervisedOrgs;
// 		}
// 		if (isSupervisor === "undefined") {
// 			return EDOrganization;
// 		}
// 	}

// 	function fetchGlobalMessages() {
// 		if (EDOrganization === "YouRok") {
// 			axios
// 				.post(`${srv}/getGlobalMessages`, {
// 					organization: EDOrganization,
// 				})
// 				.then((dta) => {
// 					const { globalMessages } = dta.data;
// 					const groupMessages = globalMessages.filter(
// 						(msg) =>
// 							msg.messageType.toUpperCase() === "GROUP_MESSAGE"
// 					);
// 					const individualMessages = globalMessages.filter(
// 						(msg) =>
// 							msg.messageType.toUpperCase() ===
// 							"INDIVIDUAL_MESSAGE"
// 					);
// 					console.log(individualMessages);
// 					const payload = {
// 						globalMessages: groupMessages,
// 						individualMessages: individualMessages,
// 					};
// 					dispatch(setMessages(payload));
// 				});
// 		} else if (isSupervisingEntity === "true") {
// 			axios
// 				.post(`${srv}/getGlobalMessagesSupervisor`, {
// 					supervisingOrganization: EDOrganization,
// 				})
// 				.then((dta) => {
// 					const { globalMessages } = dta.data;
// 					const groupMessages = globalMessages.filter(
// 						(msg) =>
// 							msg.messageType.toUpperCase() === "GROUP_MESSAGE"
// 					);
// 					const individualMessages = globalMessages.filter(
// 						(msg) =>
// 							msg.messageType.toUpperCase() ===
// 							"INDIVIDUAL_MESSAGE"
// 					);
// 					console.log(individualMessages);
// 					const payload = {
// 						globalMessages: groupMessages,
// 						individualMessages: individualMessages,
// 					};
// 					dispatch(setMessages(payload));
// 				});
// 		} else {
// 			axios
// 				.post(`${srv}/getGlobalMessages"`, {
// 					organization: EDOrganization,
// 				})
// 				.then((dta) => {
// 					const { globalMessages } = dta.data;
// 					const groupMessages = globalMessages.filter(
// 						(msg) =>
// 							msg.messageType.toUpperCase() === "GROUP_MESSAGE"
// 					);
// 					const individualMessages = globalMessages.filter(
// 						(msg) =>
// 							msg.messageType.toUpperCase() ===
// 							"INDIVIDUAL_MESSAGE"
// 					);
// 					console.log(individualMessages);
// 					const payload = {
// 						globalMessages: groupMessages,
// 						individualMessages: individualMessages,
// 					};
// 					dispatch(setMessages(payload));
// 				});
// 		}
// 	}

// 	React.useEffect(() => {
// 		// eslint-disable-next-line eqeqeq
// 		compiledStateData.compiledData.length === 0 ? setIsLoading(true) : null;
// 		setProgressPercentage(0);
// 		setLoadingMessage("Contacting Server");
// 		if (compiledStateData.compiledData.length === 0) {
// 			if (socketID) {
// 				fetchGlobalMessages();
// 				axios
// 					.post(`${srv}/extractAndCompileSchool`, {
// 						organization: returnOrganizations(isSupervisingEntity),
// 						sid: socketID,
// 					})
// 					.then((res) => {
// 						console.log(res.data);
// 						const { compiledData } = res.data;
// 						const filteredData = [];

// 						for (let i = 0; i < compiledData.length; i++) {
// 							if (EDOrganization === "YouRok") {
// 								filteredData.push(compiledData[i]);
// 							} else if (
// 								EDOrganization === compiledData[i].organization
// 							) {
// 								filteredData.push(compiledData[i]);
// 							} else if (isSupervisingEntity) {
// 								// supervisedOrgs = JSON.parse(supervisedOrgs);
// 								for (
// 									let x = 0;
// 									x < supervisedOrgs.length;
// 									x++
// 								) {
// 									if (
// 										supervisedOrgs[x] ===
// 										compiledData[i].organization
// 									) {
// 										filteredData.push(compiledData[i]);
// 									}
// 								}
// 							}
// 						}

// 						const notOkayUsers = filteredData.filter(
// 							(user) => user.ok === "NOT_OK"
// 						);
// 						const okayUsers = filteredData.filter(
// 							(user) => user.ok === "OK"
// 						);
// 						const betterThanOk = filteredData.filter(
// 							(user) => user.ok === "BETTER_THAN_OK"
// 						);

// 						const payload = {
// 							notOkayUsers: notOkayUsers,
// 							okayUsers: okayUsers,
// 							betterThanOk: betterThanOk,
// 							kbroUsersFetching: false,
// 							kbroUsers: filteredData,
// 						};
// 						dispatch(setKbroUsers(payload));
// 						dispatch(setNotOkayData(payload));
// 						dispatch(setOkayData(payload));
// 						dispatch(setBetterThanOkData(payload));
// 						setIsLoading(false);
// 						dispatch(setKbroUsersFetching(payload));
// 					});
// 			}
// 		} else {
// 			const { compiledData } = compiledStateData;
// 			const filteredData = [];

// 			for (let i = 0; i < compiledData.length; i++) {
// 				if (EDOrganization === "YouRok") {
// 					filteredData.push(compiledData[i]);
// 				} else if (EDOrganization === compiledData[i].organization) {
// 					filteredData.push(compiledData[i]);
// 				} else if (isSupervisingEntity) {
// 					// supervisedOrgs = JSON.parse(supervisedOrgs);
// 					for (let x = 0; x < supervisedOrgs.length; x++) {
// 						if (
// 							supervisedOrgs[x] === compiledData[i].organization
// 						) {
// 							filteredData.push(compiledData[i]);
// 						}
// 					}
// 				}
// 			}

// 			const notOkayUsers = filteredData.filter(
// 				(user) => user.ok === "NOT_OK"
// 			);
// 			const okayUsers = filteredData.filter((user) => user.ok === "OK");
// 			const betterThanOk = filteredData.filter(
// 				(user) => user.ok === "BETTER_THAN_OK"
// 			);

// 			const payload = {
// 				notOkayUsers: notOkayUsers,
// 				okayUsers: okayUsers,
// 				betterThanOk: betterThanOk,
// 				kbroUsersFetching: false,
// 				kbroUsers: filteredData,
// 			};
// 			dispatch(setKbroUsers(payload));
// 			dispatch(setNotOkayData(payload));
// 			dispatch(setOkayData(payload));
// 			dispatch(setBetterThanOkData(payload));
// 			setIsLoading(false);
// 			dispatch(setKbroUsersFetching(payload));
// 		}
// 	}, [socketID, compiledStateData]);

// 	function handleClick(
// 		entityId,
// 		firstName,
// 		lastName,
// 		age,
// 		email,
// 		placement,
// 		months,
// 		recentScore,
// 		recentScores,
// 		iokData,
// 		grade,
// 		birthday,
// 		nickName,
// 		anonymousNick,
// 		phone,
// 		gender,
// 		assignedAgent,
// 		registrationDate,
// 		ethnicity,
// 		organization,
// 		idx
// 	) {
// 		const payload = {
// 			entityId: entityId,
// 			firstName: firstName,
// 			lastName: lastName,
// 			age: age,
// 			email: email,
// 			grade: grade,
// 			placement: placement,
// 			placementMonths: months,
// 			score: recentScore,
// 			scoreArr: recentScores,
// 			birthday: birthday,
// 			nickName: nickName,
// 			anonymousNick: anonymousNick,
// 			phone: phone,
// 			iokData: iokData,
// 			gender: gender,
// 			assignedAgent: assignedAgent,
// 			registrationDate: registrationDate,
// 			ethnicity: ethnicity,
// 			organization: organization,
// 		};
// 		dispatch(setActivityData(payload));
// 		history.push(`${PAGES_URL.USERS}/${idx}`);
// 	}

// 	React.useEffect(() => {
// 		const mutatedUsers = users.filter((user) =>
// 			user.firstName.toLowerCase().includes(firstNameInput.toLowerCase())
// 		);

// 		setFilteredUsers(mutatedUsers);
// 	}, [firstNameInput]);

// 	React.useEffect(() => {
// 		const mutatedUsers = users.filter((user) =>
// 			user.lastName.toLowerCase().includes(lastNameInput.toLowerCase())
// 		);
// 		setFilteredUsers(mutatedUsers);
// 	}, [lastNameInput]);

// 	React.useEffect(() => {
// 		const mutatedUsers = users.filter((user) =>
// 			user.email.toLowerCase().includes(emailInput.toLowerCase())
// 		);
// 		setFilteredUsers(mutatedUsers);
// 	}, [emailInput]);

// 	function maximizeMessage(msg, date) {
// 		console.log(msg);
// 		setMessageData(() => ({
// 			organization: msg.organization,
// 			fromEmail: msg.fromEmail,
// 			recipient: msg.recipient,
// 			date: date,
// 			subject: msg.subject,
// 			msg: msg.msg,
// 		}));
// 		toggle();
// 	}

// 	return (
// 		<>
// 			<div className="container-fluid px-5 py-4">
// 				{isLoading ? (
// 					<LoadingModal
// 						percentage={progressPercentage}
// 						message={loadingMessage}
// 					/>
// 				) : null}
// 				<div className={cssModule.filterContainer}>
// 					<h5>Search by:</h5>
// 					<Input
// 						className={cssModule.inputEl}
// 						onChange={(e) => setFirstName(e.target.value)}
// 						type="firstName"
// 						name="firstName"
// 						id="firstName"
// 						placeholder="First Name"
// 						value={firstNameInput}
// 					/>
// 					<Input
// 						className={cssModule.inputEl}
// 						onChange={(e) => setLastName(e.target.value)}
// 						type="lastName"
// 						name="lastName"
// 						id="lastName"
// 						placeholder="Last Name"
// 						value={lastNameInput}
// 					/>
// 					<Input
// 						className={cssModule.inputEl}
// 						onChange={(e) => setEmailInput(e.target.value)}
// 						type="email"
// 						name="email"
// 						id="email"
// 						placeholder="Email"
// 						value={emailInput}
// 					/>
// 				</div>

// 				<div className="row">
// 					<div className="col-md-9">
// 						<Card>
// 							<Table striped bordered hover size="sm">
// 								<thead>
// 									<tr>
// 										<th></th>
// 										<th>Name</th>
// 										<th>Grade</th>
// 										<th>Email</th>
// 										<th>Username</th>
// 										<th>Assigned Counselor</th>
// 									</tr>
// 								</thead>
// 								<tbody>
// 									{/* eslint-disable-next-line array-callback-return */}
// 									{filteredUsers.length > 0
// 										? filteredUsers.map((user, idx) => {
// 												let fillColor;
// 												if (user.ok === "NOT_OK") {
// 													fillColor = "#D84747";
// 												}
// 												if (user.ok === "OK") {
// 													fillColor = "#EAA353";
// 												}
// 												if (
// 													user.ok === "BETTER_THAN_OK"
// 												) {
// 													fillColor = "#66A858";
// 												} else if (user.ok === null) {
// 													fillColor = "#9e9e9e";
// 												}
// 												return (
// 													<tr
// 														key={idx}
// 														className="pointer"
// 														onClick={() =>
// 															handleClick(
// 																user.entityId,
// 																user.firstName,
// 																user.lastName,
// 																user.age,
// 																user.email,
// 																user.placement,
// 																user.placementMonths,
// 																user.recentScore,
// 																user.recentScores,
// 																user.iokData,
// 																user.grade,
// 																user.birthday,
// 																user.nickName,
// 																user.anonymousNick,
// 																user.phone,
// 																user.gender,
// 																user.assignedAgent,
// 																user.registrationDate,
// 																user.ethnicity,
// 																user.organization,
// 																idx
// 															)
// 														}
// 													>
// 														<td>
// 															<FeatherIcon
// 																icon="circle"
// 																size="11"
// 																// eslint-disable-next-line consistent-return
// 																fill={fillColor}
// 																stroke="1"
// 															/>
// 														</td>
// 														<td>{`${user.firstName} ${user.lastName}`}</td>
// 														<td>{user.grade}</td>
// 														<td>{user.email}</td>
// 														<td>{user.nickName}</td>
// 														<td>
// 															{user.assignedAgent}
// 														</td>
// 													</tr>
// 												);
// 										  })
// 										: users.map((user, idx) => {
// 												let fillColor;
// 												if (user.ok === "NOT_OK") {
// 													fillColor = "#D84747";
// 												}
// 												if (user.ok === "OK") {
// 													fillColor = "#EAA353";
// 												}
// 												if (
// 													user.ok === "BETTER_THAN_OK"
// 												) {
// 													fillColor = "#66A858";
// 												} else if (user.ok === null) {
// 													fillColor = "#9e9e9e";
// 												}
// 												return (
// 													<tr
// 														key={idx}
// 														className="pointer"
// 														onClick={() =>
// 															handleClick(
// 																user.entityId,
// 																user.firstName,
// 																user.lastName,
// 																user.age,
// 																user.email,
// 																user.placement,
// 																user.placementMonths,
// 																user.recentScore,
// 																user.recentScores,
// 																user.iokData,
// 																user.grade,
// 																user.birthday,
// 																user.nickName,
// 																user.anonymousNick,
// 																user.phone,
// 																user.gender,
// 																user.assignedAgent,
// 																user.registrationDate,
// 																user.ethnicity,
// 																user.organization,
// 																idx
// 															)
// 														}
// 													>
// 														<td>
// 															<FeatherIcon
// 																icon="circle"
// 																size="11"
// 																// eslint-disable-next-line consistent-return
// 																fill={fillColor}
// 																stroke="1"
// 															/>
// 														</td>
// 														<td>{`${user.firstName} ${user.lastName}`}</td>
// 														<td>{user.grade}</td>
// 														<td>{user.email}</td>
// 														<td>{user.nickName}</td>
// 														<td>
// 															{user.assignedAgent}
// 														</td>
// 													</tr>
// 												);
// 										  })}
// 								</tbody>
// 							</Table>
// 						</Card>
// 					</div>
// 					<div className="col-md-3">
// 						<NotificationsPane />
// 						<Card className="messageContainer">
// 							<h5 className={cssModule.historyHeadline}>
// 								Message History
// 							</h5>
// 							<Modal
// 								className={cssModule.modal}
// 								isOpen={modalOpen}
// 								toggle={toggle}
// 							>
// 								<ModalBody>
// 									<h6 className={cssModule.messageHeaderInfo}>
// 										<b>Organization:</b>{" "}
// 										{messageData.organization}
// 									</h6>
// 									<h6 className={cssModule.messageHeaderInfo}>
// 										<b>From:</b> {messageData.fromEmail}
// 									</h6>
// 									<h6 className={cssModule.messageHeaderInfo}>
// 										<b>Date:</b> {messageData.date}
// 									</h6>
// 									<h6 className={cssModule.messageHeaderInfo}>
// 										<b>Recipient:</b>{" "}
// 										{messageData.recipient}
// 									</h6>
// 									<h6 className={cssModule.messageHeaderInfo}>
// 										<b>Subject:</b> {messageData.subject}
// 									</h6>
// 									<hr className={cssModule.horizontalRule} />
// 									<p className={cssModule.bodyText}>
// 										<b>{messageData.msg}</b>
// 									</p>
// 								</ModalBody>
// 							</Modal>
// 							{reversed.map((msg) => {
// 								const dateTime = new Date(msg.timestamp * 1000);
// 								const usTimeFormat = new Intl.DateTimeFormat(
// 									"en-US"
// 								).format(dateTime);
// 								let dayOfWeek = dateTime.getDay();
// 								dayOfWeek = returnWeekday(dayOfWeek);
// 								const msgSub =
// 									msg.msg.length > 50
// 										? `${msg.msg.substring(0, 46)} ...`
// 										: msg.msg;
// 								return (
// 									<Card
// 										className="messageCard"
// 										key={_.uniqueId()}
// 									>
// 										<div
// 											onClick={() =>
// 												maximizeMessage(
// 													msg,
// 													usTimeFormat
// 												)
// 											}
// 										>
// 											<h6
// 												className={
// 													cssModule.messageHeader
// 												}
// 											>{`${dayOfWeek}, ${usTimeFormat}`}</h6>
// 											<h5
// 												className={
// 													cssModule.messageBody
// 												}
// 											>
// 												{msgSub}
// 											</h5>
// 										</div>
// 									</Card>
// 								);
// 							})}
// 						</Card>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// const mapStateToProps = (state) => ({
// 	...state,
// });

// const mapDispatchToProps = (dispatch) => ({
// 	loginUser: (data, history, response) =>
// 		dispatch(loginUser(data, history, response)),
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(withRouter(ViewAll));
