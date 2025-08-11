/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { profile } from '@assets/images/images';
import { fetchUser } from "@reduxes/actions/user";
import Loader from "@components/Loader";
import { InlineLabel } from "../../components/Label";
import Messaging from "./Messaging";

function UserProfile(props) {
	const { fetch, match, user, fetching } = props;
	console.log(match.params.id);
	useEffect(() => {
		fetch(match.params.id);
	}, []);
	if (fetching) {
		return <>Loading</>;
	}
	return (
		<>
			{!fetching && user ? (
				<div className="h-90 d-flex flex-column px-md-3 px-lg-0">
					<div className="row  ">
						<div className="col-md-2 py-2">
							<div className="d-flex flex-column shadow rounded-20  h-90  py-3">
								<div className="d-center mb-5  px-4">
									<img src={""} alt="" className="avatar-xxl avatar-bg" />
								</div>
								<div className="d-block mt-5 text-start fw-medium my-auto small px-4">
									<a className="d-block mb-3">Edit Profile</a>
									<a className="d-block mb-3">Email Preference</a>
									<a className="d-block mb-3">Notes</a>
								</div>
								<div className="mt-auto d-center  ">
									<label className="switch">
										<input type="checkbox" value="Active" />
										<span className="slider round" />
									</label>
								</div>
							</div>
						</div>
						<div className="col-md-6 p-3">
							<div className="d-flex flex-column shadow rounded-20  h-90  py-3">
								<div className=" mb-5  px-4 section-bottom">
									<h6 className="fw-normal">User Information</h6>
									<div className="p-3 mt-3 fw-normal small text-uppercase">
										<InlineLabel label="Name" data={user.name} />
										<InlineLabel
											label="Birth Date"
											data={user.kbro && user.kbro.birthday}
										/>
										<InlineLabel
											label="Phone Number"
											data={user.kbro && user.kbro.phone}
										/>
										<InlineLabel label="Email" data={user.email} />

										<InlineLabel
											label="Gender"
											data={user.kbro && user.kbro.gender}
										/>
										<InlineLabel
											label="Sexual Orientation"
											data={user.sexual_orientation.name}
										/>
										<InlineLabel label="Ethnicity" data={user.ethnicity.name} />
										<InlineLabel
											label="Assigned Counselor"
											data={user.counselor.name}
										/>
										<InlineLabel label="School" data={user.school.name} />
									</div>
								</div>
								<hr />
								<div className=" my-5  px-4 section-bottom">
									<h6 className="fw-normal">K'Bro Profile</h6>
									<div className="p-3 mt-3 fw-normal small text-uppercase">
										<InlineLabel
											label="Nickname"
											data={user.kbro && user.kbro.username}
										/>
										<InlineLabel
											label="Anonymous Nickname"
											data={user.kbro && user.kbro.nick_anonymous}
										/>
										<InlineLabel
											label="Registration Date"
											data={user.kbro && user.kbro.registration_date}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 p-3 ">
							<div className="d-flex mb-2">
								<div className="ms-auto">
									<span className=" x-small fw-normal">Export page</span>
								</div>
							</div>
							<Messaging />
						</div>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
}

const mapStateToProps = (state) => ({
	user: state.users.entry,
	fetching: state.users.fetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetch: (data) => dispatch(fetchUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
