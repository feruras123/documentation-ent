/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";

function MultiBar({ title, commentsArr, postsArr }) {
	const thing = {
		series: [
			{
				name: "# of Posts",
				type: "column",
				data: postsArr,
			},
			{
				name: "# of Comments",
				type: "column",
				data: commentsArr,
			},
		],
		options: {
			chart: {
				height: "100%",
				width: "100%",
				type: "line",
				stacked: false,
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [1, 1, 4],
			},
			title: {
				text: title,
				align: "left",
				show: true,
			},
			xaxis: {
				categories: [
					"Deal With It!",
					"Speak Up!",
					"Whats Up?",
					"I Wonder Game",
					"Happiness Coach",
				],
			},
			yaxis: [
				{
					axisTicks: {
						show: true,
					},
					tooltip: {
						enabled: true,
					},
				},
			],
			tooltip: {
				fixed: {
					enabled: true,
					position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
					offsetY: 30,
					offsetX: 60,
				},
			},
			legend: {
				position: "right",
				offsetY: 60,
				offsetX: -30,
				horizontalAlign: "right",
			},
			responsive: [
				{
					breakpoint: 600,
					options: {
						chart: {
							height: 200,
							width: 300,
						},
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
			type="line"
			height={250}
		/>
	);
}

export default MultiBar;
