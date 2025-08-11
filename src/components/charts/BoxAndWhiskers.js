/** @format */

import React from "react";
import { VictoryBoxPlot, VictoryChart } from "victory";

function BoxAndWhiskers({ data }) {
	const [dta, setDta] = React.useState(null);

	React.useEffect(() => {
		if (data) {
			setDta(data);
		}
	}, [data]);

	const test = [
		{
			x: " ",
			y: [0, 0, 0, 0],
		},
		{
			x: "Sunday",
			y: [38, 99, -39, 92],
		},
		{
			x: "Monday",
			y: [-82, 99, -106, 38],
		},
		{
			x: "Tuesday",
			y: [-78, 106, -96, 38],
		},
		{
			x: "Wednesday",
			y: [0, 0, 0, 0],
		},
		{
			x: "Thursday",
			y: [0, 0, 0, 0],
		},
	];

	console.log(dta);
	return (
		<VictoryChart>
			<VictoryBoxPlot
				domain={[-10, 10]}
				boxWidth={3}
				whiskerWidth={1}
				data={test}
			/>
		</VictoryChart>
	);
}

export default BoxAndWhiskers;
