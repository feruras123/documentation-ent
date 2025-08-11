/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";

function LineChart({ data }) {
	const thing = {
		series: [
			{
				name: "AM I OK Scores",
				data,
			},
		],
		options: {
			chart: {
				height: 350,
				type: "line",
				toolbar: {
					show: false,
				},
			},
			colors: ["#000"],
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [1, 1, 1],
			},

			grid: {
				row: {
					opacity: 1,
				},
			},

			xaxis: {
				categories: [
					"Friday",
					"Saturday",
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
				],
			},
			markers: {
				size: 5,
				colors: "green",
				fillOpacity: 1,
				discrete: [],
				shape: "circle",
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: undefined,
				onDblClick: undefined,
				showNullDataPoints: true,
				hover: {
					size: undefined,
					sizeOffset: 3,
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
			type="line"
			height="100%"
		/>
	);
}

export default LineChart;
