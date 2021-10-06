/*
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

// Début de votre code
const generateString = (height) => {
	let str = '';
	for (let i = 0; i < height; i++) {
		str += 'o---o\n';
	}
	return str;
};

// Fin de votre code

const height = 4;
console.log(generateString(height));
