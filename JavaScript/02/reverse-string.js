const reverseString = (str) => {
	let reverse;
	for (let i = str.length; i >= 0; i--) {
		reverse += str[i];
	}
	console.log(reverse);
};

reverseString('I Love Code');
