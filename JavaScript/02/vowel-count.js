const vowelCount = (str) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (
			str[i] === 'a' ||
			str[i] === 'i' ||
			str[i] === 'u' ||
			str[i] === 'e' ||
			str[i] === 'o' ||
			str[i] === 'y'
		) {
			count++;
		}
	}
	return count;
};

console.log(vowelCount('thereactor'));
