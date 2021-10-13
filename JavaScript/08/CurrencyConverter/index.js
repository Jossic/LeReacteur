import fetch from 'node-fetch';

const currencyConverter = async (total, initCurrency, finalCurrency, func) => {
	const response = await fetch(
		`http://data.fixer.io/api/latest?access_key=c8a00167732c3b46f50cc3a575a6bece&base=${initCurrency.toUpperCase()}`
	);
	const data = await response.json();
	func(
		`${total} ${initCurrency} > ${(
			total * data.rates[finalCurrency.toUpperCase()]
		).toFixed(2)} ${finalCurrency} (taux de change appliqué : ${
			data.rates[finalCurrency.toUpperCase()]
		})`
	);
};

currencyConverter(15, 'eur', 'usd', (message) => {
	console.log(message); // Devra afficher : `15 EUR > 18.34 USD (taux de change appliqué : 1.223)`.
});
