const isPast = (dateJour, date) => {
	const dateConvert = new Date(date);
	if (dateJour.getTime() > dateConvert.getTime()) {
		return 'Date is past';
	} else {
		return 'Date is not past';
	}
};

console.log(isPast(new Date(), 'July, 14, 2019')); // Date is past
console.log(isPast(new Date(), 'July, 14, 2025')); // Date is not past
