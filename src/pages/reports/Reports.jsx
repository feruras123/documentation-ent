/** @format */

// /** @format */
// /* eslint-disable no-unused-vars */
// /* eslint-disable default-case */
// /* eslint-disable consistent-return */

// import React from "react";

// import Card from "@components/cards/Card";
// import MultiLine from "@components/charts/MultiLine";
// import SpiralChart from "@components/charts/SpiralChart";
// import BoxPlot from "@components/charts/BoxPlot";
// import axios from "axios";
// import moment from "moment";
// import { Button, Label, Input } from "reactstrap";
// import CircleLoader from "react-spinners/CircleLoader";
// import _ from "lodash";
// import exportFromJSON from "export-from-json";
// import { connect, useSelector } from "react-redux";
// import DatePick from "../auth/util/DatePick";
// import { srv } from "../../srvConfig";
// import LoginValidator from "../../utils/LoginValidator";
// import score from "../dashboard/components/util/score";
// import reportsCSS from "./reportsCSS.module.css";
// import LoadingModal from "../../utils/LoadingModal";
// import { socket } from "../../utils/socket";

// function Reports() {
// 	const socketID = useSelector((state) => state.socketIDSlice.socketID);
// 	const [loadingMessage, setLoadingMessage] = React.useState("");
// 	const [progressPercentage, setProgressPercentage] = React.useState(0);
// 	const [isLoading, setIsLoading] = React.useState(false);
// 	const [fileType, setFileType] = React.useState("xls");

// 	React.useEffect(() => {
// 		const token = localStorage.getItem("token");
// 		LoginValidator.verifyTokenNoRedirect(token);
// 	}, []);

// 	function convertToTimestamp(strDate) {
// 		const dt = Date.parse(strDate);
// 		return dt / 1000;
// 	}
// 	// eslint-disable-next-line no-unused-vars
// 	const [fromStartDate, setFromStartDate] = React.useState(new Date());
// 	// eslint-disable-next-line no-unused-vars
// 	const [toStartDate, setToStartDate] = React.useState(new Date());
// 	// eslint-disable-next-line no-unused-vars
// 	const [fromTimestamp, setFromTimestamp] = React.useState(
// 		convertToTimestamp(fromStartDate)
// 	);
// 	// eslint-disable-next-line no-unused-vars
// 	const [toTimestamp, setToTimestamp] = React.useState(
// 		convertToTimestamp(toStartDate)
// 	);

// 	const [engagement, setEngagement] = React.useState([]);
// 	const [forceReload, setForceReload] = React.useState("");
// 	const [totalUsers, setTotalUsers] = React.useState(0);
// 	const dateTime = new Date();
// 	const currentYear = dateTime.getFullYear();
// 	const currentWeek = moment().week();
// 	const currentMonth = dateTime.getMonth();
// 	const [multiLineDesc, setMultilineDesc] = React.useState(null);
// 	const [detailedEngagement, setDetailedEngagement] = React.useState({});
// 	const [isLoading2, setIsLoading2] = React.useState(false);
// 	const [multiLineOrientationData, setMultiLineOrientation] = React.useState(
// 		[]
// 	);
// 	console.log(engagement);
// 	const [multilineEthnic, setMultilineEthnic] = React.useState([]);

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

// 	function computeDate(timest) {
// 		const date = new Date(timest * 1000);
// 		const dateString = `${date.toLocaleDateString("en-US", {
// 			month: "numeric",
// 		})}-${date.toLocaleDateString("en-US", {
// 			day: "numeric",
// 		})}-${date.toLocaleDateString("en-US", { year: "numeric" })}`;
// 		return dateString;
// 	}

// 	socket.on("progress", (data) => {
// 		setLoadingMessage(data.operation);
// 		setProgressPercentage(data.percentage);
// 	});

// 	React.useEffect(() => {
// 		setFromTimestamp(() => convertToTimestamp(fromStartDate));
// 		setToTimestamp(() => convertToTimestamp(toStartDate));
// 	}, [fromStartDate, toStartDate]);

// 	const [iokDta, setData] = React.useState([]);

// 	const [multilineGenderData, setMultiLineGender] = React.useState([]);

// 	function handleDateRangeChange(e) {
// 		e.preventDefault();
// 		setIsLoading(true);
// 		setForceReload(_.uniqueId);
// 	}

