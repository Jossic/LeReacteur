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

const displayArray2 = (tableau) => {
	const popped = tableau.pop();
	return tableau.join(', ') + ' et ' + popped;
};

console.log(displayArray(['Xavier', 'Farid', 'Kévin'])); // Affichera "Xavier, Farid et Kévin"
console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Affichera "Pomme, Banane, Abricot et Cerise"

console.log(displayArray2(['Xavier', 'Farid', 'Kévin'])); // Affichera "Xavier, Farid et Kévin"
console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Affichera "Pomme, Banane, Abricot et Cerise"
