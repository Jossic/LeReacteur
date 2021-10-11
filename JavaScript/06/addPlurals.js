const addPlurals = (array) => {
	const input = ['cheval', 'sport', 'animal', 'formateur', 'journal'];
	const output = ['chevaux', 'sports', 'animaux', 'formateurs', 'journaux'];
	let index = (i) => input.indexOf(i);
	let translate = (tr) => (index(tr) > -1 ? output[index(tr)] : tr);
	return array.map(translate);
};

const words = ['cheval', 'sport', 'animal', 'formateur', 'journal'];

console.log(addPlurals(words));

// const rot13 = (str) => {
// 	const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// 	const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
// 	let index = (i) => input.indexOf(i);
// 	let translate = (tr) => (index(tr) > -1 ? output[index(tr)] : tr);
// 	return str.split('').map(translate).join('');
// };
