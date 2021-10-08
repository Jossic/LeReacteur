const rot13 = (str) => {
	const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
	let index = (i) => input.indexOf(i);
	let translate = (tr) => (index(tr) > -1 ? output[index(tr)] : tr);
	return str.split('').map(translate).join('');
};

console.log(rot13('abc')); // nop
console.log(rot13('My horse is Amazing.')); // Zl ubefr vf Nznmvat.
console.log(rot13('AkjhZ zLKIJz , 23y')); // NxwuM mYXVWm , 23l
console.log(rot13('-12')); // -12
