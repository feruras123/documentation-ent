/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import PieChart from "@components/charts/PieChart";
import HorizontalChart from "@components/charts/HorizontalChart";
import MultiLine from "@components/charts/MultiLine";
import VerticalChart from "@components/charts/VerticalChart";
import BoxPlot from "@components/charts/BoxPlot";
import SpiralChart from "@components/charts/SpiralChart";
import FeatherIcon from "feather-icons-react";
import _ from "lodash";
import { StatCard } from "../../components/CardComponent";
import { fetchDashboard } from "@reduxes/actions/data";

function Overview(props) {
	const { fetch, auth, staticChartData, fetching } = props;
	// const { grades } = staticChartData;
	console.log(staticChartData);
	useEffect(() => {
		fetch({ district_id: auth.district_id });
	}, []);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};
	// const data = [
	//   {
	//     x: "Friday",
	//     y: [54, 66, 69, 75, 88, 54, 66, 69, 75, 88],
	//   },
	//   {
	//     x: "Saturday",
	//     y: [43, 65, 69, 76, 81],
	//   },
	//   {
	//     x: "Sunday",
	//     y: [31, 39, 45, 51, 59],
	//   },
	//   {
	//     x: "Monday",
	//     y: [39, 46, 55, 65, 71],
	//   },
	//   {
	//     x: "Tuesday",
	//     y: [29, 31, 35, 39, 44],
	//   },
	//   {
	//     x: "Wednessday",
	//     y: [41, 49, 58, 61, 67],
	//   },
	//   {
	//     x: "Thursday",
	//     y: [54, 59, 66, 71, 88],
	//   },
	// ];
	if (fetching && !staticChartData) {
		return <>Loading</>;
	}
	return (
		<div className="h-100 d-flex flex-column px-md-3 px-lg-0">
			<div className="d-flex">
				<div className="ms-auto pointer lead x-small fw-bold">Export Page</div>
			</div>
			<div className="row">
				<div className="col-md-8">
					<div className="row">
						{staticChartData &&
							staticChartData.grades.map((grade, idx) => (
								<div className="col-md-3 col-6" key={idx}>
									<StatCard title={grade.name} score={grade.count} />
								</div>
							))}
					</div>
					<div className="shadow rounded-20 p-3 pb-5 my-3 chart-lg ">
						<div className="d-flex align-items-center">
							<div className="fw-bold ps-3 pe-3 x-small">
								Am I OK?” Score - Overall
							</div>
							<select name="" id="" className="rounded-20 ps-2 pe-4 x-small">
								<option value="">This week</option>
								<option value="">Last week</option>
							</select>
							<div className="d-flex align-items-center ms-auto pointer">
								<FeatherIcon
									icon="more-horizontal"
									style={{ strokeWidth: "1px" }}
									size={25}
								/>
							</div>
						</div>
						{/* <BoxPlot data={data} /> */}
					</div>
					<div className="shadow rounded-20 p-3 pb-5 my-3 chart-sm ">
						<div className="d-flex align-items-center">
							<div className="fw-bold ps-3 pe-3 x-small">Ethnic Diversity</div>
							<select
								name=""
								id=""
								className="rounded-20 me-3 ps-2   pe-4 x-small"
							>
								<option value="">View All</option>
								<option value="">Last week</option>
							</select>
							<select name="" id="" className="rounded-20 ps-2 pe-4 x-small">
								<option value="">This week</option>
								<option value="">Last week</option>
							</select>
							<div className="d-flex align-items-center ms-auto pointer">
								<FeatherIcon
									icon="more-horizontal"
									style={{ strokeWidth: "1px" }}
									size={25}
								/>
							</div>
						</div>
						<MultiLine
							data={[
								{
									name: "African American (20.3%)",
									data: [43, 32, 32, 33, 34, 22, 43],
								},
								{
									name: "Hispanic (13.4%)",
									data: [32, 11, 83, 23, 13, 33, 23],
								},
								{
									name: "Pacific Islander (0.2%)",
									data: [34, 32, 12, 34, 23, 10, 37],
								},
								{
									name: "Caucasian (21.43%)",
									data: [43, 32, 32, 33, 34, 22, 43],
								},
								{
									name: "Asian (10.3%)",
									data: [43, 32, 32, 33, 34, 22, 43],
								},
								{
									name: "American Indian (32.6%) ",
									data: [43, 32, 32, 33, 34, 22, 43],
								},
								{
									name: "Fillipino (32.32%)",
									data: [43, 32, 32, 33, 34, 22, 43],
								},
							]}
							desc={["sun", "mon", "tue", "wed", "thu", "fri", "sat"]}
						/>
					</div>
					<div className="shadow rounded-20 p-3 my-3 pb-5 chart-sm ">
						<div className="d-flex align-items-center">
							<div className="fw-bold ps-3 pe-3 x-small">User Activities</div>
							<select name="" id="" className="rounded-20 ps-2 pe-4 x-small">
								<option value="">This week</option>
								<option value="">Last week</option>
							</select>
							<div className="d-flex align-items-center ms-auto pointer">
								<FeatherIcon
									icon="more-horizontal"
									style={{ strokeWidth: "1px" }}
									size={25}
								/>
							</div>
						</div>
						<VerticalChart
							iok={[32]}
							whatsUp={[124]}
							dealWithIt={[54]}
							speakUp={[90, 23, 54]}
						/>
					</div>
				</div>
				<div className="col-md-4">
					<div className="d-flex align-items-center">
						<div className="shadow rounded-20 p-3 pb-5 my-3 chart-sm shrink me-2">
							<div className="d-flex mb-3">
								<div className="fw-bold  x-small">Gender Identity</div>
								<div className="d-flex align-items-center ms-auto pointer">
									<FeatherIcon
										icon="more-horizontal"
										style={{ strokeWidth: "1px" }}
										size={25}
									/>
								</div>
							</div>
							<PieChart data={staticChartData && staticChartData.genders} />
						</div>
						<div className="shadow rounded-20 p-3  my-3 chart-sm shrink ">
							<div className="d-flex align-items-center mb-3 ">
								<div className="fw-bold x-small">Sexual Orientation</div>
								<div className="d-flex align-items-center ms-auto">
									<FeatherIcon icon="more-horizontal" size={20} fill="red" />
								</div>
							</div>
							<PieChart
								data={staticChartData && staticChartData.sexual_orientation}
							/>
						</div>
					</div>
					<div className="shadow rounded-20 pb-3 px-4 my-3 chart-xs ">
						<div className="d-flex align-items-center">
							<div className="fw-bold ps-3 pe-3 x-small">
								Trending Words- Positive
							</div>
							<select
								name=""
								id=""
								className="rounded-20 ps-2 py-0 pe-4 x-small"
							>
								<option value="">Most to Least</option>
								<option value="">Last week</option>
							</select>
							<div className="d-flex align-items-center ms-auto pointer">
								<FeatherIcon
									icon="more-horizontal"
									style={{ strokeWidth: "1px" }}
									size={25}
								/>
							</div>
						</div>
						<HorizontalChart
							values={[93, 87, 76, 69, 54, 41, 32, 20]}
							color="success"
							labels={[
								"Love",
								"Trust",
								"Happy",
								"Support",
								"Calm",
								"Worth",
								"Strong",
								"Positive",
							]}
						/>
					</div>
					<div className="shadow rounded-20 px-3 pb-3  my-3 chart-xs ">
						<div className="d-flex align-items-center">
							<div className="fw-bold ps-3 pe-3 x-small">
								Trending Words- Negative
							</div>
							<select
								name=""
								id=""
								className="rounded-20 ps-2 py-0 pe-4 x-small"
							>
								<option value="">Most to Least</option>
								<option value="">Last week</option>
							</select>
							<div className="d-flex align-items-center ms-auto pointer">
								<FeatherIcon
									icon="more-horizontal"
									style={{ strokeWidth: "1px" }}
									size={25}
								/>
							</div>
						</div>
						<HorizontalChart
							values={[93, 87, 76, 69, 54, 41, 32, 20]}
							color="danger"
							labels={[
								"Love",
								"Trust",
								"Happy",
								"Support",
								"Calm",
								"Worth",
								"Strong",
								"Positive",
							]}
						/>
					</div>
					<div className="shadow rounded-20 p-3 pb-5 my-3 chart-xs ">
						<div className="d-flex align-items-center">
							<div className="fw-bold ps-3 pe-3 x-small">
								Total % User Engagement
							</div>

							<div className="d-flex align-items-center ms-auto pointer">
								<FeatherIcon
									icon="more-horizontal"
									style={{ strokeWidth: "1px" }}
									size={25}
								/>
							</div>
						</div>
						<SpiralChart engagement="" data={[34, 67, 73, 43]} />
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth.user,
	staticChartData: state.data.staticChartData,
	fetching: state.data.fetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetch: (data) => dispatch(fetchDashboard(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
