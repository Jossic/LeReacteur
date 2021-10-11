const getDomainName = (url) => {
	let premierPoint = url.indexOf('.');
	let dernierPoint = url.lastIndexOf('.');
	if (!url) {
		return 'Please return an URL.';
	} else return url.slice(premierPoint + 1, dernierPoint);
};

console.log(getDomainName('https://www.lereacteur.io'));
console.log(getDomainName('https://www.twitch.tv/stevenpersia'));
console.log(getDomainName('http://www.oldwebsite.org/'));
console.log(getDomainName('www.google.com'));
// console.log(getDomainName());
