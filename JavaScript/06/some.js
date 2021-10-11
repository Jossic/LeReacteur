/*
  Description :
  Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  Returns true if any element passes the predicate check, else false.
*/

// Début de votre code
const some = (array, func) => {
	arrayTest = [];
	if (Array.isArray(array)) {
		if (func) {
			for (let i = 0; i < array.length; i++) {
				arrayTest.push(func(array[i]));
			}
			if (arrayTest.includes(true)) {
				return true;
			} else {
				return false;
			}
		} else return false;
	} else return false;
};

// Fin de votre code

const isLargerThanTen = (element) => {
	if (element >= 10) {
		return true;
	}
	return false;
};

console.log(some([10, 9, 8], isLargerThanTen)); // Doit afficher `true`
console.log(some([1, 4, 2], isLargerThanTen)); // Doit afficher `false`
