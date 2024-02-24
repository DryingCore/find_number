function findNumber(number) {
	const includeNumb = [];
	const toString = number.toString();

	for (let i = 0; i < toString.length; i++) {
		includeNumb.push(toString[i]);
	}

	const counts = {};
	for (let i = 0; i < includeNumb.length; i++) {
		const digits = includeNumb[i];
		counts[digits] = (counts[digits] || 0) + 1;
	}

	return counts;
}

console.log(findNumber(50081234513));
