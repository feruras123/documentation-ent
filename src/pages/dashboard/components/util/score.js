/** @format */
import { Quartile_25, Quartile_50, Quartile_75 } from "./quartile";

function score(arr) {
	const holdingArr = [];
	for (let i = 0; i < arr.length; i++) {
		holdingArr.push(arr[i].status);
	}
	return {
		min: Math.min(...holdingArr),
		max: Math.max(...holdingArr),
		quant25: Quartile_25(holdingArr),
		quant75: Quartile_75(holdingArr),
		quant50: Quartile_50(holdingArr),
	};
}

export default score;
