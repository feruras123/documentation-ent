/** @format */

export default function nameValidator(str) {
	let mutatedStr = str.trimStart();
	mutatedStr = mutatedStr.trimEnd();
	mutatedStr = mutatedStr.split(" ");
	const strArr = mutatedStr.filter((item) => item);
	console.log(strArr.length);
	if (strArr.length < 2) {
		return false;
	}
	if (strArr.length === 2) {
		return mutatedStr;
	}
	return false;
}