// 	const EdUserOrg = localStorage.getItem("organization");
// 	const isSupervisingEntity = localStorage.getItem("isSupervisingEntity");
// 	let supervisedOrgs = localStorage.getItem("supervisedOrgs");
// 	if (isSupervisingEntity === "true") {
// 		supervisedOrgs = JSON.parse(JSON.stringify(supervisedOrgs));
// 	}

// 	function returnOrganizations(isSupervisor) {
// 		if (isSupervisor !== "undefined") {
// 			return supervisedOrgs;
// 		}
// 		if (isSupervisor === "undefined") {
// 			return EdUserOrg;
// 		}
// 	}

// 	function submitRequest() {
// 		console.log(socket.id);
// 		console.log(socketID);
// 		setIsLoading(true);
// 		setProgressPercentage(0);
// 		setLoadingMessage("Contacting Server");
// 		if (socketID) {
// 			axios
// 				.post(`${srv}/extractAndCompileSchool`, {
// 					organization: returnOrganizations(isSupervisingEntity),
// 					sid: socketID,
// 				})
// 				.then((res) => {
// 					const sixthGradeArr = [];
// 					const seventhGradeArr = [];
// 					const eighthGradeArr = [];
// 					const sundayArr = [];
// 					const mondayArr = [];
// 					const tuesdayArr = [];
// 					const wednesdayArr = [];
// 					const thursdayArr = [];
// 					const fridayArr = [];
// 					const saturdayArr = [];
// 					// eslint-disable-next-line prefer-const
// 					let dateRangeArr = [];
// 					const nullGender = [];
// 					const maleGender = [];
// 					const femaleGender = [];
// 					const nonGender = [];
// 					let maleIokByDate = [];
// 					let femaleIokByDate = [];
// 					let nonBinaryIokByDate = [];
// 					let notDisclosedIokByDate = [];
// 					let heteroIokByDate = [];
// 					let lgIokByDate = [];
// 					let notDisclPrefIokByDate = [];
// 					let whiteByDate = [];
// 					let blackByDate = [];
// 					let asianByDate = [];
// 					let hispanicByDate = [];
// 					let nativeByDate = [];
// 					let islanderByDate = [];
// 					let unknownByDate = [];

// 					const speakUpArr = [];
// 					const whatsUpArr = [];
// 					const dealWithItArr = [];
// 					const iokArr = [];

// 					const sexualOrientationNotAnswered = [];
// 					const sexualOrientationHetero = [];
// 					const sexualOrientationLG = [];

// 					for (let i = 0; i < res.data.compiledData.length; i++) {
// 						const { gender } = res.data.compiledData[i];
// 						const { sexualOrientation } = res.data.compiledData[i];
// 						// eslint-disable-next-line default-case
// 						switch (gender) {
// 							case null:
// 								nullGender.push(gender);
// 								break;
// 							case 1:
// 								maleGender.push(gender);
// 								break;
// 							case 2:
// 								femaleGender.push(gender);
// 								break;
// 							case 6:
// 								nonGender.push(gender);
// 								break;
// 						}
// 						// eslint-disable-next-line default-case
// 						switch (sexualOrientation) {
// 							case null:
// 								sexualOrientationNotAnswered.push(
// 									sexualOrientation
// 								);
// 								break;
// 							case "H":
// 								sexualOrientationHetero.push(sexualOrientation);
// 								break;
// 							case "L":
// 								sexualOrientationLG.push(sexualOrientation);
// 								break;
// 						}

// 						for (
// 							let x = 0;
// 							x < res.data.compiledData[i].iokData.length;
// 							x++
// 						) {
// 							const iokData = res.data.compiledData[i].iokData[x];
// 							const date = new Date(iokData.timestamp * 1000);
// 							const iokTimestamp = iokData.timestamp;
// 							const day = date.getDay();
// 							const year = date.getFullYear();
// 							const month = date.getMonth();
// 							const week = moment(date).week();

// 							// eslint-disable-next-line default-case
// 							if (
// 								iokTimestamp >= fromTimestamp &&
// 								iokTimestamp <= toTimestamp
// 							) {
// 								iokArr.push(iokData);
// 								dateRangeArr.push(iokData.timestamp);
// 								// eslint-disable-next-line default-case
// 							} else if (
// 								week === currentWeek &&
// 								iokData.method === "speak"
// 							) {
// 								speakUpArr.push(iokData);
// 							} else if (
// 								week === currentWeek &&
// 								iokData.method === "deal"
// 							) {
// 								dealWithItArr.push(iokData);
// 							} else if (
// 								week === currentWeek &&
// 								iokData.method === "whats"
// 							) {
// 								whatsUpArr.push(iokData);
// 							}
// 						}
// 					}

