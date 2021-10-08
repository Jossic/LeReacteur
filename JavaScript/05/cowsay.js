const str =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.';

const cow = `
         \\   ^__^ \n          \\  (oo)\\_______\n             (__)\\       )\\/\\o \n                 ||----w |\n                 ||     ||\n
`;
// Début de votre code
const cowsay = (str, max) => {
	let newStr = ' ---------------------------------------\n';
	for (let i = 1; i < str.length; i++) {
		if (i % max === 0) {
			// if (str[i] !== ' ') {
			// 	newStr += '-';
			// }
			if (i === max) {
				newStr += ' \\\n';
			} else {
				newStr += ' |\n';
			}
		} else if (i % max === 1) {
			// if (str[i] !== ' ') {
			// 	newStr += '-';
			// }
			if (i === 1) {
				newStr += '/ ' + str[i];
			} else {
				newStr += '| ' + str[i];
			}
		} else {
			newStr += str[i];
		}
	}
	newStr += '/\n ---------------------------------------';
	newStr += '\n' + cow;
	return newStr;
};

// Fin de votre code

console.log(cowsay(str, 39));
