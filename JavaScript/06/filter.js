/*
  Description :
  Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new filtered array.
*/

// Début de votre code
const filter = (array, func) => {
	const newArray = [];
	if (func) {
		if (Array.isArray(array)) {
			for (let i = 0; i < array.length; i++) {
				if (func(array[i])) {
					newArray.push(array[i]);
				}
			}
		}
	}

	return newArray;
};

// Fin de votre code

const isBigEnough = (value) => {
	if (value >= 10) {
		return true;
	}
	return false;
};

console.log(filter([12, 5, 8, 130, 44], isBigEnough)); // Doit afficher `[12, 130, 44]`

console.log(filter([1, 6, 173, 151])); // Doit afficher `[]`

console.log(filter(null, isBigEnough)); // Doit afficher `[]`
