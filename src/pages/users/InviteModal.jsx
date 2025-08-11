/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AppModal from "@components/AppModal";
import Button from "@components/Buttons";
import {
	fetchCounselors,
	fetchGrades,
	fetchEthnicity,
	fetchSchools,
} from "@reduxes/actions/data";
import { createUser, fetchUsers } from "@reduxes/actions/user";
import Alert from "@components/Alert";

function InviteModal(props) {
	const { district_id } = props.auth;
	const [state, setState] = useState({
		first_name: "",
		last_name: "",
		email: "",
		grade_id: "",
		counselor_id: "",
		ethnicity_id: "",
		district_id,
	});

	const [alert, setAlert] = useState({ message: "", status: "" });
	const { loading, data } = props;
	console.log(data.schools);

	const handleInputChange = (e) => {
		setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	useEffect(() => {
		props.grade();
		props.ethnicity();
		props.counselor({ district_id });
		props.school({ district_id });
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.create(state, handleResponse);
	};

	const handleResponse = (res) => {
		setAlert({ ...res });
		if (res.status == "success") {
			setState(...state);
		}
	};

	return (
		<AppModal name="inviteModal">
			<div className="auth__section d-flex flex-column text-dark-75">
				<div className="px-3">
					<h5 className="fw-light fw-dark">+ Add New Profile</h5>
				</div>
				<form onSubmit={handleSubmit} className="pt-lg-5 px-lg-3 text-end">
					<Alert
						className="py-1"
						message={alert.message}
						status={alert.status}
						loading={loading}
					/>

					<div className="form-inline d-center mb-2">
						<label htmlFor="" className="w-50 x-small me-4">
							First Name:
						</label>
						<input
							name="first_name"
							onChange={handleInputChange}
							value={state.first_name}
							type="text"
							className="form-control form-control-sm "
						/>
					</div>
					<div className="form-inline d-center mb-2">
						<label htmlFor="" className="w-50 x-small me-4">
							Last Name:
						</label>
						<input
							name="last_name"
							onChange={handleInputChange}
							value={state.last_name}
							type="text"
							className="form-control form-control-sm"
						/>
					</div>
					<div className="form-inline d-center mb-2">
						<label htmlFor="" className="w-50 x-small me-4">
							Email:
						</label>
						<input
							name="email"
							onChange={handleInputChange}
							value={state.email}
							type="text"
							className="form-control form-control-sm"
						/>
					</div>
					<div className="form-inline d-center mb-2">
						<label htmlFor="" className="w-50 x-small me-4">
							School:
						</label>
						<select
							name="school_id"
							onChange={handleInputChange}
							className="form-control form-control-sm text-center"
						>
							<option value="">-------------------------</option>
							{data.schools &&
								data.schools.map((school, idx) => (
									<option key={idx} value={school.id}>
										{`${school.name}`}
									</option>
								))}
						</select>
					</div>
					<div className="form-inline d-center mb-2">
						<label htmlFor="" className="w-50 x-small me-4">
							Counselor:
						</label>
						<select
							name="counselor_id"
							onChange={handleInputChange}
							className="form-control form-control-sm text-center"
						>
							<option value="">-------------------------</option>
							{data.counselors &&
								data.counselors.map((counselor, idx) => (
									<option key={idx} value={counselor.id}>
										{`${counselor.first_name} ${counselor.last_name}`}
									</option>
								))}
						</select>
					</div>
					<div className="form-inline d-center mb-2">
						<label htmlFor="" className="w-50 x-small me-4">
							Grade Level:
						</label>
						<select
							name="grade_id"
							onChange={handleInputChange}
							className="form-control form-control-sm text-center text-uppercase"
						>
							<option value="">Choose grade</option>
							{data.grades &&
								data.grades.map((grade, idx) => (
									<option key={idx} value={grade.id}>
										{grade.name}
									</option>
								))}
						</select>
					</div>
					<div className="form-inline d-center mb-2">
						<label htmlFor="" className="w-50 x-small me-4">
							Ethnicity:
						</label>
						<select
							name="ethnicity_id"
							onChange={handleInputChange}
							className="form-control form-control-sm text-center text-uppercase"
						>
							<option value="">Choose ethnicity</option>
							{data.ethnicity &&
								data.ethnicity.map((data, idx) => (
									<option key={idx} value={data.id}>
										{`${data.name}`}{" "}
										{data.reference != "" ? `(${data.reference})` : ""}
									</option>
								))}
						</select>
					</div>

					<div className="d-flex pt-5">
						<button
							className="btn__xs btn-light fw-medium text-center ms-auto me-3"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							Cancel
						</button>
						<Button
							loading={loading}
							type="submit"
							size={20}
							className="btn__xs btn-primary fw-medium text-center"
						>
							Add Account
						</Button>
					</div>
				</form>
			</div>
		</AppModal>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth.user,
	data: state.data,
	loading: state.users.loading,
});

const mapDispatchToProps = (dispatch) => ({
	grade: () => dispatch(fetchGrades()),
	ethnicity: () => dispatch(fetchEthnicity()),
	counselor: (data) => dispatch(fetchCounselors(data)),
	school: (data) => dispatch(fetchSchools(data)),
	fetch: () => dispatch(fetchUsers()),
	create: (data, response) => dispatch(createUser(data, response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteModal);
