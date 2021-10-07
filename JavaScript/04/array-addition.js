const arrayAddition = (tab) => {
	const filteredTab = tab.sort((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < filteredTab.length - 1; i++) {
		count += filteredTab[i];
	}

	if (count === filteredTab[filteredTab.length - 1]) {
		return true;
	} else return false;
};

console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
