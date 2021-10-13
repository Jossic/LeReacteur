import fetch from 'node-fetch';
import _ from 'lodash';

const getNames = async (total, initCurrency, finalCurrency, func) => {
	const response = await fetch(
		`https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&rows=10000&sort=nombre&refine.annee=2020`
	);
	const data = await response.json();
	// console.log(`data =>`, data.records[0].fields.nombre);
	// _.sortBy(data.records.fields.nombre_total_cumule);
	const array = _.sortBy(data.records, (o) => {
		return o.fields.nombre_total_cumule;
	});
	const slicedArray = array
		.reverse()
		.filter((elt) => elt.fields.sexe === 'M')
		.slice(0, 10);
	slicedArray.map((nom) => {
		nom.fields.prenoms;
		console.log(`nom.fields.prenoms =>`, nom.fields.prenoms);
	});
};

getNames();
