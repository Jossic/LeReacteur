const today = new Date();

const displayDate = (date) => {
	const jour = date.getDate();
	let jourDeLaSemaine = '';
	let mois = '';
	const annee = date.getFullYear();
	switch (date.getMonth()) {
		case 0:
			mois = 'janvier';
			break;
		case 1:
			mois = 'février';
			break;
		case 2:
			mois = 'mars';
			break;
		case 3:
			mois = 'avril';
			break;
		case 4:
			mois = 'mai';
			break;
		case 5:
			mois = 'juin';
			break;
		case 6:
			mois = 'juillet';
			break;
		case 7:
			mois = 'aout';
			break;
		case 8:
			mois = 'septembre';
			break;
		case 9:
			mois = 'octobre';
			break;
		case 10:
			mois = 'novembre';
			break;
		case 11:
			mois = 'decembre';
			break;

		default:
			break;
	}
	switch (date.getDay()) {
		case 1:
			jourDeLaSemaine = 'lundi';
			break;
		case 2:
			jourDeLaSemaine = 'mardi';
			break;
		case 3:
			jourDeLaSemaine = 'mercredi';
			break;
		case 4:
			jourDeLaSemaine = 'jeudi';
			break;
		case 5:
			jourDeLaSemaine = 'vendredi';
			break;
		case 6:
			jourDeLaSemaine = 'samedi';
			break;
		case 7:
			jourDeLaSemaine = 'dimanche';
			break;
		default:
			break;
	}

	return `Nous sommes le ${jourDeLaSemaine} ${jour} ${mois} ${annee}`;
};

console.log(displayDate(today));
