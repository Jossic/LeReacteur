let etoile = '★';
let demi = '✪';
let sansEtoile = '☆';

const ratingStar = (num) => {
	if (isNaN(num) || typeof num !== 'number') {
		return 'Please provide a number.';
	} else {
		if (num === 0) {
			return '☆☆☆☆☆';
		} else if (num === 0.5) {
			return '✪☆☆☆☆';
		} else if (num === 1) {
			return '★☆☆☆☆';
		} else if (num === 1.5) {
			return '★✪☆☆☆';
		} else if (num === 2) {
			return '★★☆☆☆';
		} else if (num === 2.5) {
			return '★★✪☆☆';
		} else if (num === 3) {
			return '★★★☆☆';
		} else if (num === 3.5) {
			return '★★★✪☆';
		} else if (num === 4) {
			return '★★★★☆';
		} else if (num === 4.5) {
			return '★★★★✪';
		} else if (num === 5) {
			return '★★★★★';
		}
	}
};

console.log(ratingStar(5));
// Must return "★★★★★"

console.log(ratingStar(3));
// Must return "★★★☆☆"

console.log(ratingStar(2.5));
// Must return "★★✪☆☆"

console.log(ratingStar(4.5));
// Must return "★★★★✪"

console.log(ratingStar(0));
// Must return "☆☆☆☆☆"

console.log(ratingStar());
// Must return "Please provide a number."

console.log(ratingStar('3'));
// Must return "Please provide a number."
