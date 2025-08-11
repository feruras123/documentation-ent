/** @format */

export default function emailValidator(email) {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let result = false;

	if (email !== undefined) {
		if (emailRegex.test(email) === true) {
			result = true;
		}
	}
	return result;
}
