const pyramid = (size) => {
	let str = '';
	for (let i = 0; i < size; i++) {
		for (var k = 1; k <= 2 * i + 1; k++) {
			str += 'X';
		}
		str += '\n';
	}

	return str;
};

console.log(pyramid(5));
