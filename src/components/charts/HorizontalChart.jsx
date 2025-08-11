/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";

function HorizontalChart({ title, labels, values, color }) {
	const thing = {
		options: {
			chart: {
				id: "basic-bar",
				height: "100%",
				width: "100%",
				toolbar: {
					show: false,
				},
			},
			xaxis: {
				categories: labels,
				labels: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: "100%",
					distributed: true,
					dataLabels: {
						position: "top",
					},
				},
			},
			grid: {
				show: false,
			},
			title: {
				text: title,
				align: "left",
			},

			legend: {
				show: false,
			},
			stroke: {
				width: 0.2,
				colors: ["#000"],
			},
			dataLabels: {
				enabled: true,
				textAnchor: "start",
				offsetX: 15,
				style: {
					fontSize: "11px",
					colors: ["#000"],
					fontFamily: "Raleway, sans-serif",
					fontWeight: 500,
				},
			},
			colors:
				color == "success"
					? [
							"#72930e",
							"#799d0f",
							"#86ac11",
							"#9ac713",
							"#addf16",
							"#addf16",
							"#addf16",
							"#addf16",
						]
					: [
							"#ee952f",
							"#ea9a3f",
							"#e89f4c",
							"#ECA656",
							"#eaab64",
							"#eaab64",
							"#eaab64",
							"#eaab64",
						],
			responsive: [
				{
					breakpoint: 600,
					options: {
						chart: {
							width: 350,
						},
					},
				},
			],
		},
		series: [
			{
				data: values,
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

export default HorizontalChart;
