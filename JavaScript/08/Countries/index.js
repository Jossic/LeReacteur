import fetch from 'node-fetch';

const response = await fetch(
	'https://countriesnow.space/api/v0.1/countries/capital'
);
const data = await response.json();

console.log(`data =>`, data.data);

data.data.map((pays) => {
	pays.capital
		? console.log(`${pays.name} => ${pays.capital}`)
		: console.log(`${pays.name} => N/A`);
});
