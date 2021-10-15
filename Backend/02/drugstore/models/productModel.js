import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
	{
		name: { type: String },
		quantity: { type: Number },
	},
	{
		timestamps: true,
	}
);

const Product =
	mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
