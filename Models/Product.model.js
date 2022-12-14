const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    law: Boolean,
    image: String,
    description: String,
    buyCount: {
        type: Number,
        default: 0
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;