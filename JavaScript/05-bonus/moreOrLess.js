const readline = require('readline'); // pour avoir accès au module `readline`
const rl = readline.createInterface(process.stdin, process.stdout); // précise l'interface d'entrée et l'interface de sortie. stdin et stdout représentent le terminal qui exécute le programme.
let num;
let count = 0;
const initGame = (params) => {
	count = 1;
	num = Math.floor(Math.random() * 100) + 1;
};

initGame();

const moreOrLess = () => {
	console.log(num);

	const onAnswer = (answer) => {
		if (Number(answer) === num) {
			console.log(
				`Bravo, vous avez trouvé le nombre mystère en ${count} coups !`
			);

			rl.question(
				'Souhaitez-vous recommancer ? (yes - no) ',
				(answer) => {
					if (answer === 'yes') {
						initGame();
						console.log('Nouveau numéro généré...');
						rl.question('Quel est le nombre mystère ? ', onAnswer);
					} else {
						console.log(`Merci d'avoir joué !`);
						rl.close();
					}
				}
			);
		} else if (Number(answer) > num) {
			count++;
			console.log("C'est moins !");
			rl.question('Quel est le nombre mystère ? ', onAnswer);
		} else if (Number(answer) < num) {
			count++;
			console.log("C'est plus !");
			rl.question('Quel est le nombre mystère ? ', onAnswer);
		}
	};
	rl.question('Quel est le nombre mystère ? ', onAnswer); // permet d'écouter les entrées de l'utilisateur
};

moreOrLess();
