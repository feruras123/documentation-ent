/** @format */

// /** @format */

// import React from "react";
// import AuthLayout from "@components/layouts/AuthLayout";
// import { withRouter } from "react-router-dom";
// import { Input, Form, Button, Label } from "reactstrap";
// import { withAlert } from "react-alert";
// import axios from "axios";
// import PhoneInput from "react-phone-number-input";
// import emailToBinary from "./util/emailToBinary";
// // import DatePicker from "react-datepicker";
// import DatePick from "./util/DatePick";
// import viewPostDeterminator from "./util/viewPostDeterminator";
// import showPostDeterminator from "./util/showPostDeterminator";
// import "./style.css";

// import cssModule from "./kbroSignup.module.css";

// import { srv } from "../../srvConfig";

// function KbroSignup() {
//   const [firstName, setFirstName] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [lastName, setLastName] = React.useState(null);
//   const [anonymousUsername, setAnonymousUsername] = React.useState(null); // auto generate
//   const [nickName, setNickname] = React.useState(null);

//   const [email, setEmail] = React.useState(null);
//   const [cellPhoneNumber, setCellPhoneNumber] = React.useState(null); // '+16503802627'
//   const [getText, setGetText] = React.useState(false); // get Text Messages when someone responds to you on My Tribe
//   const [password, setPassword] = React.useState(null);
//   const [rePassword, setRePassword] = React.useState(null);
//   const [genderIdentity, setGenderIdentity] = React.useState(null); // optional - Male 1, Female 2, Non-Binary 6, Not defined 1000
//   const [sexualOrientation, setSexualOrientation] = React.useState(null); // optional - Heterosexual, LGBTQ+
//   // eslint-disable-next-line no-unused-vars
//   const [startDate, setStartDate] = React.useState(new Date());
//   const [dateToSend, setDateToSend] = React.useState();
//   const [errorMessage, setErrorMessage] = React.useState(null);
//   // eslint-disable-next-line no-unused-vars
//   const [noPhone, setNoPhone] = React.useState(true);

//   React.useEffect(() => {
//     setDateToSend(
//       `${startDate.toLocaleDateString("en-US", {
//         month: "numeric",
//       })}-${startDate.toLocaleDateString("en-US", {
//         day: "numeric",
//       })}-${startDate.toLocaleDateString("en-US", { year: "numeric" })}`
//     );
//   }, [startDate]);
//   console.log(dateToSend);

//   const timezone_offset_min = new Date().getTimezoneOffset();
//   // eslint-disable-next-line radix
//   let offset_hrs = parseInt(Math.abs(timezone_offset_min / 60));
//   let offset_min = Math.abs(timezone_offset_min % 60);
//   let timezone_standard;
//   if (offset_hrs < 10) offset_hrs = `0${offset_hrs}`;
//   if (offset_min < 10) offset_min = `0${offset_min}`;
//   if (timezone_offset_min < 0)
//     timezone_standard = `+${offset_hrs}:${offset_min}`;
//   else if (timezone_offset_min > 0)
//     timezone_standard = `-${offset_hrs}:${offset_min}`;
//   else if (timezone_offset_min === 0) timezone_standard = "Z";

//   React.useEffect(() => {
//     axios.get(`${srv}/getUsername`).then((res) => {
//       console.log(res);
//       setAnonymousUsername(() => res.data.data);
//     });
//   }, []);

//   function submitForm(e) {
//     setIsLoading(true);
//     e.preventDefault();
//     setErrorMessage(null);

//     const phoneMutated = cellPhoneNumber
//       ? cellPhoneNumber.replace(/\D/g, "")
//       : null;

