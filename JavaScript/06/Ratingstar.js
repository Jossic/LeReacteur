console.log(ratingStar(5));
// Must returns "★★★★★"

console.log(ratingStar(3));
// Must returns "★★★☆☆"

console.log(ratingStar(2.5));
// Must returns "★★✪☆☆"

console.log(ratingStar(4.5));
// Must returns "★★★★✪"

console.log(ratingStar(0));
// Must returns "☆☆☆☆☆"

console.log(ratingStar());
// Must returns "Please provide a number."

console.log(ratingStar('3'));
// Must returns "Please provide a number."
