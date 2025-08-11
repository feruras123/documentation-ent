/** @format */

import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_ENDPOINT;

const headers = {
	"Content-Type": "application/x-www-form-urlencoded",
	Accept: "application/json",
};

const accessToken = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

export const addDashboardUser = (data, alert, response) => {
	axios
		.post(`${apiBaseUrl}/v1/customers/invitation/send`, data, headers)
		.then((res) => {
			// alert.success(res.data.message);
			response({
				message: res.data.message,
				status: "success",
			});
		})
		.catch((err) => {
			// console.log(err);
			if (err.response.data.errors) {
				// eslint-disable-next-line array-callback-return
				Object.values(err.response.data.errors).map((i) => {
					// console.error(i);
					// alert.error(i);
				});
			} else {
				// alert.error(err.response.data.message);
			}

			response({
				message: err.response.data.message,
				status: "error",
			});
		});
	setTimeout(() => {
		if (!navigator.onLine) {
			alert.error("Check your internet connection");
		}
	}, 3000);
};
