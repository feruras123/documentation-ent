/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Chart from "react-apexcharts";

function SingleSpiral() {
	const thing = {
		series: [50],
		options: {
			chart: {
				height: "100%",
				width: "100%",
				type: "radialBar",
			},
			plotOptions: {
				radialBar: {
					hollow: {
						size: "70%",
					},
					dataLabels: {
						name: {
							fontSize: "50",
							show: true,
						},
						value: {
							show: false,
						},
					},
				},
			},
			labels: [50],
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
	};
	return (
		<Chart
			options={thing.options}
			series={thing.series}
			type="radialBar"
			height={150}
		/>
	);
}

export default SingleSpiral;
