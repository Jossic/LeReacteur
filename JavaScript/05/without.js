/*
  Description :
  Creates an array excluding all given values.

  Arguments :
  1) The array to inspect.
  2) The values to exclude.

  Returns :
  The new array of filtered values.
*/

// Début de votre code
const without = (array, exclude) => {
	const excludeSet = new Set(exclude);
	return array.filter((toFilter) => {
		return !excludeSet.has(toFilter);
	});
};

// Fin de votre code

console.log(
	without([2, 1, 2, 3, 4, 5, 2, 1, 8, 4, 6, 12, 54], [1, 2, 8, 6, 12, 54])
); // Doit afficher `[3]`
