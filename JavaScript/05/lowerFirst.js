/*
  Description :
  Converts the first character of string to lower case.

  Arguments :
  1) The string to convert.

  Returns :
  The converted string.
*/

// Début de votre code
const lowerFirst = (str) => {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (i === 0) {
			newStr += str[i].toLowerCase();
		} else {
			newStr += str[i];
		}
	}
	return newStr;
};

// Fin de votre code

console.log(lowerFirst('Fred')); // Doit afficher `fred`

console.log(lowerFirst('FRED')); // Doit afficher `fRED`
