const lowerUpper = (texte) => {
	const tab = texte.split();
	const monTab = tab.map((tab) => {
		newStr = '';
		for (let i = 0; i < tab.length; i++) {
			if (i % 2 === 0) {
				if (tab[i] === tab[i].toUpperCase()) {
					newStr += tab[i].toLowerCase();
				} else {
					newStr += tab[i].toUpperCase();
				}
			} else {
				newStr += tab[i];
				if (tab[i] === ' ') {
					newStr += tab[i + 1].toLowerCase();
				}
			}
		}

		return newStr;
	});
	return monTab;
};

console.log(lowerUpper('La ville de Paris')); // Affichera : "lA vIlLe dE pArIs"
