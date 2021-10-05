const powerFunc = (num, power) => {
	let count = num;
	if (power < 0) {
		power = -power;
	}
	if (Number.isInteger(power)) {
		for (let i = 1; i < power; i++) {
			count *= num;
		}
	} else {
		return "Ce n'est pas un entier";
	}
	return count;
};

console.log(powerFunc(3, -3));
