const isWeekend = (date) => {
	const dateConvert = new Date(date);
	if (dateConvert.getDay() === 0 || dateConvert.getDay() === 6) {
		return 'Weekend';
	} else {
		return 'not weekend';
	}
};

console.log(isWeekend('Nov 11 2019')); // "not weekend"
console.log(isWeekend('Dec 7 2019')); // "weekend"
