const backspace = (str) => {
	let reverseStr = str.split('').reverse().join('');
	let newStr = '';
	for (let i = 0; i < reverseStr.length; i++) {
		if (reverseStr[i] === '@') {
			if (reverseStr[i + 1] === '@') {
				i = i + 3;
			} else {
				i = i + 1;
			}
		} else {
			newStr += reverseStr[i];
		}
	}
	return newStr.split('').reverse().join('');
};

console.log(backspace('Rer@ayu@@ctt@eupm@@r'));
// Must returns "Reacteur"

console.log(backspace('YOO@'));
// Must returns "YO"

console.log(backspace('@@@'));
// Must returns ""

console.log(backspace(''));
// Must returns ""
