const displayArray = (tab) => {
	let str = '';
	for (let i = 0; i < tab.length; i++) {
		str += `${tab[i]} `;
	}
	return str;
};

console.log(displayArray(['Xavier', 'Farid', 'Kévin'])); // Affichera "Xavier Farid Kévin"
console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Affichera "Pomme Banane Abricot Cerise"
