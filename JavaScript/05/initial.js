/*
  Description :
  Gets all but the last element of array.

  Arguments :
  1) The array to query.
  
  Returns :
  The slice of array.
*/

// Début de votre code
const initial = (array) => {
	array.pop();
	return array;
};

// Fin de votre code

console.log(initial([1, 2, 3])); // Doit afficher `[1, 2]`
