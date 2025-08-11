/** @format */

import React from "react";

function AppModal({ buttonType, name, header, height, children }) {
	return (
		<>
			{buttonType}
			<div
				className="modal fade"
				id={name}
				tabIndex="-1"
				aria-labelledby={`${name}Label`}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div
						className="modal-content px-4 py-4 d-flex flex-column"
						style={{ ...(!height && { minHeight: "100px" }) }}
					>
						<div className="d-flex justify-content-between align-items-center mb-2">
							<h4 className="mb-0">{header}</h4>
							{/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
						</div>
						{/*  */}
						<div className="d-flex justify-content-center col">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AppModal;
