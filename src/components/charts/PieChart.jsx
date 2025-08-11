/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";

// eslint-disable-next-line consistent-return
function PieChart({ data }) {
	const series = [];
	const labels = [];
	data.map((chart) => {
		series.push(chart.count);
		labels.push(chart.name);
	});
	const thing = {
		series,
		options: {
			chart: {
				type: "polarArea",
			},
			labels,
			fill: {
				opacity: 1,
			},
			stroke: {
				width: 3,
				colors: ["#fff"],
			},
			yaxis: {
				show: false,
			},
			dataLabels: {
				enabled: true,
				formatter(val, opt) {
					const valueFormatted = val.toFixed(0);
					console.log("Val formatted: ", valueFormatted);
					return `${valueFormatted}%`;
				},
				style: {
					colors: ["#fff"],
					fontSize: "10px",
					fontFamily: "Raleway, sans-serif",
					fontWeight: 500,
				},
				background: {
					enabled: true,
					foreColor: "#000",
					padding: 10,
					borderRadius: 0,
					borderWidth: 1,
					borderColor: "#000",
					opacity: 1,

					dropShadow: {
						enabled: false,
						top: 1,
						left: 1,
						blur: 1,
						color: "#fff",
						opacity: 1,
					},
				},
				dropShadow: {
					enabled: false,
					top: 1,
					left: 1,
					blur: 1,
					color: "#fff",
					opacity: 1,
				},
			},
			legend: {
				position: "bottom",
				width: "100%",
				fontFamily: "Raleway, sans-serif",
				horizontalAlign: "stacked",
			},
			plotOptions: {
				polarArea: {
					distributed: false,
					rings: {
						strokeWidth: 0,
					},
					spokes: {
						strokeWidth: 0,
					},
				},
			},
			theme: {
				monochrome: {
					enabled: true,
					shadeTo: "light",
					shadeIntensity: 0.6,
					color: "#191970",
				},
			},
			responsive: [
				{
					legend: {
						show: true,
					},
				},
			],
		},
	};

	return (
		<Chart
			className="text-uppercase"
			options={thing.options}
			series={thing.series}
			type="polarArea"
			height="100%"
		/>
	);
}

export default PieChart;
