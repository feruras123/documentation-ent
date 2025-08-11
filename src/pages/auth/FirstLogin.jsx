/** @format */

// /** @format */

// import React from "react";
// import AuthLayout from "@components/layouts/AuthLayout";
// import { withRouter } from "react-router-dom";
// import { AuthInput, AuthButton } from "@components/form/AuthField";
// import { connect } from "react-redux";
// import Alert from "@components/alerts/Alert";
// import { updatePassword } from "@redux/actions/action";

// const defaultState = {
// 	ButtonText: "Update Password",
// 	isDisabled: false,
// };

// class FirstLogin extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			...defaultState,
// 			old_password: "",
// 			password: "",
// 			confirm: "",
// 			message: "",
// 			status: "",
// 		};

// 		this.handleSubmit = this.handleSubmit.bind(this);
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 	}

// 	componentDidMount() {
// 		if (this.props.firstLogin) {
// 			this.props.history.push("/overview");
// 		} else {
// 			this.props.history.push("/");
// 		}
// 	}

// 	handleInputChange(e) {
// 		e.preventDefault();
// 		const target = e.target;
// 		this.setState({ [target.name]: target.value });
// 	}

// 	handleSubmit(e) {
// 		e.preventDefault();
// 		this.setState({ isDisabled: true, ButtonText: "Please wait ..." });

// 		const { password, old_password, confirm } = this.state;
// 		this.props.updatePassword(
// 			{ password, old_password, confirm },
// 			this.props.history,
// 			this.handleResponse
// 		);
// 	}

// 	handleResponse = (res) => {
// 		this.setState({
// 			message: res.message,
// 			status: res.status,
// 			...defaultState,
// 		});
// 		setTimeout(() => {
// 			this.props.history.push("/overview");
// 		}, 2000);
// 	};
// 	render() {
// 		const {
// 			message,
// 			status,
// 			ButtonText,
// 			old_password,
// 			password,
// 			confirm,
// 			isDisabled,
// 		} = this.state;
// 		return (
// 			<>
// 				<AuthLayout display={"d-none"}>
// 					<div id="auth">
// 						<Alert message={message} status={status} />
// 						<form onSubmit={this.handleSubmit}>
// 							<AuthInput
// 								type="password"
// 								id="old_password"
// 								name="old_password"
// 								value={old_password}
// 								onChange={this.handleInputChange}
// 								placeholder="Old Password"
// 							/>
// 							<AuthInput
// 								type="password"
// 								id="password"
// 								name="password"
// 								value={password}
// 								onChange={this.handleInputChange}
// 								placeholder="New Password"
// 							/>
// 							<AuthInput
// 								type="password"
// 								id="confirm"
// 								name="confirm"
// 								value={confirm}
// 								onChange={this.handleInputChange}
// 								placeholder="Repeat New Password"
// 							/>
// 							<div className="d-flex mb-4">
// 								<div className="link">Need Help ?</div>
// 							</div>

// 							<AuthButton text={ButtonText} status={isDisabled} />
// 						</form>
// 					</div>
// 				</AuthLayout>
// 			</>
// 		);
// 	}
// }

// const mapStateToProps = (state) => ({
// 	firstLogin: state.user.firstLogin,
// 	authenticated: state.user.authenticated,
// });

// const mapDispatchToProps = (dispatch) => ({
// 	updatePassword: (data, history, response) =>
// 		dispatch(updatePassword(data, history, response)),
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(withRouter(FirstLogin));
