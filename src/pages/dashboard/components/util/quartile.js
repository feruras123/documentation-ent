/** @format */

function Array_Sum(t) {
	return t.reduce((a, b) => a + b, 0);
}

export function Array_Average(data) {
	return Array_Sum(data) / data.length;
}

function Array_Sort_Numbers(inputarray) {
	return inputarray.sort((a, b) => a - b);
}

function Quartile(dta, q) {
	const data = Array_Sort_Numbers(dta);
	const pos = (data.length - 1) * q;
	const base = Math.floor(pos);
	const rest = pos - base;
	if (data[base + 1] !== undefined) {
		return data[base] + rest * (data[base + 1] - data[base]);
	}
	return data[base];
}

export function Array_Stdev(tab) {
	let i;
	let j;
	let total = 0;
	let mean = 0;
	const diffSqredArr = [];
	for (i = 0; i < tab.length; i += 1) {
		total += tab[i];
	}
	mean = total / tab.length;
	for (j = 0; j < tab.length; j += 1) {
		// eslint-disable-next-line no-restricted-properties
		diffSqredArr.push((tab[j] - mean) ** 2);
	}
	return Math.sqrt(
		diffSqredArr.reduce((firstEl, nextEl) => firstEl + nextEl) / tab.length,
	);
}

export function Quartile_25(data) {
	return Quartile(data, 0.25);
}

export function Quartile_50(data) {
	return Quartile(data, 0.5);
}
export function Median(data) {
	return Quartile_50(data);
}

export function Quartile_75(data) {
	return Quartile(data, 0.75);
}