// 					dateRangeArr = dateRangeArr.sort((a, b) => a - b);
// 					dateRangeArr = dateRangeArr.map((d) => computeDate(d));
// 					dateRangeArr = [...new Set(dateRangeArr)];

// 					for (let a = 0; a < dateRangeArr.length; a++) {
// 						let maleArr = [];
// 						let femaleArr = [];
// 						let nonBinaryArr = [];
// 						let notDisclosedArr = [];
// 						let heteroArr = [];
// 						let lgArr = [];
// 						let notDisclosedOrientationArr = [];
// 						let whiteArr = [];
// 						let blackArr = [];
// 						let asianArr = [];
// 						let hispanicArr = [];
// 						let islanderArr = [];
// 						let nativeArr = [];
// 						let unknownArr = [];

// 						for (let i = 0; i < res.data.compiledData.length; i++) {
// 							for (let x = 0; x < iokArr.length; x++) {
// 								if (
// 									res.data.compiledData[i].entityId ===
// 									iokArr[x].user_id
// 								) {
// 									const dt = computeDate(iokArr[x].timestamp);
// 									if (dateRangeArr[a] === dt) {
// 										switch (
// 											res.data.compiledData[i].ethnicity
// 										) {
// 											case 1:
// 												whiteArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 2:
// 												blackArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 3:
// 												asianArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 4:
// 												hispanicArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 5:
// 												islanderArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 6:
// 												nativeArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 9:
// 												unknownArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 										}

// 										// eslint-disable-next-line default-case
// 										switch (
// 											res.data.compiledData[i].gender
// 										) {
// 											case 1:
// 												maleArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 2:
// 												femaleArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case 6:
// 												nonBinaryArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case null:
// 												notDisclosedArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 										}
// 										// eslint-disable-next-line default-case
// 										switch (
// 											res.data.compiledData[i]
// 												.sexualOrientation
// 										) {
// 											case "H":
// 												heteroArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case "LG":
// 												lgArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 											case null:
// 												notDisclosedOrientationArr.push(
// 													Number(iokArr[x].status)
// 												);
// 												break;
// 										}
// 									}
// 								}
// 							}
// 						}

// 						maleArr =
// 							maleArr.reduce((o, b) => o + b, 0) / maleArr.length;
// 						femaleArr =
// 							femaleArr.reduce((o, b) => o + b, 0) /
// 							femaleArr.length;
// 						nonBinaryArr =
// 							nonBinaryArr.reduce((o, b) => o + b, 0) /
// 							nonBinaryArr.length;
// 						notDisclosedArr =
// 							notDisclosedArr.reduce((o, b) => o + b, 0) /
// 							notDisclosedArr.length;
// 						heteroArr =
// 							heteroArr.reduce((o, b) => o + b, 0) /
// 							heteroArr.length;
// 						lgArr = lgArr.reduce((o, b) => o + b, 0) / lgArr.length;
// 						notDisclosedOrientationArr =
// 							notDisclosedOrientationArr.reduce(
// 								(o, b) => o + b,
// 								0
// 							) / notDisclosedOrientationArr.length;

// 						whiteArr =
// 							whiteArr.reduce((o, b) => o + b, 0) /
// 							whiteArr.length;
// 						blackArr =
// 							blackArr.reduce((o, b) => o + b, 0) /
// 							blackArr.length;
// 						asianArr =
// 							asianArr.reduce((o, b) => o + b, 0) /
// 							asianArr.length;
// 						hispanicArr =
// 							hispanicArr.reduce((o, b) => o + b, 0) /
// 							hispanicArr.length;
// 						islanderArr =
// 							islanderArr.reduce((o, b) => o + b, 0) /
// 							islanderArr.length;
// 						nativeArr =
// 							nativeArr.reduce((o, b) => o + b, 0) /
// 							nativeArr.length;
// 						unknownArr =
// 							unknownArr.reduce((o, b) => o + b, 0) /
// 							unknownArr.length;

