/** @format */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import React, { useState } from "react";
import { FormModal } from "@components/modals/Modal";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import cssOverride from "./styles.module.css";
import { srv } from "../../../srvConfig";

function RemoveAccount() {
	const [show, setShow] = useState(false);
	const [dropdownOpen, setOpen] = useState(false);
	const [userArr, setUserArr] = useState([]);
	const [userToDelete, setUserToDelete] = useState("Users");
	const [isLoading, setIsLoading] = React.useState(false);
	// eslint-disable-next-line no-unused-vars
	const [idToDelete, setIdToDelete] = useState(null);
	const orgs = null; // useSelector((state) => state.availableOrganizationsSlice.orgs);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const [locations, setLocations] = React.useState([]);
	React.useEffect(() => {
		axios.get(`${srv}/fetchDashboardUsers`).then((res) => {
			setUserArr(() => res.data.users);
		});
	}, []);

	React.useEffect(() => {
		switch (localStorage.getItem("organization")) {
			case "YouRok":
				setLocations(() => ["YouRok", ...orgs]);
				break;
			default:
				if (localStorage.getItem("isSupervisingEntity") === "true") {
					setLocations(() => [...orgs]);
				} else {
					setLocations(() => [localStorage.getItem("organization")]);
				}
		}
	}, []);

	function handleDeleteStaging(e, firstName, lastName) {
		const fullName = `${firstName} ${lastName}`;
		setUserToDelete(() => fullName);
		setIdToDelete(() => e.target.value);
	}

	function handleDelete() {
		setIsLoading(true);
		axios
			.post(`${srv}/deleteDashboardUser`, {
				id: idToDelete,
			})
			.then(() => {
				setIsLoading(false);
				handleClose();
				window.location.reload();
			});
	}

	return (
		<>
			<button className="btn btn-default btn-" onClick={handleShow}>
				Remove Account
			</button>
			<FormModal
				clickFunc={handleDelete}
				handleShow={show}
				handleClose={handleClose}
				saveLabel={isLoading ? "Loading...    " : "Confirm Account Removal"}
				cancelLabel="Cancel"
				size="lg"
			>
				<div className="p-3">
					<h3 className="mb-0">Removing YouROK Enterprise User Account(s)</h3>
					<p className="small font-weight-light">
						if you want to remove and add archive linked enterprise user
						accounts, please complete the selection below
					</p>
				</div>
				<div className="border p-3 mt-0 mb-3">
					<p className="small font-weight-light">
						A deleted user will not be able to log into the dashboard after
						deletion. A new dashboard invitation would have to be sent in order
						to re-activate a deleted user.
					</p>
					<p className="small font-weight-light mb-0">
						Select Account to be Removed and click on "Confirm Account Removal"
					</p>
					<Dropdown
						isOpen={dropdownOpen}
						toggle={() => setOpen(() => !dropdownOpen)}
					>
						<DropdownToggle className={cssOverride.dropdown} caret>
							{userToDelete}
						</DropdownToggle>

						<DropdownMenu>
							{userArr.map((user) => {
								if (localStorage.getItem("organization") === "YouRok") {
									return (
										<DropdownItem
											className={cssOverride.dropdown}
											key={user.id}
											value={user.id}
											onClick={(e) =>
												handleDeleteStaging(e, user.firstName, user.lastName)
											}
										>
											{`${user.firstName} ${user.lastName}`}
										</DropdownItem>
									);
								}
								if (
									locations.includes(user.organization) &&
									user.email !== localStorage.getItem("email")
								) {
									return (
										<DropdownItem
											className={cssOverride.dropdown}
											key={user.id}
											value={user.id}
											onClick={(e) =>
												handleDeleteStaging(e, user.firstName, user.lastName)
											}
										>
											{`${user.firstName} ${user.lastName}`}
										</DropdownItem>
									);
								}
							})}
						</DropdownMenu>
					</Dropdown>
				</div>
			</FormModal>
		</>
	);
}

export default RemoveAccount;
