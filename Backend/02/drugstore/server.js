import express from 'express';
import mongoose from 'mongoose';
import Product from './models/productModel.js';
const app = express();

mongoose.connect('mongodb://localhost:27017/students-app', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.post('/create', async (req, res) => {
	const { name, quantity } = req.body;

	try {
		const product = new Product({
			name,
			quantity: Number(quantity),
		});
		await product.save();
		res.status(201).json({
			product,
			message: 'Produit ajouté.',
		});
	} catch (error) {
		console.log(`error =>`, error);
	}
});
app.get('/', async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

app.post('/drugs/add', async (req, res) => {
	const { _id, quantity } = req.body;
	const product = await Product.findById(_id);

	if (product) {
		try {
			quantity &&
				(product.quantity =
					Number(product.quantity) + Number(quantity));

			const updatedProduct = await product.save();
			res.status(201).json({
				updatedProduct,
				message: 'Produit modifié.',
			});
		} catch (error) {
			console.log(`error =>`, error);
		}
	} else {
		res.status(404);
		throw new Error('Produit non trouvé');
	}
});

app.post('/drugs/remove', async (req, res) => {
	const { _id, quantity } = req.body;
	const product = await Product.findById(_id);

	if (product) {
		try {
			quantity &&
				(product.quantity =
					Number(product.quantity) - Number(quantity));

			const updatedProduct = await product.save();
			res.status(201).json({
				updatedProduct,
				message: 'Produit modifié.',
			});
		} catch (error) {
			console.log(`error =>`, error);
		}
	} else {
		res.status(404);
		throw new Error('Produit non trouvé');
	}
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server runnning in development on port ${PORT}...`);
});
