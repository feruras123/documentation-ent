/** @format */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { FormModal } from "@components/modals/Modal";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Form,
	Label,
	// eslint-disable-next-line no-unused-vars
	Spinner,
} from "reactstrap";
import _ from "lodash";
import cssOverride from "./styles.module.css";

function AddAssets() {
	const [show, setShow] = useState(false);
	const [dropdownToggle, setDropdownToggle] = React.useState(false);
	const [dropDownKey, setKey] = React.useState(_.uniqueId());
	const [roleState, setRoleState] = React.useState(
		"--------------------------",
	);
	const inputFile = React.useRef();
	// eslint-disable-next-line no-unused-vars
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	function handleRoleChange(role) {
		setRoleState(role);
		setDropdownToggle(() => !dropdownToggle);
		setKey(_.uniqueId());
	}

	function handleButtonClick() {
		if (roleState === "COMPUTER") {
			inputFile.current.click();
		}
	}
	return (
		<>
			{/* <button className="btn btn-default btn-sm" onClick={handleShow}>
        <FeatherIcon icon="plus" size={11} /> Upload Users
      </button> */}
			<FormModal
				handleShow={show}
				handleClose={handleClose}
				saveLabel="Confirm Edits"
				cancelLabel="Cancel"
			>
				<div className="p-3">
					<h1>Add Assets</h1>
				</div>
				<Form className="row justify-content-center assetsForm">
					<Label className={cssOverride.labelstyle}>
						<div className={cssOverride.subContainer}>
							Account Type :
							<Dropdown
								className="form-group"
								isOpen={dropdownToggle}
								toggle={() => setDropdownToggle(!dropdownToggle)}
							>
								<DropdownToggle className={cssOverride.dropdown} caret>
									{roleState === "COMPUTER" ? "From Computer" : "From Dropbox"}
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem
										className={cssOverride.dropdown}
										key={dropDownKey}
										onClick={() => handleRoleChange("COMPUTER")}
									>
										From Computer
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
							<button onClick={handleButtonClick} className="btn btn-add ml-3">
								Add File
							</button>
							<input
								type="file"
								id="file"
								ref={inputFile}
								style={{ display: "none" }}
							/>
						</div>
					</Label>
				</Form>
			</FormModal>
		</>
	);
}

export default AddAssets;
