/** @format */

import React from "react";
import { connect } from "react-redux";
// import { profile } from '@assets/images/images';
import FeatherIcon from "feather-icons-react";
import ScoreComponent from "../../components/charts/CircularProgressbar";
import LineChart from "./charts/LineChart";
import Messaging from "./Messaging";
import BarChart from "./charts/BarChart";

function UserActivity(props) {
	const { fetching, user, Index } = props;
	const IndexData = JSON.parse(Index.score);

	return (
		<>
			{!fetching && user ? (
				<div className=" d-flex flex-column px-md-3 px-lg-0">
					<div className="row ">
						<div className="col-md-8 py-">
							<div className="d-flex align-items-center py-2">
								{/* <img src={''}
                  className="avatar-xl me-2 avatar-bg"
                  alt=""
                /> */}
								<div>
									<h6 className="display-5">{user.name}, 15</h6>
									<p>
										{user.grade &&
											`Grade ${user.grade.reference}, ${user.grade.name}`}
										,{" "}
									</p>
								</div>
							</div>
							<div className="  shadow rounded-20    p-3">
								<div className="row align-items-center">
									<div className="col-md-3 auth-section-right">
										<p className="fw-bold small">"Am I Okay" Score</p>
										<p className="x-small fw-normal text-dark-75">
											Your student scored an average of X on our grading scale
										</p>
										<p className="display-4 fw-normal text-center text-danger">
											{Index && Index.value}
										</p>
									</div>
									<div className="col-md-9">
										<div className="row ">
											{Index &&
												IndexData.map((data, idx) => (
													<div key={idx} className="col-6 col-lg-3">
														<ScoreComponent counter={idx} data={data} />
													</div>
												))}
										</div>
									</div>
								</div>
							</div>
							<div className="shadow rounded-20 p-3  my-3  ">
								<div className="d-flex align-items-center">
									<div className="fw-bold ps-3 pe-3 x-small">
										"Am I OK" Scores
									</div>

									<select
										name=""
										id=""
										className="rounded-20 ps-2 pe-4 x-small"
									>
										<option value="">This week</option>
										<option value="">Last week</option>
										<option value="">This month</option>
										<option value="">Last month</option>
									</select>
									<div className="d-flex align-items-center ms-auto pointer">
										<FeatherIcon
											icon="more-horizontal"
											style={{ strokeWidth: "1px" }}
											size={25}
										/>
									</div>
								</div>
								<LineChart
									data={[100, 32, -60, -33, 74, 22, -100]}
									desc={["sun", "mon", "tue", "wed", "thu", "fri", "sat"]}
								/>
							</div>
							<div className="shadow rounded-20 p-3 my-3  ">
								<div className="d-flex align-items-center">
									<div className="fw-bold ps-3 pe-3 x-small">
										"Am I OK" Scores
									</div>

									<select
										name=""
										id=""
										className="rounded-20 ps-2 pe-4 x-small"
									>
										<option value="">This week</option>
										<option value="">Last week</option>
										<option value="">This month</option>
										<option value="">Last month</option>
									</select>
									<div className="d-flex align-items-center ms-auto pointer">
										<FeatherIcon
											icon="more-horizontal"
											style={{ strokeWidth: "1px" }}
											size={25}
										/>
									</div>
								</div>
								<BarChart
									data={[100, 32, -60, -33, 74, 22, -100]}
									desc={["sun", "mon", "tue", "wed", "thu", "fri", "sat"]}
								/>
							</div>
						</div>
						<div className="col-md-4">
							<Messaging />
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}

const mapStateToProps = (state) => ({
	fetching: state.users.fetching,
	user: state.users.entry,
	Index: state.users.entry.score,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(UserActivity);
