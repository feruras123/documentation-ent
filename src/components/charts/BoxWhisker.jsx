/** @format */

import React from "react";
import { VictoryChart, VictoryBoxPlot } from "victory";

// const data = [
//     {quarter: 1, earnings: 13000},
//     {quarter: 2, earnings: 16500},
//     {quarter: 3, earnings: 14250},
//     {quarter: 4, earnings: 19000}
//   ];

class BoxWhisker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			amIOkData: props.amIOkData,
		};
		// console.log("props.pieData")
		// console.log(props.pieData)
	}

	render() {
		return (
			<VictoryChart domainPadding={20} width={450} height={200}>
				<VictoryBoxPlot
					style={{ data: { fill: "#000" } }}
					boxWidth={2}
					colorScale={[
						"#008f68",
						"#6DB65B",
						"#4AAE9B",
						"#EFBB35",
						"#EFBB35",
						"#EFBB35",
						"#EFBB35",
					]}
					data={this.state.amIOkData}
					// data={[
					//   { x: "Fri", y: [1, 2, 3, 5] },
					//   { x: "Sat", y: [3, 2, 8, 10] },
					//   { x: "Sun", y: [2, 8, 6, 5] },
					//   { x: "Mon", y: [1, 3, 2, 9] },
					//   { x: "Tue", y: [2, 8, 6, 5] },
					//   { x: "Wed", y: [2, 8, 6, 5] },
					//   { x: "Thur", y: [2, 8, 6, 5] },
					// ]}
				/>
			</VictoryChart>
		);
	}
}

//   ReactDOM.render(<App/>, mountNode);
export default BoxWhisker;
