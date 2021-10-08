const passwordGen = (size) => {
	let pass = '';
	let characters =
		'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
	let charLength = characters.length;
	for (let i = 0; i < size; i++) {
		pass += characters.charAt(Math.floor(Math.random() * charLength));
	}
	return pass;
};

console.log(passwordGen(48)); // Df1jUNaQ
console.log(passwordGen(12)); // digVQ4zy
