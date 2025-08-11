/** @format */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,

	// eslint-disable-next-line no-unused-vars
	Spinner,
} from "reactstrap";
import _ from "lodash";
import cssModule from "./lineChartCSS.module.css";

function OkLineChart({ iokData }) {
	// const last7Days = iokData.filter((dta) => dta.method === "iok").slice(-7);
	// const last30Days = iokData.filter((dta) => dta.method === "iok").slice(-30);
	const [choice, setChoice] = React.useState("This Week");
	const [dropdownToggle, setDropdownToggle] = React.useState(false);

	// const data7 = last7Days.map((dataEntry) => {
	//   const timeStamp = dataEntry.timestamp;
	//   const date = new Date(timeStamp * 1000);

	//   const fullDate = date.toLocaleDateString("en-US");
	//   const obj = {
	//     name: fullDate,
	//     score: dataEntry.status,
	//     amt: dataEntry.status,
	//   };
	//   return obj;
	// });
	console.log(iokData);
	function computeDays(numDays) {
		const obj = {};
		const resultArr = [];
		let reference;
		if (iokData.length > 0) {
			if (iokData.length < numDays) {
				reference = iokData.length;
			} else if (iokData.length > numDays) {
				reference = numDays;
			} else {
				reference = 0;
			}
			console.log(reference);
			for (let i = iokData.length - 1; reference > 0; i--) {
				if (iokData[i]) {
					const dateTime = new Date(iokData[i].timestamp * 1000);
					const fullDate = dateTime.toLocaleDateString("en-US");
					if (!(fullDate in obj)) {
						obj[fullDate] = [];
						reference--;
					}
				} else {
					reference--;
				}
			}

			// eslint-disable-next-line guard-for-in
			for (const key in obj) {
				// const holdingArr = [];
				for (let i = 0; i < iokData.length; i++) {
					const dateTime = new Date(iokData[i].timestamp * 1000);
					const fullDate = dateTime.toLocaleDateString("en-US");
					if (key === fullDate) {
						obj[fullDate].push(iokData[i].status);

						// holdingArr.push(iokData[i].status);
						// obj[key] = {
						//   name: key,
						//   score: holdingArr.reduce((a, b) => a + b, 0) / holdingArr.length,
						//   amt: holdingArr.reduce((a, b) => a + b, 0) / holdingArr.length,
						// };
					}
				}
			}
		}
		for (const key in obj) {
			obj[key] = obj[key].reduce((a, b) => a + b, 0) / obj[key].length;
			obj[key] = obj[key].toFixed(2);
		}

		for (const key in obj) {
			obj[key] = {
				name: key,
				score: obj[key],
				amt: obj[key],
			};
		}
		for (const key in obj) {
			resultArr.push(obj[key]);
		}
		return resultArr.reverse();
	}

	// const data30 = last30Days.map((dataEntry) => {
	//   const timeStamp = dataEntry.timestamp;
	//   const date = new Date(timeStamp * 1000);
	//   // eslint-disable-next-line no-unused-vars
	//   const day = date.toLocaleString("en-US", { weekday: "short" });
	//   const fullDate = date.toLocaleDateString("en-US");
	//   const obj = {
	//     name: fullDate,
	//     score: dataEntry.score,
	//     amt: dataEntry.score,
	//   };
	//   return obj;
	// });

	// eslint-disable-next-line consistent-return
	function returnData(key) {
		// eslint-disable-next-line default-case
		switch (key) {
			case "This Week":
				return computeDays(7);
			case "This Month":
				return computeDays(31);
		}
	}

	// eslint-disable-next-line no-unused-vars

	return (
		<div className={cssModule.container}>
			<div className={cssModule.header}>
				<h5 className={cssModule.headline}>Am I Ok Score</h5>
				<Dropdown
					className="form-group"
					isOpen={dropdownToggle}
					toggle={() => setDropdownToggle(!dropdownToggle)}
				>
					<DropdownToggle className={cssModule.dropdown} caret>
						{choice}
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem
							className={cssModule.dropdown}
							key={_.uniqueId()}
							onClick={() => setChoice("This Week")}
						>
							This Week
						</DropdownItem>
						<DropdownItem
							className={cssModule.dropdown}
							key={cssModule}
							onClick={() => setChoice("This Month")}
						>
							This Month
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>

			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={returnData(choice)}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis type="number" domain={[-100, 100]} />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="pv"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					<Line type="monotone" dataKey="score" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default OkLineChart;
