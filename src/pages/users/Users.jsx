/** @format */

import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import $ from "jquery";
import Button from "@components/Buttons";
import { fetchUsers } from "@reduxes/actions/user";
import PAGES_URL from "@router/routes";
import Paginate from "@components/Paginate";
import InviteModal from "./InviteModal";
import Messaging from "./Messaging";
import InviteModalBatch from "./InviteModalBatch";

import TabComponent from "@components/dashboard/TabComponent";

function Users(props) {
	const { fetch, fetching, district_id } = props;
	const [data, setData] = useState(props.data);
	const [search, setSearch] = useState("");
	const [options, setOptions] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(15);

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = data.slice(firstPostIndex, lastPostIndex);

	// Filter posts based on search term
	const handleSearch = (e) => {
		setSearch(e.target.value);

		const filteredData = props.data.filter(
			(data) =>
				data.name.toLowerCase().includes(search.toLowerCase()) ||
				data.email.toLowerCase().includes(search.toLowerCase()) ||
				data.grade.name.toLowerCase().includes(search.toLowerCase()) ||
				data.counselor.name.toLowerCase().includes(search.toLowerCase()),
		);
		setData(filteredData);
	};

	useEffect(() => {
		fetch({ district_id });
	}, []);

	const handleLink = (user) => {
		const { id } = user;
		props.history.push(`${PAGES_URL.USER_PROFILE}/${id}/activity`);
	};

	const handleTab = () => {
		setOptions();
		fetch({ district_id, options });
	};

	return (
		<>
			<TabComponent>
				<a onClick={handleTab} className="image active">
					View all
				</a>
				<a to="/">
					<FeatherIcon icon="circle" size={10} stroke="0" fill="red" /> Not Okay
				</a>
				<a to="/">
					<FeatherIcon icon="circle" size={10} stroke="0" fill="yellow" /> Okay
				</a>
				<a to="/">
					<FeatherIcon icon="circle" size={10} stroke="0" fill="green" />
					&nbsp;Better Than Okay
				</a>
			</TabComponent>
			<div className="h-90 d-flex flex-column px-md-3 px-lg-0">
				<div className="row">
					<div className="col-md-8 py-3 ps-3">
						<div className="d-flex align-items-center mb-4">
							<label htmlFor="" className="fw-medium x-small me-5">
								Search:
							</label>
							<input
								type="text"
								onChange={handleSearch}
								placeholder="Enter Search"
								value={search}
								className="  bg-light form-control form-control-sm"
							/>
						</div>
						<div className="shadow rounded-20 ">
							<Table className="table" striped hover size="sm" responsive>
								<thead className="fw-bold text-dark">
									<tr className="fw-bold text-dark">
										<th />
										<th>Name</th>
										<th>Grade</th>
										<th>Email</th>
										<th>Username</th>
										{/* <th>School</th> */}
										<th>Assigned Counselor</th>
									</tr>
								</thead>
								<tbody>
									{fetching ? (
										<tr>
											<td colSpan={6}>loading...</td>
										</tr>
									) : currentPosts ? (
										currentPosts.map((user, idx) => (
											<tr
												key={idx}
												onClick={() => handleLink(user)}
												className="pointer"
											>
												<td>
													<FeatherIcon
														icon="circle"
														size={11}
														fill=""
														stroke={2}
													/>
												</td>
												<td>{user.name}</td>
												<td>{user.grade.name}</td>
												<td>{user.email}</td>
												<td>{user.kbro ? user.kbro.username : "----"}</td>
												{/* <td>{user.school.name}</td> */}
												<td>{`${user.counselor.name}`}</td>
											</tr>
										))
									) : (
										<tr>
											<td colSpan={6}>No user available</td>
										</tr>
									)}
								</tbody>
							</Table>
							<Paginate
								currentPage={currentPage}
								PostsPerPage={postsPerPage}
								data={data}
								setCurrentPage={setCurrentPage}
							/>
						</div>
					</div>
					<div className="col-md-4 p-3">
						<div className="d-flex align-items-center justify-content-end mb-4">
							<Button
								onClick={() => $("#inviteModal").modal("show")}
								className="btn-light fw-medium btn__xs  me-2"
							>
								<FeatherIcon icon="user-plus" size={15} /> Add new profile
							</Button>
							<Button
								onClick={() => $("#inviteModalBatch").modal("show")}
								className="btn-light fw-medium btn__xs  me-3"
							>
								<FeatherIcon icon="file-plus" size={15} /> Batch upload
							</Button>
							<span className=" x-small fw-normal">Export page</span>
						</div>
						<Messaging />
					</div>
				</div>
			</div>
			<InviteModal />
			<InviteModalBatch />
		</>
	);
}

const mapStateToProps = (state) => ({
	district_id: state.auth.user.district_id,
	data: state.users.entries,
	fetching: state.users.fetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetch: (data) => dispatch(fetchUsers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
