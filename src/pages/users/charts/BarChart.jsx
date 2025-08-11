/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";

function BarChart({ title, commentsArr, postsArr }) {
	const thing = {
		series: [
			{
				data: [44, 55, 41, 64, 22, 43, 34, 33, 23, 76, 55, 44],
			},
			{
				data: [53, 32, 33, 52, 13, 44, 32, 11, 55, 44, 32, 67],
			},
		],
		options: {
			chart: {
				type: "bar",
				height: 350,
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "20%",

					dataLabels: {
						position: "top",
					},
				},
			},
			colors: ["#444", "#000"],
			legend: {
				show: true,
				floating: true,
				fontSize: "10",
				position: "top",
				offsetX: 500,
				offsetY: -5,
				labels: {
					useSeriesColors: true,
				},
			},
			dataLabels: {
				enabled: false,
				offsetX: -6,
				style: {
					fontSize: "12px",
					colors: ["#fff"],
				},
			},
			stroke: {
				show: true,
				width: 1,
				colors: ["#fff"],
			},
			tooltip: {
				shared: true,
				intersect: false,
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],
			},
		},
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

export default BarChart;
