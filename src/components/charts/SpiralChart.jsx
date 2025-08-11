/** @format */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
// import useDeepCompareEffect from 'use-deep-compare-effect';

function SpiralChart({ title, engagement, data }) {
	const engagementState = useSelector((state) => state.engagementSlice);
	// eslint-disable-next-line no-unused-vars
	const [dta, setDta] = React.useState([0, 0, 0, 0]);

	// React.useEffect(() => {
	//   setDta((prev) => prev);
	// }, [data]);

	// useDeepCompareEffect(() => {
	//   const holdingArr = [];
	//   if (engagement) {
	//     if (
	//       engagement.iok === 0 &&
	//       engagement.dealWithit === 0 &&
	//       engagement.speakUp === 0 &&
	//       engagement.whatsUp === 0
	//     ) {
	//       setDta([0, 0, 0, 0]);
	//     } else if (
	//       engagement.iok !== 0 &&
	//       engagement.dealWithit !== 0 &&
	//       engagement.speakUp !== 0 &&
	//       engagement.whatsUp !== 0
	//     ) {
	//       for (const key in engagement) {
	//         holdingArr.push(engagement[key]);
	//       }
	//       setDta(holdingArr);
	//     } else if (dta[0] === 0 && dta[1] === 0 && dta[2] === 0 && dta[3] === 0) {
	//       for (const key in engagementState) {
	//         holdingArr.push(engagement[key]);
	//       }
	//       setDta(holdingArr);
	//     }
	//   } else {
	//     setDta(data);
	//   }
	// }, [engagementState, data]);

	const thing = {
		series: dta,
		options: {
			chart: {
				type: "radialBar",
			},

			plotOptions: {
				radialBar: {
					offsetY: 0,
					offsetX: -50,
					startAngle: 0,
					endAngle: 360,
					hollow: {
						margin: 5,
						size: "30%",
						background: "transparent",
						image: undefined,
					},
					dataLabels: {
						name: {
							title,
							show: false,
						},
						value: {
							show: false,
						},
					},
				},
			},
			colors: [
				"#182952",
				"#31406B",
				"#53608D",
				"#7680B0",
				"#8890C3",
				"#969ED1",
			],
			labels: ["Am I OK?", "Deal With It!", "Speak Up!", "Whats Up?"],
			legend: {
				show: true,
				floating: true,
				fontSize: "10",
				position: "right",
				offsetX: -10,
				offsetY: 20,
				labels: {
					useSeriesColors: true,
				},
				markers: {
					size: 0,
				},
				itemMargin: {
					vertical: 3,
				},
			},
			responsive: [
				{
					breakpoint: 600,
					options: {
						legend: {
							show: false,
						},
					},
				},
			],
		},
	};
	return (
		<Chart
			options={thing.options}
			series={thing.series}
			type="radialBar"
			height={250}
		/>
	);
}

export default SpiralChart;
