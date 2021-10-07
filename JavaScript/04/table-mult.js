const tableMult = (num) => {
	if (num < 0) {
		return `Vous devez entrer un nombre positif`;
	} else if (num === NaN) {
		return `Vous devez entrer un nombre`;
	} else if (!Number.isInteger(num)) {
		return `Vous devez entrer un nombre entier`;
	}
	let chaine = '';
	for (let i = 1; i < 11; i++) {
		chaine += `${i} * ${num} = ${i * num} \n`;
	}
	return chaine;
};

console.log(tableMult(9));
console.log(tableMult(-1));
console.log(tableMult('ABC'));
console.log(tableMult(1.1));