// 						!Number.isNaN(whiteArr)
// 							? whiteByDate.push(whiteArr)
// 							: whiteByDate.push(0);
// 						!Number.isNaN(blackArr)
// 							? blackByDate.push(blackArr)
// 							: blackByDate.push(0);
// 						!Number.isNaN(asianArr)
// 							? asianByDate.push(asianArr)
// 							: asianByDate.push(0);
// 						!Number.isNaN(hispanicArr)
// 							? hispanicByDate.push(hispanicArr)
// 							: hispanicByDate.push(0);
// 						!Number.isNaN(nativeArr)
// 							? nativeByDate.push(nativeArr)
// 							: nativeByDate.push(0);
// 						!Number.isNaN(islanderArr)
// 							? islanderByDate.push(islanderArr)
// 							: islanderByDate.push(0);
// 						!Number.isNaN(unknownArr)
// 							? unknownByDate.push(unknownArr)
// 							: unknownByDate.push(0);

// 						!Number.isNaN(maleArr)
// 							? maleIokByDate.push(maleArr)
// 							: maleIokByDate.push(0);
// 						!Number.isNaN(femaleArr)
// 							? femaleIokByDate.push(femaleArr)
// 							: femaleIokByDate.push(0);
// 						!Number.isNaN(nonBinaryArr)
// 							? nonBinaryIokByDate.push(nonBinaryArr)
// 							: nonBinaryIokByDate.push(0);
// 						!Number.isNaN(notDisclosedArr)
// 							? notDisclosedIokByDate.push(notDisclosedArr)
// 							: notDisclosedIokByDate.push(0);

// 						!Number.isNaN(heteroArr)
// 							? heteroIokByDate.push(heteroArr)
// 							: heteroIokByDate.push(0);
// 						!Number.isNaN(lgArr)
// 							? lgIokByDate.push(lgArr)
// 							: lgIokByDate.push(0);
// 						!Number.isNaN(notDisclosedOrientationArr)
// 							? notDisclPrefIokByDate.push(
// 									notDisclosedOrientationArr
// 							  )
// 							: notDisclPrefIokByDate.push(0);
// 					}

// 					heteroIokByDate = heteroIokByDate.map((number) =>
// 						Number(Math.round(number))
// 					);
// 					lgIokByDate = lgIokByDate.map((number) =>
// 						Number(Math.round(number))
// 					);
// 					notDisclPrefIokByDate = notDisclPrefIokByDate.map(
// 						(number) => Number(Math.round(number))
// 					);

// 					maleIokByDate = maleIokByDate.map((number) =>
// 						Number(Math.round(number))
// 					);
// 					femaleIokByDate = femaleIokByDate.map((number) =>
// 						Number(Math.round(number))
// 					);
// 					nonBinaryIokByDate = nonBinaryIokByDate.map((number) =>
// 						Number(Math.round(number))
// 					);
// 					notDisclosedIokByDate = notDisclosedIokByDate.map(
// 						(number) => Number(Math.round(number))
// 					);

// 					whiteByDate = whiteByDate.map((number) =>
// 						Number(Math.round(number))
// 					);

// 					blackByDate = blackByDate.map((number) =>
// 						Number(Math.round(number))
// 					);

// 					asianByDate = asianByDate.map((number) =>
// 						Number(Math.round(number))
// 					);

// 					hispanicByDate = hispanicByDate.map((number) =>
// 						Number(Math.round(number))
// 					);

// 					nativeByDate = nativeByDate.map((number) =>
// 						Number(Math.round(number))
// 					);

// 					islanderByDate = islanderByDate.map((number) =>
// 						Number(Math.round(number))
// 					);

// 					unknownByDate = unknownByDate.map((number) =>
// 						Number(Math.round(number))
// 					);

// 					const multilineEthnicData = [
// 						{
// 							name: "White",
// 							type: "line",
// 							data: whiteByDate,
// 						},
// 						{
// 							name: "Black or African American",
// 							type: "line",
// 							data: blackByDate,
// 						},
// 						{
// 							name: "Asian",
// 							type: "line",
// 							data: asianByDate,
// 						},
// 						{
// 							name: "American Indian or Alaska Native",
// 							type: "line",
// 							data: nativeByDate,
// 						},
// 						{
// 							name: "Native Hawaiian or Other Pacific Islander",
// 							type: "line",
// 							data: islanderByDate,
// 						},
// 						{
// 							name: "Hispanic",
// 							type: "line",
// 							data: hispanicByDate,
// 						},
// 						{
// 							name: "Unknown",
// 							type: "line",
// 							data: unknownByDate,
// 						},
// 					];

