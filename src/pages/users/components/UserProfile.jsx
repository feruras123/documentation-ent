/** @format */

// /** @format */

// import React from "react";
// import Card from "@components/cards/Card";
// import { useSelector } from "react-redux";
// import EditProfile from "./EditProfile";
// import UserMessage from "./UserMessage";
// import profile from "../../../assets/img/Acorn.png";

// function UserProfile() {
//   const userData = useSelector((state) => state.activitySlice);

//   // eslint-disable-next-line consistent-return
//   function returnGender() {
//     // eslint-disable-next-line default-case
//     switch (userData.gender) {
//       case 1:
//         return "Male";
//       case 2:
//         return "Female";
//       case 6:
//         return "Non-Binary";
//       default:
//         return "Not Defined";
//     }
//   }

//   return (
//     <div className="container-fluid px-5 pt-4 pb-2">
//       <div className="row card-overflow">
//         <div
//           className="col-3"
//           style={{ maxHeight: "inherit", overflowY: "auto" }}
//         >
//           <Card className={`h-inherit my-1`}>
//             <div className="py-4 px-xxl-3">
//               <div className="d-flex justify-content-center mb-5">
//                 <div className="user-avatar rounded-xl p-3">
//                   <img src={profile} style={{ width: "125px" }} alt="" />
//                 </div>
//               </div>

//               <div className="px-3 mb-4">
//                 <EditProfile />
//               </div>
//             </div>
//           </Card>
//         </div>
//         <div
//           className="col-5"
//           style={{ maxHeight: "inherit", overflowY: "auto" }}
//         >
//           <Card className="h-inherit my-1">
//             <div className="py-4 pb-5 px-xxl-3">
//               <h5 className="mb-4">User Information</h5>
//               <div className="px-3 mb-4">
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Name:</p>
//                   <p className="col pr-0 text-dark mb-0">{`${userData.firstname} ${userData.lastName}`}</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Birth Date:</p>
//                   <p className="col pr-0 text-dark mb-0">{userData.birthday}</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Phone Number:</p>
//                   <p className="col pr-0 text-dark mb-0">{userData.phone}</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Email:</p>
//                   <p className="col pr-0 text-dark mb-0">{userData.email}</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Gender:</p>
//                   <p className="col pr-0 text-dark mb-0">{returnGender()}</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Ethnicity:</p>
//                   <p className="col pr-0 text-dark mb-0">{userData.email}</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Assigned Agent:</p>
//                   <p className="col pr-0 text-primary mb-0">
//                     {userData.assignedAgent}
//                   </p>
//                 </div>
//               </div>
//               <hr className="w-100 box-shadow" />
//               <h5 className="mb-4 mt-4">K&apos;Bro Profile</h5>
//               <div className="px-3 mb-4">
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">Username:</p>
//                   <p className="col pr-0 text-dark mb-0">{userData.nickName}</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">
//                     Anonymous Username: {userData.anonymousNick}
//                   </p>
//                   <p className="col pr-0 text-dark mb-0">doc</p>
//                 </div>
//                 <div className="d-flex mb-3">
//                   <p className="col-5 px-0 text-dark mb-0">
//                     Registration Date:
//                   </p>
//                   <p className="col pr-0 text-dark mb-0">
//                     {userData.registrationDate}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//         <UserMessage />
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
