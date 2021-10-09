const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let count = 0;
let isWin = false;
const initiateGame = () => {
	count = 0;
	isWin = false;
	rl.setPrompt('Quel est le nombre ? ');
	return Math.floor(Math.random() * 10001);
};

aleaNumber = initiateGame();

console.log(`aleaNumber =>`, aleaNumber);

do {
	rl.prompt();
	rl.on('line', (line) => {
		count++;
		line = Number(line);
		if (!isNaN(line) || line > 10000 || line <= 0) {
			if (line == aleaNumber) {
				console.log(
					`Bravo, vous avez trouvé le nombre mystère en ${count} coups !`
				);
				rl.setPrompt('Souhaitez-vous rejouer ? (yes - no)');
				rl.prompt();
				rl.on('line', (line2) => {
					if (line2 === 'yes') {
						aleaNumber = initiateGame();
						break
					} else {
						rl.close();
						process.exit(0);
					}
				}).on('close', () => {
					console.log(`Merci d'avoir joué`);
					process.exit(0);
				});
			} else if (line > aleaNumber) {
				console.log(`C'est moins !`);
				isWin = false;
			} else if (line < aleaNumber) {
				console.log(`C'est plus !`);
				isWin = false;
			}
		} else {
			console.log('Merci de renseigner un nombre entier, positif');
		}
		if (isWin) {
		}
		rl.prompt();
	}).on('close', () => {
		console.log(`Merci d'avoir joué`);
		process.exit(0);
	});
} while (isWin);
