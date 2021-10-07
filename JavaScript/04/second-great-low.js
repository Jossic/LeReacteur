const secondGreatLow = (tab) => {
	const filteredTab = tab.sort((a, b) => a - b);

	if (tab.length === 1) {
		return tab;
	} else if (tab.length === 2) {
		return tab;
	}
	const newTab = [];
	for (let i = 0; i < filteredTab.length; i++) {
		if (typeof filteredTab[i] === 'string') {
			return 'ERROR';
		}
	}

	newTab.push(filteredTab[1]);
	newTab.push(filteredTab[tab.length - 2]);

	return newTab;
};

console.log(secondGreatLow([1, 42, 42, 180])); // Affichera [42, 42]
console.log(secondGreatLow([4, 90])); // Affichera [90, 4]
console.log(secondGreatLow([7, 7, 12, 98, 106])); // Affichera [12, 98]
console.log(secondGreatLow([8])); // Affichera [8, 8]
console.log(secondGreatLow([-12, -12, -12])); // Affichera [-12, -12]
console.log(secondGreatLow(['ABC', 9, 4, 10])); //  Affichera : ERROR
