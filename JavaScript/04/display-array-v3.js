const displayArray = (tableau, opt) => {
	let str = '';
	if (opt) {
		for (let i = 0; i < tableau.length; i++) {
			if (i === tableau.length - 1) {
				str += `et ${tableau[i]} `;
			} else if (i === tableau.length - 2) {
				str += `${tableau[i]} `;
			} else {
				str += `${tableau[i]}, `;
			}
		}
	} else {
		for (let i = 0; i < tableau.length; i++) {
			str += `${tableau[i]} `;
		}
	}

	return str;
};

console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'], false)); // Affichera "Pomme Banane Abricot Cerise"
console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'], true)); // Affichera "Pomme, Banane, Abricot et Cerise"
