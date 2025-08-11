/** @format */
/* eslint-disable array-callback-return */

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import _ from "lodash";

function ScoreComponent({ data, counter }) {
	const label = ["School", "Family", "Social", "Other"];
	const orange = "rgba(230, 126, 61)";
	const red = "rgba(224, 84, 79)";
	const green = "rgba(153, 201, 99)";
	let color;
	if (data < 25 && data > 0) {
		color = orange;
	} else if (data >= 25) {
		color = green;
	} else if (data < 0) {
		color = red;
	}

	return (
		<div className="d-flex flex-column justify-content-center ">
			<label htmlFor="" className="small fw-normal text-center ">
				{label[counter]}
			</label>
			<div style={{ width: 130, height: 130 }}>
				<CircularProgressbar
					strokeWidth={8}
					value={data < 0 ? Math.abs(data) : data}
					text={`${data}`}
					counterClockwise={data < 0}
					styles={buildStyles({
						rotation: 0,
						strokeLinecap: "butt",
						textSize: "35px",
						pathTransitionDuration: 0.5,
						pathColor: color,
						textColor: "#000",
						trailColor: "#d6d6d6",
						backgroundColor: "#3e98c7",
					})}
				/>
			</div>
		</div>
	);
}

export default ScoreComponent;
