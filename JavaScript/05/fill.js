/*
  Description :
  Fills elements of array with value.

  Arguments :
  1) The array with values.
  2) The value to fill array with.

  Returns :
  The filled array.
*/

// Début de votre code
const fill = (array, char) => {
	for (let i = 0; i < array.length; i++) {
		array[i] = char;
	}
	return array;
};

// Fin de votre code

console.log(fill([1, 2, 3], 'a')); // Doit afficher `['a', 'a', 'a']`
console.log(fill(['Hello', 'World'], 'Bonjour')); // Doit afficher `["Bonjour", "Bonjour"]`
