const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },
    products: [mongoose.Schema({
        productId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Product',
        },
        amount: {
            type: Number,
            default: 1,
        },
    })],
    mainPrice: {
        type: Number,
        default: 0
    },
})

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart