/** @format */

// /** @format */
// /* eslint-disable no-unused-vars */
// /* eslint-disable consistent-return */
// /* eslint-disable default-case */
// import React from "react";
// import { withRouter } from "react-router";
// import { Table } from "react-bootstrap";
// import FeatherIcon from "feather-icons-react";
// import Card from "@components/cards/Card";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import ClipLoader from "react-spinners/ClipLoader";
// import {
// 	Input,
// 	Dropdown,
// 	DropdownItem,
// 	DropdownToggle,
// 	DropdownMenu,
// } from "reactstrap";
// import NotificationsPane from "./NotificationsPane";
// import { PAGES_URL } from "../../../router/routes";
// import { srv } from "../../../srvConfig";
// import { setActivityData } from "../../../redux/activitySlice";
// import { setNotOkayData } from "../../../redux/notOkaySlice";
// import cssModule from "./viewAll.module.css";

// const OkayFilter = (props) => {
// 	const { history } = props;

// 	const [loading, setLoading] = React.useState(false);
// 	const [filteredUsers, setFilteredUsers] = React.useState([]);
// 	const [firstNameInput, setFirstName] = React.useState("");
// 	const [lastNameInput, setLastName] = React.useState("");
// 	const [emailInput, setEmailInput] = React.useState("");
// 	const [dropdownToggle, setDropdownToggle] = React.useState(false);
// 	const dispatch = useDispatch();
// 	console.log(props);

// 	const users = useSelector((state) => {
// 		switch (props.match.path) {
// 			case "/not-ok":
// 				return state.notOkaySlice.usersNotOkay;

// 			case "/ok":
// 				return state.notOkaySlice.usersOkay;

// 			case "/better-than-ok":
// 				return state.notOkaySlice.usersBetterThanOk;
// 		}
// 	});

// 	console.log(users);

// 	//   React.useEffect(() => {
// 	//     axios
// 	//       .get(`${srv}/extractAndCompileSchool`, { type: "SUPER_ADMIN" })
// 	//       .then((res) => {
// 	//         console.log(res);
// 	//         setUsers(() => res.data.compiledData);
// 	//         // eslint-disable-next-line no-unused-vars
// 	//         const notOkayUsers = res.data.compiledData.filter(
// 	//           (user) => user.ok === "NOT_OK"
// 	//         );
// 	//         console.log();
// 	//         dispatch(setNotOkayData(notOkayUsers));
// 	//         setLoading(false);
// 	//       });
// 	//   }, []);

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
// 		idx
// 	) {
// 		const payload = {
// 			entityId: entityId,
// 			firstName: firstName,
// 			lastName: lastName,
// 			age: age,
// 			email: email,
// 			placement: placement,
// 			placementMonths: months,
// 			score: recentScore,
// 			scoreArr: recentScores,
// 			iokData: iokData,
// 		};
// 		dispatch(setActivityData(payload));
// 		history.push(`${PAGES_URL.USERS}/${idx}`);
// 	}

// 	React.useEffect(() => {
// 		const mutatedUsers = users.filter((user) =>
// 			user.firstName.toLowerCase().includes(firstNameInput.toLowerCase())
// 		);

// 		setFilteredUsers(mutatedUsers);
// 	}, [firstNameInput, users]);

// 	React.useEffect(() => {
// 		const mutatedUsers = users.filter((user) =>
// 			user.lastName.toLowerCase().includes(lastNameInput.toLowerCase())
// 		);
// 		setFilteredUsers(mutatedUsers);
// 	}, [lastNameInput, users]);

// 	React.useEffect(() => {
// 		const mutatedUsers = users.filter((user) =>
// 			user.email.toLowerCase().includes(emailInput.toLowerCase())
// 		);
// 		setFilteredUsers(mutatedUsers);
// 	}, [emailInput, users]);

// 	return (
// 		<>
// 			<div className="container-fluid px-5 py-4">
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

// 					{/* <Dropdown
//             className="form-group"
//             isOpen={dropdownToggle}
//             toggle={() => setDropdownToggle(!dropdownToggle)}
//           >
//             <DropdownToggle className={cssModule.dropdown}>
//               <h5 className={cssModule.dropdownDesc}>Assigned counselor...</h5>
//             </DropdownToggle>
//             <DropdownMenu className={cssModule.dropdownMenu}>
//               <DropdownItem className={cssModule.dropdownItem}>
//                 <h5 className={cssModule.dropdownDesc}>Albert Counselor</h5>
//               </DropdownItem>
//             </DropdownMenu>
//           </Dropdown> */}
// 				</div>