// 					const multilineGender = [
// 						{
// 							name: "Female",
// 							type: "line",
// 							data: maleIokByDate,
// 						},
// 						{
// 							name: "Male",
// 							type: "line",
// 							data: femaleIokByDate,
// 						},
// 						{
// 							name: "Non-Binary",
// 							type: "line",
// 							data: nonBinaryIokByDate,
// 						},
// 						{
// 							name: "Did not disclose",
// 							type: "line",
// 							data: notDisclosedIokByDate,
// 						},
// 					];
// 					const multilineOrient = [
// 						{
// 							name: "Hetero",
// 							type: "line",
// 							data: heteroIokByDate,
// 						},
// 						{
// 							name: "LGQBT+",
// 							type: "line",
// 							data: lgIokByDate,
// 						},
// 						{
// 							name: "Not Disclosed",
// 							type: "line",
// 							data: notDisclPrefIokByDate,
// 						},
// 					];
// 					setMultilineEthnic(multilineEthnicData);
// 					setMultiLineOrientation(multilineOrient);
// 					setMultiLineGender(multilineGender);
// 					setMultilineDesc((desc) => dateRangeArr);

// 					const dta = dateRangeArr.map((date) => ({
// 						x: date,
// 						y: [],
// 					}));

// 					for (let i = 0; i < dta.length; i++) {
// 						const obj = {
// 							x: dta[i].x,
// 							y: [],
// 						};
// 						for (let x = 0; x < res.data.compiledData.length; x++) {
// 							for (
// 								let y = 0;
// 								y < res.data.compiledData[x].iokData.length;
// 								y++
// 							) {
// 								if (
// 									computeDate(
// 										res.data.compiledData[x].iokData[y]
// 											.timestamp
// 									) === dta[i].x
// 								) {
// 									dta[i].y.push(
// 										res.data.compiledData[x].iokData[y]
// 									);
// 								}
// 							}
// 						}
// 					}

// 					for (let i = 0; i < dta.length; i++) {
// 						// eslint-disable-next-line no-self-assign
// 						dta[i].x = dta[i].x;
// 						dta[i].y = [
// 							score(dta[i].y).quant25,
// 							score(dta[i].y).max,
// 							score(dta[i].y).min,
// 							score(dta[i].y).quant75,
// 						];
// 					}

// 					setData(dta);
// 				})
// 				.then(() => {
// 					axios
// 						.post(`${srv}/filterEngagement`, {
// 							fromDate: fromStartDate,
// 							toDate: toStartDate,
// 							organization:
// 								returnOrganizations(isSupervisingEntity),
// 						})
// 						.then((r) => {
// 							const {
// 								iok,
// 								dealWithit,
// 								speakUp,
// 								whatsUp,
// 								granularData,
// 								totalUids,
// 							} = r.data;

// 							setEngagement(() => [
// 								iok,
// 								dealWithit,
// 								speakUp,
// 								whatsUp,
// 							]);
// 							setDetailedEngagement(() => granularData);
// 							setTotalUsers(() => totalUids);
// 						});
// 				});
// 		}
// 	}

// 	React.useEffect(() => {
// 		if (engagement.length === 4) {
// 			console.log(engagement);
// 			setIsLoading(false);
// 		}
// 	}, [engagement]);

// 	function handleExport(e) {
// 		setEngagement((prevVal) => prevVal);
// 		e.preventDefault();
// 		console.log(totalUsers);
// 		const data = [];
// 		const fileName = "download";
// 		const exportType = fileType;
// 		const dataObj = {
// 			iok: [],
// 			deal: 0,
// 			whats: 0,
// 			speak: 0,
// 		};

