/** @format */

// /** @format */
// /* eslint-disable array-callback-return */
// /* eslint-disable consistent-return */

// import React from "react";
// import Card from "@components/cards/Card";
// import { useSelector } from "react-redux";
// import OkLineChart from "./subComponents/OkLineChart";
// import UserMessage from "./UserMessage";
// // eslint-disable-next-line no-unused-vars
// import UserActivityHeader from "./subComponents/UserActivityHeader";
// // eslint-disable-next-line no-unused-vars
// import OkCharts from "./subComponents/OkCharts";
// import cssModule from "./userProfileCSS.module.css";

// function UserActivity() {
//   const userData = useSelector((state) => state.activitySlice);

//   let dta = JSON.parse(userData.scoreArr);
//   console.log(userData.iokData);
//   if (dta) {
//     switch (dta.length) {
//       case 0: {
//         dta = JSON.stringify([0, 0, 0, 0]);
//         break;
//       }
//       case 1: {
//         dta = JSON.stringify([...dta, 0, 0, 0]);
//         break;
//       }
//       case 2: {
//         dta = JSON.stringify([...dta, 0, 0]);
//         break;
//       }
//       case 3: {
//         dta = JSON.stringify([...dta, 0]);
//         break;
//       }
//       case 4: {
//         dta = JSON.stringify([...dta]);
//         break;
//       }
//       default:
//         dta = "[0, 0, 0, 0]";
//         break;
//     }
//   } else {
//     dta = "[0, 0, 0, 0]";
//   }

//   return (
//     <div className="container-fluid px-5 pt-4 pb-2">
//       <div
//         className="row card-overflow"
//         // style={{
//         //   height: "calc(100vh - 170px)",
//         //   maxHeight: "calc(100vh - 170px)",
//         //   overflowY: "hidden",
//         // }}
//       >
//         <div
//           className="col-8"
//           style={{ maxHeight: "inherit", overflowY: "auto" }}
//         >
//           <UserActivityHeader
//             firstName={userData.firstname}
//             lastName={userData.lastName}
//             age={userData.age}
//             grade={userData.grade}
//           />
//           <Card className={`h-inherit my-1 ${cssModule.circleCard}`}>
//             <OkCharts score={userData.score} scoreArr={dta} />
//           </Card>
//           <Card className={`h-inherit my-1 ${cssModule.lineChartCard}`}>
//             <OkLineChart iokData={userData.iokData} />
//           </Card>
//         </div>
//         <UserMessage recipientId={userData.entityId} />
//       </div>
//     </div>
//   );
// }

// export default UserActivity;
