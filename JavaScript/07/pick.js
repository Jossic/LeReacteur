/*
  Description :
  Creates an object composed of the picked object properties.

  Arguments :
  1) The source object.
  2) The property paths to pick.

  Returns :
  The new object.
*/

// Début de votre code
const pick = (object, array) => {
	let newObj = {};
	for (const key in object) {
		if (array.includes(key)) {
			newObj[key] = object[key];
		}
		// console.log(`${key}: ${object[key]}`);
	}
	return newObj;
};

// Fin de votre code

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])); // Doit afficher { a: 1, c: 3 }
