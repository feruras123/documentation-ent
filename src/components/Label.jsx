/** @format */
import React from "react";

function InlineLabel({ label, data }) {
	return (
		<div className="form-inline mb-3">
			<label htmlFor="" className="text-start fw-medium x-small  w-50">
				{`${label} :`}
			</label>
			<span className="text-start">
				{data !== null ? (
					data
				) : (
					<i className="text-dark-75">(Information not available)</i>
				)}
			</span>
		</div>
	);
}

export { InlineLabel };
