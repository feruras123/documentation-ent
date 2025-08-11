/** @format */

// /** @format */

// import React, { useState } from 'react';
// import AppModal from '@components/AppModal';
// import Button from '@components/Buttons';
// import FeatherIcon from 'feather-icons-react';
// import SpreedSheet from '@assets/template.xlsx';

// function InviteModalBatch() {
//   const [fileName, setFileName] = useState('');
//   const upload = (e) => {
//     e.preventDefault();
//     if (e.target.files) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const data = e.target.result;
//         const workbook = xlsx.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0];
//         const myHeader = [
//           'assignedCounselor',
//           'name',
//           'grade',
//           null,
//           null,
//           null,
//           null,
//           'ethnicity',
//           'email',
//         ];
//         const worksheet = workbook.Sheets[sheetName];
//         const json = xlsx.utils.sheet_to_json(worksheet, {
//           header: myHeader,
//           blankrows: false,
//         });
//       };
//       setFileName(e.target.files[0].name);
//       reader.readAsArrayBuffer(e.target.files[0]);
//     }
//   };
//   return (
//     <AppModal name="inviteModalBatch">
//       <div className="auth__section d-flex flex-column text-dark-75">
//         <div className="px-3 mb-3">
//           <h5 className="fw-light fw-dark">+ Batch Upload</h5>
//         </div>
//         <div className="px-lg-5">
//           <p className="mb-3">
//             Batch upload allows you upload a spreedsheet having the accounts
//             informations of your users and send out invitations to them
//           </p>
//           <div className=" d-flex align-items- mb-3">
//             <FeatherIcon
//               icon="check-circle"
//               className="me-2"
//               size={30}
//               color="green"
//             />
//             <span className="p-0 m-0">
//               Please make sure the document matches K'Bro templates. if you do
//               not have this template. click{' '}
//               <a
//                 href={SpreedSheet}
//                 className="fw-medium text-link pointer"
//                 download
//               >
//                 here
//               </a>{' '}
//               to download it
//             </span>
//           </div>

//           <p className="">
//             upload will take a few seconds, please be patient while we setup
//             your accounts
//           </p>
//         </div>
//         <form action="" className="py-lg-2 px-lg-5 w-100 mb-3 ">
//           <div className="upload-btn-wrapper w-100 pointer">
//             <Button
//               type="button"
//               className="btn-light bg-white btn__xs w-100 pointer border-sm"
//             >
//               <FeatherIcon icon="paperclip" className="me-2" size={14} />
//               Browse this computer
//             </Button>
//             <input
//               onChange={upload}
//               type="file"
//               className="w-100 pointer"
//               name="myfile"
//             />
//           </div>
//           <span className="x-small">{fileName}</span>
//         </form>

//         <div className="d-flex ms-lg-5">
//           <button
//             className="btn__xs btn-light fw-medium text-center  me-3"
//             data-bs-dismiss="modal"
//             aria-label="Close"
//             onClick={() => history.push(PAGES_URL.NEW_CHILD)}
//           >
//             Cancel
//           </button>
//           <Button
//             className="btn__xs btn-primary fw-medium text-center"
//             data-bs-dismiss="modal"
//             aria-label="Close"
//             onClick={() => history.push(PAGES_URL.NEW_CHILD)}
//           >
//             Add Accounts
//           </Button>
//         </div>
//       </div>
//     </AppModal>
//   );
// }

// export default InviteModalBatch;
