const doop = (tab) => {
	if (
		!Number.isInteger(tab[0]) ||
		!Number.isInteger(tab[2]) ||
		tab.length < 2
	) {
		return 'ERROR';
	}

	if (tab[1] === '+') {
		return tab[0] + tab[2];
	} else if (tab[1] === '-') {
		return tab[0] - tab[2];
	} else if (tab[1] === '*') {
		return tab[0] * tab[2];
	}
};

console.log(doop([5, '+', 4])); // Affichera : 9
console.log(doop([9, '*', 2])); // Affichera : 18
console.log(doop([11, '-', 4])); // Affichera : 7
console.log(doop([-1, '*', 4])); // Affichera : -4
console.log(doop([10.1, '-', 2])); // Affichera : ERROR
console.log(doop([8])); // Affichera : ERROR