// 				<div className="row">
// 					<div className="col-md-9">
// 						<Card>
// 							{loading ? (
// 								<div
// 									style={{
// 										margin: "auto",
// 										textAlign: "center",
// 									}}
// 								>
// 									<ClipLoader
// 										color={"green"}
// 										loading={true}
// 										size={300}
// 									/>
// 									<h5>Fetching data...</h5>
// 								</div>
// 							) : (
// 								<Table striped bordered hover size="sm">
// 									<thead>
// 										<tr>
// 											<th></th>
// 											<th>Name</th>
// 											<th>Grade</th>
// 											<th>Email</th>
// 											<th>Username</th>
// 											<th>Assigned Counselor</th>
// 										</tr>
// 									</thead>
// 									<tbody>
// 										{/* eslint-disable-next-line array-callback-return */}
// 										{filteredUsers.length > 0
// 											? filteredUsers.map((user, idx) => {
// 													let fillColor;
// 													if (user.ok === "NOT_OK") {
// 														fillColor = "#D84747";
// 													}
// 													if (user.ok === "OK") {
// 														fillColor = "#EAA353";
// 													}
// 													if (
// 														user.ok ===
// 														"BETTER_THAN_OK"
// 													) {
// 														fillColor = "#66A858";
// 													} else if (
// 														user.ok === null
// 													) {
// 														fillColor = "#9e9e9e";
// 													}
// 													return (
// 														<tr
// 															key={idx}
// 															className="pointer"
// 															onClick={() =>
// 																handleClick(
// 																	user.entityId,
// 																	user.firstName,
// 																	user.lastName,
// 																	user.age,
// 																	user.email,
// 																	user.placement,
// 																	user.placementMonths,
// 																	user.recentScore,
// 																	user.recentScores,
// 																	user.iokData,
// 																	user.grade,
// 																	idx
// 																)
// 															}
// 														>
// 															<td>
// 																<FeatherIcon
// 																	icon="circle"
// 																	size="11"
// 																	// eslint-disable-next-line consistent-return
// 																	fill={
// 																		fillColor
// 																	}
// 																	stroke="1"
// 																/>
// 															</td>
// 															<td>{`${user.firstName} ${user.lastName}`}</td>
// 															<td>
// 																{user.grade}
// 															</td>
// 															<td>
// 																{user.email}
// 															</td>
// 															<td>
// 																{user.nickName}
// 															</td>
// 															<td>
// 																{
// 																	user.assignedAgent
// 																}
// 															</td>
// 														</tr>
// 													);
// 											  })
// 											: users.map((user, idx) => {
// 													let fillColor;
// 													if (user.ok === "NOT_OK") {
// 														fillColor = "#D84747";
// 													}
// 													if (user.ok === "OK") {
// 														fillColor = "#EAA353";
// 													}
// 													if (
// 														user.ok ===
// 														"BETTER_THAN_OK"
// 													) {
// 														fillColor = "#66A858";
// 													} else if (
// 														user.ok === null
// 													) {
// 														fillColor = "#9e9e9e";
// 													}
// 													return (
// 														<tr
// 															key={idx}
// 															className="pointer"
// 															onClick={() =>
// 																handleClick(
// 																	user.entityId,
// 																	user.firstName,
// 																	user.lastName,
// 																	user.age,
// 																	user.email,
// 																	user.placement,
// 																	user.placementMonths,
// 																	user.recentScore,
// 																	user.recentScores,
// 																	user.iokData,
// 																	user.grade,
// 																	idx
// 																)
// 															}
// 														>
// 															<td>
// 																<FeatherIcon
// 																	icon="circle"
// 																	size="11"
// 																	// eslint-disable-next-line consistent-return
// 																	fill={
// 																		fillColor
// 																	}
// 																	stroke="1"
// 																/>
// 															</td>
// 															<td>{`${user.firstName} ${user.lastName}`}</td>
// 															<td>
// 																{user.grade}
// 															</td>
// 															<td>
// 																{user.email}
// 															</td>
// 															<td>
// 																{user.nickName}
// 															</td>
// 															<td>
// 																{
// 																	user.assignedAgent
// 																}
// 															</td>
// 														</tr>
// 													);
// 											  })}
// 									</tbody>
// 								</Table>
// 							)}
// 						</Card>
// 					</div>
// 					<div className="col-md-3">
// 						<NotificationsPane />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default withRouter(OkayFilter);
