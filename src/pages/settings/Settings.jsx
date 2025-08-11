/** @format */
/* eslint-disable no-unused-vars */

import React from "react";
import { connect } from "react-redux";
// import { building, profile } from '@assets/images/images';
import Button from "@components/Buttons";
import { InputSearch } from "@components/Inputs";
import FeatherIcon from "feather-icons-react";

class Settings extends React.Component {
	render() {
		const { auth } = this.props;
		return (
			<div id="settings" className="container-fluid h-100">
				<div className="row">
					<div className="col-md-3">
						<div className="shadow rounded-20 h-100 p-3">
							<div className="d-flex ">
								<InputSearch
									placeholder="Filter by name or email"
									className="form-control-sm "
									type="text"
								/>
								<Button className="ms-2 btn__xs btn-primary">Add</Button>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="shadow rounded-20 h-100 p-3 ">
							<div className="d-flex align-items-center py-3">
								<img className="avatar-lg avatar-bg" src={""} alt="" />
								<div className=" ms-3">
									<h6 className=" mb-0" style={{ fontSize: "15px" }}>
										{`${auth.first_name} ${auth.last_name}`}
									</h6>
									<span
										className="text-dark me-1 fw-medium"
										style={{ fontSize: "13px" }}
									>
										Administrator access
									</span>{" "}
									<FeatherIcon icon="circle" size={7} />
									<span
										style={{ fontSize: "13px" }}
										className="ms-2 text-primary fw-medium"
									>
										{auth.email}
									</span>
								</div>
								<div className="ms-auto mt-0">
									<Button className="btn-light fw-medium btn__xs me-3">
										Remove Account
									</Button>
									<Button className="btn-light fw-medium btn__xs">Edit</Button>
									{/* <RemoveAccount /> */}
									{/* <EditAccount auth={auth} /> */}
								</div>
							</div>
							<hr />
							<div className="p-4">
								<div className="d-flex">
									<div className="title">
										<h6 className="mb-0">Assigned Permissions</h6>
										<span className="text-dark-75 x-small">
											{`View and manage accounts permission for
                        ${auth.first_name} ${auth.first_name}. Add or remove
                        assets as necessary`}
										</span>
									</div>
									<div className="ms-auto mt-0">
										<Button onClick="" className="btn-light btn__xs">
											Force Settings Update
										</Button>
									</div>
								</div>

								<div className="row">
									<div className="col-md-12 my-4">
										<h6 className="mb-2 small">Organization Branch</h6>
										<div className="d-flex align-items-center">
											<img
												src={""}
												className=" avatar-sm avatar-bg avatar-crcle p-1"
											/>
											<span className="x-small text-dark ms-2 fw-bold">
												{auth.organization ?? "Hillsbourough County"}
											</span>
											<div className="ms-auto">
												<span className="pointer">
													<FeatherIcon
														icon="chevron-down"
														size={20}
														className="text-dark"
													/>
												</span>
											</div>
										</div>
									</div>
									<div className="col-md-12 my-3">
										<h6 className="mb-0 small">Account Settings</h6>
										<div className="d-flex align-items-center py-0">
											<div className="py-0">
												<span className="text-muted small">
													Current Access Permissions:
												</span>{" "}
												<span className="text-muted small ms-3" />
											</div>
										</div>
										{/* <div className="d-flex align-items-center py-0">
                      <div className="py-0">
                        <span className="text-muted small">
                          Managed Password:
                        </span>{" "}
                        <span className="text-muted small ms-3">*******</span>
                      </div>
                      <div className="ms-3">
                        <button className="btn btn-default btn-sm small">
                          Show
                        </button>
                      </div>
                    </div> */}
									</div>
									<div className="col-md-12 my-3">
										<h6 className="mb-0 small">Dashboard Settings</h6>
										<div className="d-flex align-items-center py-0">
											<div className="py-0">
												<span className="text-muted small">Update Users</span>
											</div>
											<div className="ms-auto mt-0">
												{/* <button
															onClick={() => {}}
															className="btn btn-default btn-sm bg-transparent border-0 text-center"
														>
															<FeatherIcon
																icon="chevron-down"
																size={20}
																className="text-muted"
															/>
														</button> */}
											</div>
										</div>
										{/* {updateToggle ? (
													<UpdateUserSettings
														headline={
															"Allow Enterprise account holder the ability to make changes on user profile"
														}
														currentUser={auth}
														settingsArr={""}
													/>
												) : null} */}
										<div className="d-flex align-items-center py-0">
											<div className="py-0">
												<span className="text-muted small">
													Global Communications
												</span>
											</div>
											<div className="ms-auto mt-0">
												{/* <button
															onClick={() => {}}
															className="btn btn-default btn-sm bg-transparent border-0 text-center"
														>
															<FeatherIcon
																icon="chevron-down"
																size={20}
																className="text-muted"
															/>
														</button> */}
											</div>
										</div>
										{/* {commsToggle ? (
													<UpdateUserSettings
														headline={
															"Manage communication capabilities between enterprise account holder, and user"
														}
														currentUser={auth}
														settingsArr={
															globalComms
														}
													/>
												) : null} */}
										<div className="d-flex align-items-center py-0">
											<div className="py-0">
												<span className="text-muted small">
													Publish Reports
												</span>
											</div>
											<div className="ms-auto mt-0">
												{/* <button
															disabled={
																disabledButton
															}
															onClick={() =>
																setReportsToggle(
																	() =>
																		!reportsToggle
																)
															}
															className="btn btn-default btn-sm bg-transparent border-0 text-center"
														>
															<FeatherIcon
																icon="chevron-down"
																size={20}
																className="text-muted"
															/>
														</button> */}
											</div>
										</div>
										{/* {reportsToggle ? (
													<UpdateUserSettings
														headline={
															"Provide ability for Enterprise account holder to sync local files onto dashboard"
														}
														currentUser={auth}
														settingsArr={
															publishReports
														}
													/>
												) : null} */}
										{/* <div className="d-flex align-items-center py-0">
                      <div className="py-0">
                        <span className="text-muted small">
                          Notification Settings
                        </span>
                      </div>
                      <div className="ms-auto mt-0">
                        <button
                          onClick={() =>
                            setNotificationsToggle(() => !notificationsToggle)
                          }
                          className="btn btn-default btn-sm bg-transparent border-0 text-center"
                        >
                          <FeatherIcon
                            icon="chevron-down"
                            size={20}
                            className="text-muted"
                          />
                        </button>
                      </div>
                    </div> */}
										{/* {notificationsToggle ? (
                      <UpdateUserSettings
                        headline={
                          "Adjust alert notifications for Enterprise account holder"
                        }
                        currentUser={auth}
                        settingsArr={notificationSettings}
                      />
                    ) : null} */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth.user,
});

export default connect(mapStateToProps, null)(Settings);
