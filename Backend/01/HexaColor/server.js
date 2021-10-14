import express from 'express';
import bodyParser from 'body-parser';

import colors from './colors.json';

const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.get('/', (req, res) => {
	if (colors[req.query.color]) {
		res.json({ color: req.query.color, hexa: colors[req.query.color] });
	} else {
		res.json({ message: "Cette couleur n'existe pas" });
	}
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server runnning in development on port ${PORT}...`);
});
