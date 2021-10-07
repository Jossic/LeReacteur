const swapCase = (tableau) => {
	const monTab = tableau.map((tab) => {
		newStr = '';
		for (let i = 0; i < tab.length; i++) {
			if (tab[i] === tab[i].toUpperCase()) {
				newStr += tab[i].toLowerCase();
			} else {
				newStr += tab[i].toUpperCase();
			}
		}
		return newStr;
	});
	return monTab;
};

console.log(swapCase(['Hello', 'Le Reacteur'])); // Affichera : ["hELLO", "lE rEACTEUR"]
