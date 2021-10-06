/*
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

// Début de votre code
for (let i = 0; i < num; i++) {
	if (i === num - 1) {
		str += 'o';
	} else {
		str += '-';
	}
}
// Fin de votre code

const height = 4;
console.log(generateString(height));
