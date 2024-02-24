function findNumber(number) {
	const includeNumb = [];
	const toString = number.toString();

	for (let i = 0; i < toString.length; i++) {
		includeNumb.push(toString[i]);
	}

	const counts = {};
	for (let i = 0; i < includeNumb.length; i++) {
		const digit = includeNumb[i];
		counts[digit] = (counts[digit] || 0) + 1;
	}

	return counts;
}

console.log(findNumber(50081234513));
