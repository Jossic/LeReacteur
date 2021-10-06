const box = (width, height) => {
	let str = '';

	for (let i = 0; i < height; i++) {
		str += '\n';
		for (let j = 0; j < width; j++) {
			if (i === height - 1 || i === 0) {
				if (j === width - 1 || j === 0) {
					str += 'o';
				} else {
					str += '-';
				}
			} else {
				if (j === width - 1 || j === 0) {
					str += '|';
				} else {
					str += ' ';
				}
			}
		}
	}

	return str;
};

console.log(box(4, 4));
