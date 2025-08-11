/** @format */

import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

function Loader() {
	const override = `
    display: flex;
    justify-content: center;
    border-color: #16a085;
    margin-top: 20px;
    margin-bottom: 20px;
  `;
	return <BeatLoader css={override} size={10} color="#16a085" />;
}

export default Loader;
