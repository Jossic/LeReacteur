const panda = {
	nom: 'bidule',
	prenom: 'machin',
	truc: 'uduuf',
	lead: [{ name: 'farid' }, { name: 'xavier' }],
};

for (let i = 0; i < panda.lead.length; i++) {
	console.log([panda.lead[i].name]);
}
