/** @format */

// /** @format */

// import React from "react";
// import { Modal, Progress } from "reactstrap";
// import RingLoader from "react-spinners/RingLoader";
// import { css } from "@emotion/react";
// import cssModule from "./cssModule.module.css";

// function LoadingModal({ percentage, message }) {
//   const override = css`
//     margin: 0 auto;
//     align-self: center;
//   `;
//   return (
//     <div className={cssModule.container}>
//       <Modal
//         contentClassName={cssModule.modalContent}
//         className={cssModule.modalOverride}
//         isOpen={true}
//       >
//         <h5 className={cssModule.headline}>Please wait...</h5>
//         <RingLoader css={override} color={"grey"} loading={true} size={70} />
//         <h5 className={cssModule.statusMessage}>{message}</h5>
//         <Progress color="info" value={percentage} />
//       </Modal>
//     </div>
//   );
// }

// export default LoadingModal;
