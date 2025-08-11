/** @format */

// /** @format */

// import React from 'react';
// import Switch from 'react-ios-switch';
// import _ from 'lodash';
// import ClipLoader from 'react-spinners/ClipLoader';
// // eslint-disable-next-line no-unused-vars
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import permissionSettings from './permissionSettings.module.css';

// import { setUpdateUsers } from '@redux/settingsUpdateUsersSlice';
// import { setGlobalComms } from '@redux/settingsGlobalCommsSlice';
// import { setPublishReports } from '@redux/settingsPublishReports';
// import { setNotifications } from '@redux/settingsNotifications';
// import { srv } from '../../../srvConfig';

// // eslint-disable-next-line no-unused-vars
// function UpdateUserSettings({ currentUser, settingsArr, headline }) {
//   const dispatch = useDispatch();
//   const [settingState, setSettingState] = React.useState(settingsArr);
//   const sliderRef = React.useCallback((node) => {
//     if (node) {
//       let sliderNodes = document.querySelectorAll(
//         'span.permissionSettings_settingsSlider__1gIML',
//       );
//       sliderNodes = Array.from(sliderNodes);
//       sliderNodes.forEach((sliderNode) => {
//         // eslint-disable-next-line no-param-reassign
//         sliderNode.style.height = '22px';
//         // eslint-disable-next-line no-param-reassign
//         sliderNode.style.width = '39px';
//         const triggerButton = sliderNode.firstElementChild;
//         triggerButton.style.height = '20px';
//         triggerButton.style.width = '20px';
//       });
//     }
//   });

//   // eslint-disable-next-line no-unused-vars
//   function handleChange(e, setting, index) {
//     // eslint-disable-next-line default-case
//     // eslint-disable-next-line no-unused-vars
//     const mutableState = settingState.map((s) => ({ ...s }));

//     // eslint-disable-next-line default-case
//     switch (setting.msg) {
//       case 'Add User Profiles': {
//         const payload = {
//           id: currentUser.id,
//           setting: 'addUserProfiles',
//           turnedOn: e,
//         };
//         mutableState[index].turnedOn = e;
//         setSettingState(() => mutableState);

//         dispatch(setUpdateUsers(mutableState));
//         axios.post(`${srv}/editDashboardSettings`, payload).then((res) => {
//           if (res.data.addUserProfiles !== settingState[index].turnedOn) {
//             mutableState[index].turnedOn = res.data.addUserProfiles;
//             setSettingState(() => mutableState);
//             dispatch(setUpdateUsers(mutableState));
//           }
//         });
//         break;
//       }
//       case 'Delete User Profiles': {
//         const payload = {
//           id: currentUser.id,
//           setting: 'deleteUserProfiles',
//           turnedOn: e,
//         };
//         mutableState[index].turnedOn = e;
//         setSettingState(() => mutableState);
//         dispatch(setUpdateUsers(mutableState));
//         axios.post(`${srv}/editDashboardSettings`, payload).then((res) => {
//           if (res.data.deleteUserProfiles !== settingState[index].turnedOn) {
//             mutableState[index].turnedOn = res.data.deleteUserProfiles;
//             setSettingState(() => mutableState);
//             dispatch(setUpdateUsers(mutableState));
//           }
//         });
//         break;
//       }
//       case 'Edit User Profiles': {
//         const payload = {
//           id: currentUser.id,
//           setting: 'editUserProfiles',
//           turnedOn: e,
//         };
//         mutableState[index].turnedOn = e;
//         setSettingState(() => mutableState);
//         dispatch(setUpdateUsers(mutableState));
//         axios.post(`${srv}/editDashboardSettings`, payload).then((res) => {
//           if (res.data.editUserProfiles !== settingState[index].turnedOn) {
//             mutableState[index].turnedOn = res.data.editUserProfiles;
//             setSettingState(() => mutableState);
//             dispatch(setUpdateUsers(mutableState));
//           }
//         });
//         break;
//       }
//       case 'Message Users Directly': {
//         const payload = {
//           id: currentUser.id,
//           setting: 'messageUsers',
//           turnedOn: e,
//         };
//         mutableState[index].turnedOn = e;
//         setSettingState(() => mutableState);
//         dispatch(setGlobalComms(mutableState));
//         axios.post(`${srv}/editDashboardSettings`, payload).then((res) => {
//           if (res.data.messageUsers !== settingState[index].turnedOn) {
//             mutableState[index].turnedOn = res.data.messageUsers;
//             setSettingState(() => mutableState);
//             dispatch(setGlobalComms(mutableState));
//           }
//         });
//         break;
//       }
//       case 'Export and Upload Files': {
//         const payload = {
//           id: currentUser.id,
//           setting: 'uploadAndExport',
//           turnedOn: e,
//         };
//         mutableState[index].turnedOn = e;
//         setSettingState(() => mutableState);
//         dispatch(setPublishReports(mutableState));
//         axios.post(`${srv}/editDashboardSettings`, payload).then((res) => {
//           if (res.data.uploadAndExport !== settingState[index].turnedOn) {
//             mutableState[index].turnedOn = res.data.uploadAndExport;
//             setSettingState(() => mutableState);
//             dispatch(setPublishReports(mutableState));
//           }
//         });
//         break;
//       }
//       case 'Receive notifications in real-time': {
//         const payload = {
//           id: currentUser.id,
//           setting: 'realTimeNotifications',
//           turnedOn: e,
//         };
//         mutableState[index].turnedOn = e;
//         setSettingState(() => mutableState);
//         dispatch(setNotifications(mutableState));
//         axios.post(`${srv}/editDashboardSettings`, payload).then((res) => {
//           if (res.data.realTimeNotifications !== settingState[index].turnedOn) {
//             mutableState[index].turnedOn = res.data.realTimeNotifications;
//             setSettingState(() => mutableState);
//             dispatch(setNotifications(mutableState));
//           }
//         });
//         break;
//       }
//       case 'Update Users': {
//         const payload = {
//           id: currentUser.id,
//           setting: 'updateNotifications',
//           turnedOn: e,
//         };
//         mutableState[index].turnedOn = e;
//         setSettingState(() => mutableState);
//         dispatch(setNotifications(mutableState));
//         axios.post(`${srv}/editDashboardSettings`, payload).then((res) => {
//           if (res.data.updateNotifications !== settingState[index].turnedOn) {
//             mutableState[index].turnedOn = res.data.updateNotifications;
//             setSettingState(() => mutableState);
//             dispatch(setNotifications(mutableState));
//           }
//         });
//         break;
//       }
//     }
//   }

//   return (
//     <div className={permissionSettings.container}>
//       <p className="text-muted small">{headline}</p>

//       {settingState.map((setting, i) => (
//         <div key={_.uniqueId()} className={permissionSettings.subContainer}>
//           <div className={permissionSettings.leftEntry}>
//             <h6 className="text-muted small">{setting.msg}</h6>
//           </div>
//           <div className={permissionSettings.rightEntry}>
//             {setting.turnedOn === null ? (
//               <ClipLoader color="green" loading size={20} />
//             ) : (
//               <Switch
//                 ref={sliderRef}
//                 checked={setting.turnedOn}
//                 className={permissionSettings.settingsSlider}
//                 disabled={undefined}
//                 handleColor="white"
//                 name={undefined}
//                 offColor="white"
//                 onChange={(e) => handleChange(e, setting, i)}
//                 onColor="rgb(76, 217, 100)"
//                 pendingOffColor={undefined}
//                 pendingOnColor={undefined}
//                 readOnly={undefined}
//               />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UpdateUserSettings;
