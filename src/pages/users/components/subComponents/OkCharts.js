/** @format */
/* eslint-disable array-callback-return */

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import _ from "lodash";
import chartCSS from "./chartCSS.module.css";

function OkCharts({ score, scoreArr }) {
	const parsedScores = JSON.parse(scoreArr) || [];

	// negative value test below
	// parsedScores[0] = -20;
	const orange = "rgba(230, 126, 61)";
	const red = "rgba(224, 84, 79)";
	const green = "rgba(153, 201, 99)";
	return (
		<div className={chartCSS.container}>
			<div className={chartCSS.descriptionContainer}>
				<h5 className={chartCSS.descriptionHeadline}>"Am I OK Score"</h5>
				<h6 className={chartCSS.descriptionText}>
					{`Your student scored an average of ${score} on our grading scale.`}
				</h6>
				<h1 className={chartCSS.score}>{score}</h1>
			</div>
			<div className={chartCSS.vl} />
			{parsedScores.map((sco, index) => {
				let descriptor;
				let pathColor = null;
				if (sco < 25 && sco > 0) {
					pathColor = orange;
				} else if (sco >= 25) {
					pathColor = green;
				} else if (sco < 0) {
					pathColor = red;
				}

				// eslint-disable-next-line default-case
				switch (index) {
					case 0:
						// eslint-disable-next-line no-unused-vars
						descriptor = "School";
						break;
					case 1:
						// eslint-disable-next-line no-unused-vars
						descriptor = "Family";
						break;
					case 2:
						// eslint-disable-next-line no-unused-vars
						descriptor = "Social";
						break;
					case 3:
						// eslint-disable-next-line no-unused-vars
						descriptor = "Other";
						break;
				}

				return (
					<div key={_.uniqueId()} className={chartCSS.circleContainer}>
						<h4 className={chartCSS.descriptor}>{descriptor}</h4>
						<CircularProgressbar
							strokeWidth={12}
							value={sco < 0 ? Math.abs(sco) : sco}
							text={`${sco}`}
							counterClockwise={sco < 0}
							styles={buildStyles({
								// Rotation of path and trail, in number of turns (0-1)
								rotation: 0,

								// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
								strokeLinecap: "butt",

								// Text size
								textSize: "16px",

								// How long animation takes to go from one percentage to another, in seconds
								pathTransitionDuration: 0.5,

								// Can specify path transition in more detail, or remove it entirely
								// pathTransition: 'none',

								// Colors
								pathColor,
								textColor: "#f88",
								trailColor: "#d6d6d6",
								backgroundColor: "#3e98c7",
							})}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default OkCharts;
