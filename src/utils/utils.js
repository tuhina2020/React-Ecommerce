export function generateRandomLowerThan(size=1) {
	return Math.floor(Math.random()*size);
}

export function generateMultiple(number=10) {
	let arr = [];
	for(var i =0; i < number, i++) {
		let num = generateRandomLowerThan(i);
		arr.push(i);
	}
	return arr;
}