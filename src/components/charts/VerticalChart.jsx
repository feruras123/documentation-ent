/** @format */

import React from "react";
import Chart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";

function VerticalChart({ title, iok, whatsUp, dealWithIt, speakUp }) {
	const amIok = iok.length || 0;
	const whtsUp = whatsUp.length || 0;
	const dealIt = dealWithIt.length || 0;
	const spkUp = speakUp.length || 0;

	const thing = {
		options: {
			chart: {
				id: "bar",
				width: "380%",
				toolbar: {
					show: false,
				},
			},
			xaxis: {
				categories: [
					"Am I OK?",
					"Deal With It!",
					"Speak Up!",
					"Whats Up?",
					"I wonder Game",
					"Hapiness Coach",
				],
			},
			yaxis: {
				tickAmount: 10,
			},

			grid: {
				show: true, // you can either change hear to disable all grids
				xaxis: {
					lines: {
						show: true, // or just here to disable only x axis grids
					},
				},
				yaxis: {
					lines: {
						show: true, // or just here to disable only y axis
					},
				},
			},
			legend: {
				show: false,
			},
			dataLabels: {
				enabled: false,
			},

			plotOptions: {
				bar: {
					distributed: true,
					horizontal: false,
					columnWidth: "30%",
				},
			},
			title: {
				text: title,
				align: "left",
				show: true,
			},
			colors: [
				"#182952",
				"#31406B",
				"#53608D",
				"#7680B0",
				"#8890C3",
				"#969ED1",
			],
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
		series: [
			{
				name: "series-1",
				data: [2000, 1432, 543, 445, 1234, 1877],
			},
		],
	};
	return (
		<Chart
			options={thing.options}
			series={thing.series}
			type="bar"
			height="100%"
		/>
	);
}

export default VerticalChart;
