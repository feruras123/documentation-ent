/** @format */

const PasswordValidator = (password, alert) => {
	if (password.length < 4) {
		alert.error("Password must not be less than 4 characters");
		return false;
	}
	return true;
};

const EmailValidator = (email, alert) => {
	const regex =
		'/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i';
	if (!email || regex.test(email) === false) {
		alert.error("Invalid email address entered");
		return false;
	}
	return true;
};

export default {
	EmailValidator,
	PasswordValidator,
};
