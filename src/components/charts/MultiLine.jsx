/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";

function MultiLine({ title, data, desc }) {
	const thing = {
		series: data,
		options: {
			chart: {
				type: "line",
				width: "50%",
				stacked: false,
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [1, 1, 1],
			},
			title: {
				text: title,
				align: "left",
				offsetX: 10,
			},
			xaxis: {
				categories: desc,
			},
			yaxis: [
				{
					axisTicks: {
						show: true,
					},
					decimalsInFloat: 0,
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
				offsetX: -60,
				width: 200,
				fontFamily: "Raleway, sans-serif",
				horizontalAlign: "stacked",
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
			type="line"
			height="100%"
		/>
	);
}

export default MultiLine;
