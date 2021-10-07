const timeConvert = (time) => {
	let heures = Math.floor(time / 3600);
	let minutes = Math.floor((time - heures * 3600) / 60);
	let secondes = time - heures * 3600 - minutes * 60;
	heures < 10 && (heures = `0${heures}`);
	minutes < 10 && (minutes = `0${minutes}`);
	secondes < 10 && (secondes = `0${secondes}`);

	return `${heures}:${minutes}:${secondes}`;
};

console.log(timeConvert(126)); // Affichera "00:02:06"
console.log(timeConvert(4804)); // Affichera "01:20:04"