//     const payload = {
//       first_name: firstName,
//       last_name: lastName,
//       phone_number: noPhone ? emailToBinary(email) : phoneMutated,
//       birthday: dateToSend,
//       gender: genderIdentity,
//       sexual_orientation: sexualOrientation,
//       email: email,
//       password: password,
//       nick_name: nickName,
//       nick_anonymous: anonymousUsername,
//       time_zone: timezone_standard,
//       push_comment: getText === true ? "yes" : "no",
//       view_post: viewPostDeterminator(genderIdentity, sexualOrientation),
//       show_post: showPostDeterminator(genderIdentity, sexualOrientation),
//       school_start: "06:00 am",
//       school_end: "11:00 am",
//       method: "profile_registration",
//     };
//     if (password.length > 6) {
//       if (password === rePassword) {
//         axios
//           .post(`${srv}/verifyEmailForSignup`, {
//             email: payload.email,
//             nickName: payload.nick_name,
//           })
//           .then((res) => {
//             if (res.data.DATA === "NOT_AUTHROIZED_TO_SIGN_UP") {
//               setErrorMessage(
//                 "You were not invited to sign up with this email. Choose a different email or contact your admin"
//               );
//               setIsLoading(false);
//             } else if (res.data.DATA === "EMAIL_EXISTS_ERROR") {
//               setErrorMessage(
//                 "There is already an account with the same email address. Go to the app and click 'forgot password' if you don't remember your credentials"
//               );
//               setIsLoading(false);
//             } else if (res.data.DATA === "USERNAME_EXISTS_ERROR") {
//               setErrorMessage(
//                 "This nickname already exists. Please choose a different one."
//               );
//               setIsLoading(false);
//             } else if (res.data.DATA === "AUTHROIZED_TO_SIGN_UP") {
//               axios
//                 .post(`${srv}/kbroSignUp`, {
//                   payload: JSON.stringify(payload),
//                   sexualOrientation: sexualOrientation,
//                 })
//                 .then((result) => {
//                   console.log(result);
//                   if (result.data.DATA) {
//                     setErrorMessage(result.data.msg);
//                   }
//                 });
//             } else {
//               setErrorMessage(
//                 "Something went wrong. Please refresh the page and double check your entries. If the problem persists, notify your admin"
//               );
//               setIsLoading(false);
//             }
//           });
//       } else {
//         setErrorMessage("The passwords you entered don't match!");
//         setIsLoading(false);
//       }
//     } else {
//       setErrorMessage("Your password is too short");
//       setIsLoading(false);
//     }

//     console.log(payload);

//     // axios
//     //   .post(`${srv}/kbroSignUp`, JSON.stringify(payload))
//     //   .then((res) => console.log(res));
//   }

//   return (
//     <>
//       <AuthLayout display={"d-none"}>
//         <div>
//           <Form onSubmit={(e) => submitForm(e)}>
//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>First Name:</Label>
//               <Input
//                 required={true}
//                 className={cssModule.inputEl}
//                 onChange={(e) => setFirstName(() => e.target.value)}
//                 value={firstName}
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//               />
//             </div>

//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>Last Name:</Label>
//               <Input
//                 required={true}
//                 className={cssModule.inputEl}
//                 onChange={(e) => setLastName(() => e.target.value)}
//                 value={lastName}
//                 type="text"
//                 name="lastName"
//                 id="lastName"
//               />
//             </div>

//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>Nickname: </Label>
//               <Input
//                 required={true}
//                 className={cssModule.inputEl}
//                 onChange={(e) => setNickname(() => e.target.value)}
//                 value={nickName}
//                 type="text"
//                 name="nickName"
//                 id="setNickName"
//               />
//             </div>
//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>
//                 Anonymous Nickname:{" "}
//               </Label>
//               <Input
//                 disabled
//                 className={cssModule.inputEl}
//                 value={anonymousUsername}
//                 type="text"
//                 name="nickNameAnonymous"
//                 id="setNickNameAnonymous"
//               />
//             </div>
//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>Email: </Label>
//               <Input
//                 required={true}
//                 className={cssModule.inputEl}
//                 onChange={(e) => setEmail(() => e.target.value)}
//                 value={email}
//                 type="email"
//                 name="email"
//                 id="email"
//               />
//             </div>
//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>Birthday: </Label>
//               <DatePick startSetter={setStartDate} />
//             </div>
//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>Cell: </Label>
//               <PhoneInput
//                 disabled={!!noPhone}
//                 required={!!noPhone}
//                 country={"US"}
//                 placeholder="Enter phone number"
//                 value={cellPhoneNumber}
//                 onChange={setCellPhoneNumber}
//               />
//               <Label className={cssModule.subLabel}>No Phone: </Label>
//               <Input
//                 className={cssModule.subCheckbox}
//                 onChange={() => setNoPhone(() => !noPhone)}
//                 checked={noPhone}
//                 type="checkbox"
//                 name="nophone"
//                 id="nophone"
//               />
//             </div>
//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>
//                 Receive Textmessages:{" "}
//               </Label>
//               <Input
//                 className={cssModule.checkbox}
//                 onChange={() => setGetText(() => !getText)}
//                 value={getText}
//                 checked={getText}
//                 type="checkbox"
//                 name="receiveText"
//                 id="receiveText"
//               />
//             </div>

