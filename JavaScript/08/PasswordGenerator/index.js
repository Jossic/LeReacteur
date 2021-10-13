import generator from 'generate-password';

const options = {
	length: 16,
	numbers: true,
	symbols: true,
	lowercase: true,
	uppercase: true,
};
const password = generator.generate(options);

const generatePass = (num) => {
	const array = [];
	for (let i = 0; i < num; i++) {
		array.push(generator.generate(options));
	}
	return array;
};

console.log(generatePass(5));

// 'uEyMTw32v9'
// console.log(password);
