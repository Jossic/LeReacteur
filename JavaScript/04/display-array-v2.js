const displayArray = (tableau) => {
	let str = '';
	for (let i = 0; i < tableau.length; i++) {
		if (i === tableau.length - 1) {
			str += `et ${tableau[i]} `;
		} else if (i === tableau.length - 2) {
			str += `${tableau[i]} `;
		} else {
			str += `${tableau[i]}, `;
		}
	}
	return str;
};

console.log(displayArray(['Xavier', 'Farid', 'Kévin'])); // Affichera "Xavier, Farid et Kévin"
console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Affichera "Pomme, Banane, Abricot et Cerise"
