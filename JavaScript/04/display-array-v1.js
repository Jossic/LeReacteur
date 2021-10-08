const displayArray = (tab) => {
	let str = '';
	for (let i = 0; i < tab.length; i++) {
		str += `${tab[i]} `;
	}
	return str;
};

const displayArray2 = (tab) => {
	return tab.join(' ');
};

console.log(displayArray(['Xavier', 'Farid', 'Kévin'])); // Affichera "Xavier Farid Kévin"
console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Affichera "Pomme Banane Abricot Cerise"
console.log(displayArray2(['Xavier', 'Farid', 'Kévin'])); // Affichera "Xavier Farid Kévin"
console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Affichera "Pomme Banane Abricot Cerise"
