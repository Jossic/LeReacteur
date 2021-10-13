import fetch from 'node-fetch';

const afficheFilm = async (nomFilm) => {
	const response = await fetch(
		`http://www.omdbapi.com/?t=${nomFilm}&apikey=cf8af582`
	);
	const data = await response.json();
	console.log(`Name =>`, data.Title);
	console.log(`Year =>`, data.Year);
	console.log(`Genre =>`, data.Genre);
	console.log(`Actors =>`, data.Actors);
	console.log('----------------------------');
};

afficheFilm('A Space Odyssey');
afficheFilm('Interstellar');
afficheFilm('Inception');
