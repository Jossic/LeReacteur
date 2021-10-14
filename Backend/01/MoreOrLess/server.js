import express from 'express';

const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

let alea = Math.floor(Math.random() * 100) + 1;

app.get('/', (req, res) => {
	if (req.query.num < 0 || req.query.num > 100) {
		res.json({ message: 'the number must be between 0 and 100' });
	} else if (req.query.num == alea) {
		res.json({ message: 'Bravo' });
	} else if (req.query.num > alea) {
		res.json({ message: "C'est moins" });
	} else if (req.query.num < alea) {
		res.json({ message: "C'est plus" });
	} else if (isNaN(req.query.num)) {
		res.json({ message: 'no number was sent' });
	}

	// res.json({ message: "Cette couleur n'existe pas" });
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server runnning in development on port ${PORT}...`);
});
