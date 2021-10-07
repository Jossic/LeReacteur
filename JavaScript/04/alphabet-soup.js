const alphabetSoup = (str) => {
	return str.split('').sort().join('');
};

console.log(alphabetSoup('hello')); // Affichera "ehllo"
console.log(alphabetSoup('thereactor')); // Affichera "aceehorrtt"
console.log(alphabetSoup('hooplah')); // Affichera "ahhloop"