// 		for (let i = 0; i < iokDta.length; i++) {
// 			const obj = {
// 				date: iokDta[i].x,
// 				_75_Percentile: iokDta[i].y[0],
// 				max: iokDta[i].y[1],
// 				min: iokDta[i].y[2],
// 				_25_Percentile: iokDta[i].y[3],
// 				female: multilineGenderData[0].data[i],
// 				male: multilineGenderData[1].data[i],
// 				non_binary: multilineGenderData[2].data[i],
// 				gender_not_disclosed: multilineGenderData[3].data[i],
// 				hetero: multiLineOrientationData[0].data[i],
// 				LGQBT: multiLineOrientationData[1].data[i],
// 				orientation_not_disclosed: multiLineOrientationData[2].data[i],
// 				white: multilineEthnic[0].data[i],
// 				black: multilineEthnic[1].data[i],
// 				asian: multilineEthnic[2].data[i],
// 				native: multilineEthnic[3].data[i],
// 				islander: multilineEthnic[4].data[i],
// 				hispanic: multilineEthnic[5].data[i],
// 				unknown: multilineEthnic[6].data[i],
// 			};

// 			// for (let x = 0; x < detailedEngagement.length; x++) {
// 			//   if (detailedEngagement[x].date === iokDta[i].x) {
// 			//     // eslint-disable-next-line default-case
// 			//     switch (detailedEngagement[x].method) {
// 			//       case "iok":
// 			//         obj.user_engagement_iok += (1 * 100) / Number(totalUsers);
// 			//         break;
// 			//       case "speak":
// 			//         obj.user_engagement_speak_up += (1 * 100) / Number(totalUsers);
// 			//         break;
// 			//       case "deal":
// 			//         obj.user_engagement_deal_with_it +=
// 			//           (1 * 100) / Number(totalUsers);
// 			//         break;
// 			//       case "whats":
// 			//         obj.user_engagement_whats_up += (1 * 100) / Number(totalUsers);
// 			//         break;
// 			//     }
// 			//   }
// 			// }
// 			data.push(obj);
// 		}

// 		exportFromJSON({ data, fileName, exportType });
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
// 				<div className="d-flex">
// 					<p className="pl-5 pt-2 pr-3">Filter by Date Range :</p>
// 					<form
// 						onSubmit={(e) => handleDateRangeChange(e)}
// 						className="row"
// 					>
// 						<div className={reportsCSS.filterContainer}>
// 							<DatePick startSetter={setFromStartDate} />
// 							<DatePick startSetter={setToStartDate} />
// 							<Button
// 								onClick={submitRequest}
// 								disabled={isLoading}
// 								className={reportsCSS.btn}
// 								type="submit"
// 							>
// 								Select
// 							</Button>
// 						</div>
// 					</form>
// 					<div className="ml-auto ">
// 						{settings.uploadAndExport ? (
// 							<div>
// 								<div className={reportsCSS.checkboxContainer}>
// 									<Label className={reportsCSS.label}>
// 										<Input
// 											checked={fileType === "xls"}
// 											className={reportsCSS.checkbox}
// 											onClick={() => setFileType("xls")}
// 											type="checkbox"
// 										/>{" "}
// 										XLS
// 									</Label>
// 									<Label className={reportsCSS.label}>
// 										<Input
// 											checked={fileType === "xml"}
// 											onClick={() => setFileType("xml")}
// 											className={reportsCSS.checkbox}
// 											type="checkbox"
// 										/>{" "}
// 										XML
// 									</Label>
// 								</div>
// 								<Button
// 									disabled={isLoading}
// 									className={reportsCSS.exportButton}
// 									onClick={(e) => handleExport(e)}
// 								>
// 									Export Page
// 								</Button>
// 							</div>
// 						) : null}
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col-md-8">
// 						<Card className={reportsCSS.card}>
// 							<BoxPlot
// 								data={iokDta}
// 								title="“Am I OK?” Score - Overall"
// 							/>
// 						</Card>
// 						<Card className={reportsCSS.card}>
// 							<MultiLine
// 								data={multilineGenderData}
// 								desc={multiLineDesc}
// 								title="Gender Identity"
// 							/>
// 						</Card>
// 						<Card className={reportsCSS.card}>
// 							<MultiLine
// 								data={multilineEthnic}
// 								desc={multiLineDesc}
// 								title="Ethnicity"
// 							/>
// 						</Card>
// 						<Card className={reportsCSS.card}>
// 							<MultiLine
// 								data={multiLineOrientationData}
// 								desc={multiLineDesc}
// 								title="Sexual Orientation"
// 							/>
// 						</Card>
// 					</div>
// 					<div className="col-md-4">
// 						<Card className={reportsCSS.card}>
// 							<SpiralChart data={engagement} />
// 						</Card>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default connect(null, null)(Reports);