//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>Password: </Label>
//               <Input
//                 required={true}
//                 className={cssModule.inputEl}
//                 onChange={(e) => setPassword(() => e.target.value)}
//                 value={password}
//                 type="password"
//                 name="password"
//                 id="password"
//               />
//             </div>
//             <div className={cssModule.subContainer}>
//               <Label className={cssModule.formLabel}>Repeat Password: </Label>
//               <Input
//                 required={true}
//                 className={cssModule.inputEl}
//                 onChange={(e) => setRePassword(() => e.target.value)}
//                 value={rePassword}
//                 type="password"
//                 name="repeatPassword"
//                 id="repeatPassword"
//               />
//             </div>

//             <div className={cssModule.subContainer}>
//               <div className={cssModule.genderContainer}>
//                 <div className={cssModule.genderSubContainer}>
//                   <h6>Male:</h6>
//                   <Input
//                     onChange={() => setGenderIdentity(() => "male")}
//                     value={nickName}
//                     className={cssModule.checkbox}
//                     type="checkbox"
//                     name="male"
//                     // eslint-disable-next-line no-unused-vars
//                     // eslint-disable-next-line no-const-assign
//                     checked={genderIdentity === "male"}
//                     id="male"
//                   />
//                 </div>

//                 <div className={cssModule.genderSubContainer}>
//                   <h6>Female:</h6>
//                   <Input
//                     onChange={() => setGenderIdentity(() => "female")}
//                     className={cssModule.checkbox}
//                     type="checkbox"
//                     name="female"
//                     // eslint-disable-next-line no-const-assign
//                     checked={genderIdentity === "female"}
//                     id="female"
//                   />
//                 </div>
//                 <div className={cssModule.genderSubContainer}>
//                   <h6>Non-Binary</h6>
//                   <Input
//                     onChange={() => setGenderIdentity(() => "other")}
//                     className={cssModule.checkbox}
//                     type="checkbox"
//                     name="nonBinary"
//                     // eslint-disable-next-line no-const-assign
//                     checked={genderIdentity === "other"}
//                     id="nonBinary"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className={cssModule.subContainer}>
//               <div className={cssModule.sexualOrientationContainer}>
//                 <div className={cssModule.sexualOrientationSubContainer}>
//                   <h6>Heterosexual(optional): </h6>
//                   <Input
//                     onChange={() => setSexualOrientation(() => "HETERO")}
//                     className={cssModule.checkbox}
//                     type="checkbox"
//                     name="hetero"
//                     checked={sexualOrientation === "HETERO"}
//                     id="hetero"
//                   />
//                 </div>

//                 <div className={cssModule.sexualOrientationSubContainer}>
//                   <h6>LGBTQ+: </h6>
//                   <Input
//                     onChange={() => setSexualOrientation(() => "LG")}
//                     className={cssModule.checkbox}
//                     type="checkbox"
//                     name="lgbqt"
//                     checked={sexualOrientation === "LG"}
//                     id="nonBinary"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className={cssModule.signUpButton}>
//               <h5 className={cssModule.errorMessage}>
//                 {errorMessage === null ? null : errorMessage}
//               </h5>
//               <Button type="submit">
//                 {isLoading ? "Please wait..." : "Signup"}
//               </Button>
//             </div>
//           </Form>
//         </div>
//       </AuthLayout>
//     </>
//   );
// }

// export default withAlert()(withRouter(KbroSignup));
