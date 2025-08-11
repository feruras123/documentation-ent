/** @format */

// /** @format */
// /* eslint-disable consistent-return */
// /* eslint-disable array-callback-return */

// import React from "react";
// import Card from "@components/cards/Card";
// import { Input, Modal, ModalBody } from "reactstrap";
// import _ from "lodash";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import cssOverride from "./notificationStyles.module.css";
// import { srv } from "../../../srvConfig";
// import returnWeekday from "../../../utils/returnWeekday";
// import cssModule from "./viewAll.module.css";

// function UserMessage({ recipientId }) {
//   const [subject, setSubject] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [modalOpen, setModalOpen] = React.useState(false);
//   const [messageData, setMessageData] = React.useState({
//     organization: null,
//     fromEmail: null,
//     recipient: null,
//     date: null,
//     subject: null,
//     msg: null,
//   });
//   // eslint-disable-next-line no-unused-vars
//   const [success, setSuccess] = React.useState(null);
//   const [error, setError] = React.useState(null);

//   const settingsSlice = useSelector((state) => state.settingsSlice);
//   const [settings, setSettings] = React.useState(settingsSlice);
//   const userId = localStorage.getItem("uid");

//   const messages = useSelector(
//     (state) => state.globalMessageSlice.individualMessages
//   );

//   let reversed = messages.filter((msg) => {
//     if (Number(msg.recipient) === recipientId) {
//       return msg;
//     }
//   });

//   reversed = reversed.reverse();
//   console.log(reversed);
//   React.useEffect(() => {
//     axios
//       .post(`${srv}/getDashboardUserSettings`, { uid: userId })
//       .then((res) => {
//         console.log(res);
//         const payload = {
//           addUserProfiles: res.data.addUserProfiles,
//           deleteUserProfiles: res.data.deleteUserProfiles,
//           editUserProfiles: res.data.editUserProfiles,
//           messageUsers: res.data.messageUsers,
//           uploadAndExport: res.data.uploadAndExport,
//           realTimeNotifications: res.data.realTimeNotifications,
//           updateNotifications: res.data.updateNotifications,
//         };
//         setSettings(payload);
//       });
//   }, []);
//   function toggle() {
//     setModalOpen(() => !modalOpen);
//   }
//   function maximizeMessage(msg, date) {
//     console.log(msg);
//     setMessageData(() => ({
//       organization: msg.organization,
//       fromEmail: msg.fromEmail,
//       recipient: msg.recipient,
//       date: date,
//       subject: msg.subject,
//       msg: msg.msg,
//     }));
//     toggle();
//   }

//   function sendMessage(e) {
//     e.preventDefault();
//     setIsLoading(true);
//     const first = localStorage.getItem("firstName");
//     const last = localStorage.getItem("lastName");
//     const email = localStorage.getItem("email");
//     const organization = localStorage.getItem("organization");
//     // setSuccess(null);
//     const payload = {
//       messageType: "INDIVIDUAL_MESSAGE",
//       to: recipientId,
//       subject: subject,
//       message: message,
//       fromFirst: first,
//       fromLast: last,
//       fromEmail: email,
//       organization: organization,
//     };
//     if (payload.to && payload.subject && payload.message) {
//       axios.post(`${srv}/sendMessage`, payload).then((res) => {
//         if (res.data === "OK") {
//           setSuccess("Message sent");
//           setIsLoading(false);
//           setTimeout(() => {
//             setSuccess(null);
//           }, 5000);
//           setError(null);
//           setSubject("");
//           setMessage("");
//         }
//       });
//     } else {
//       setError("You have to fill out all fields!");
//       setIsLoading(false);
//     }
//   }

//   // function maximizeMessage() {
//   //   console.log("Clicked111111");
//   // }

//   return (
//     <div
//       className="col-4 h-inherit"
//       style={{ maxHeight: "inherit", overflowY: "auto" }}
//     >
//       {settings.messageUsers ? (
//         <Card>
//           <div className="px-2 pt-4 pb-3">
//             {error ? <h5 style={{ color: "red" }}>{error}</h5> : null}
//             {success ? <h5 style={{ color: "green" }}>{success}</h5> : null}
//             <p className="text-dark mb-2 px-2">Send Direct Message</p>
//             <p className="small muted px-2 mb-1">Title</p>
//             <div className="box-shadow rounded-lg px-3 py-3">
//               <Input
//                 className={cssOverride.inputEl}
//                 onChange={(e) => setSubject(e.target.value)}
//                 type="text"
//                 name="subject"
//                 id="subject"
//                 placeholder="Example: You haven't visited what's up today"
//                 value={subject}
//               />
//             </div>
//             <p className="small muted px-2 mb-1 mt-4">Body</p>
//             <div className="box-shadow rounded-lg px-3 py-3">
//               <Input
//                 className={cssOverride.inputEl}
//                 onChange={(e) => setMessage(e.target.value)}
//                 type="text"
//                 name="message"
//                 id="message"
//                 placeholder="Example: You haven't visited what's up today"
//                 value={message}
//               />
//             </div>
//             <div className="d-flex justify-content-end">
//               <button
//                 onClick={(e) => sendMessage(e)}
//                 className={`btn-primary mt-3 py-3 px-3 d-flex align-items-center`}
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Sending message..." : "Send Message"}
//               </button>
//             </div>
//           </div>
//         </Card>
//       ) : null}
//       <div className="mt-4 p-0">
//         <Card className="h-inherit my-1">
//           <div className="px-2 pt-4 pb-3">
//             <p className="text-dark mb-2 px-2">Message History</p>
//             <Modal
//               className={cssModule.modal}
//               isOpen={modalOpen}
//               toggle={toggle}
//             >
//               <ModalBody>
//                 <h6 className={cssModule.messageHeaderInfo}>
//                   <b>Organization:</b> {messageData.organization}
//                 </h6>
//                 <h6 className={cssModule.messageHeaderInfo}>
//                   <b>From:</b> {messageData.fromEmail}
//                 </h6>
//                 <h6 className={cssModule.messageHeaderInfo}>
//                   <b>Date:</b> {messageData.date}
//                 </h6>
//                 <h6 className={cssModule.messageHeaderInfo}>
//                   <b>Recipient:</b> {messageData.recipient}
//                 </h6>
//                 <h6 className={cssModule.messageHeaderInfo}>
//                   <b>Subject:</b> {messageData.subject}
//                 </h6>
//                 <hr className={cssModule.horizontalRule} />
//                 <p className={cssModule.bodyText}>
//                   <b>{messageData.msg}</b>
//                 </p>
//               </ModalBody>
//             </Modal>
//             {reversed.map((msg) => {
//               const dateTime = new Date(msg.timestamp * 1000);
//               const usTimeFormat = new Intl.DateTimeFormat("en-US").format(
//                 dateTime
//               );
//               let dayOfWeek = dateTime.getDay();
//               dayOfWeek = returnWeekday(dayOfWeek);
//               const msgSub =
//                 msg.msg.length > 200
//                   ? `${msg.msg.substring(0, 46)} ...`
//                   : msg.msg;
//               return (
//                 <Card className="messageCard" key={_.uniqueId()}>
//                   {" "}
//                   <div onClick={() => maximizeMessage(msg, usTimeFormat)}>
//                     <h6
//                       className={cssModule.messageHeader}
//                     >{`${dayOfWeek}, ${usTimeFormat}`}</h6>
//                     <h5 className={cssModule.messageBody}>{msgSub}</h5>
//                   </div>
//                 </Card>
//               );
//             })}
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default UserMessage;
