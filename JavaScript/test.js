const panda = {
	nom: 'bidule',
	prenom: 'machin',
	truc: 'uduuf',
};

const keys = Object.keys(panda);
console.log(`keys =>`, keys);
for (let i = 0; i < keys.length; i++) {
	console.log(`panda[keys[i]] =>`, panda[keys[i]]);
}
