const exOh = (str) => {
	let nbX = 0,
		nbO = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'x') {
			nbX++;
		} else if (str[i] === 'o') {
			nbO++;
		}
	}
	if (nbX === nbO) {
		return true;
	} else {
		return false;
	}
};

console.log(exOh('xooxxxxooxo'));
