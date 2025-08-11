/** @format */
/* eslint-disable no-useless-concat */
/* eslint-disable no-param-reassign */

import React from "react";
import Chart from "react-apexcharts";

function BoxPlot({ title, data, className }) {
	const thing = {
		series: [
			{
				data: [
					{
						x: "Monday",
						y: [32, -5],
					},
					{
						x: "Tuesday",
						y: [10, -63],
					},
					{
						x: "Wednessday",
						y: [21, 4],
					},
					{
						x: "Thursday",
						y: [54, 11],
					},
					{
						x: "Friday",
						y: [92, 10],
					},
					{
						x: "Saturday",
						y: [23, 10],
					},
					{
						x: "Sunday",
						y: [83, 41],
					},
				],
			},
			{
				data: [
					{
						x: "Monday",
						y: [32, -50],
					},
					{
						x: "Tuesday",
						y: [98, -36],
					},
					{
						x: "Wednessday",
						y: [42, -89],
					},
					{
						x: "Thursday",
						y: [74, -100],
					},
					{
						x: "Friday",
						y: [54, -60],
					},
					{
						x: "Saturday",
						y: [49, -78],
					},
					{
						x: "Sundau",
						y: [54, -11],
					},
				],
			},
		],

		options: {
			tooltip: {
				custom: ({ seriesIndex, dataPointIndex, w }) =>
					`${'<div class="arrow_box">' + "<span>"}
              <ul>
              <li style="list-style: none; margin-right: 40px; left: 0px;">75th Percentile: ${
								w.globals.seriesCandleC[seriesIndex][dataPointIndex]
							}</li>
              <li style="list-style: none;">max: ${
								w.globals.seriesCandleH[seriesIndex][dataPointIndex]
							}</li>
              <li style="list-style: none;">min: ${
								w.globals.seriesCandleL[seriesIndex][dataPointIndex]
							}</li>
              <li style="list-style: none;">25th Percentile: ${
								w.globals.seriesCandleO[seriesIndex][dataPointIndex]
							}</li>
              </ul>
            </span>` + "</div>",
			},
			colors: ["#72930e", "#ee952f"],
			chart: {
				type: "rangeBar",
				width: "100%",
				toolbar: {
					show: false,
				},
			},
			legend: {
				show: false,
			},
			stroke: {
				colors: ["#fff"],
				show: true,
				width: 1,
				dashArray: 1,
			},
			title: {
				text: title,
				align: "left",
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
			yaxis: {
				min: -150,
				max: 150,
				tickAmount: 5,
			},
			xaxis: {
				tickAmount: 7,
			},
			plotOptions: {
				bar: {
					columnWidth: "15%",
					borderRadius: 5,
				},
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
	};
	return (
		<Chart
			options={thing.options}
			series={thing.series}
			type="rangeBar"
			height="100%"
		/>
	);
}

export default BoxPlot;
