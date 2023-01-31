const mongoose = require('mongoose');
const MongoContainer = require('../../Contenedores/ContenedorMongoDb');

const CartSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  }],
  total: {
    type: Number,
    required: true
  }
});

class MongoCartAdapter extends MongoContainer {
  constructor() {
    super();
    this.Cart = mongoose.model('Cart', CartSchema);
  }

  createCart(cartData) {
    const cart = new this.Cart(cartData);
    return cart.save();
  }

  getCart(id) {
    return this.Cart.findById(id).populate('products');
  }

  updateCart(id, cartData) {
    return this.Cart.findByIdAndUpdate(id, cartData, { new: true }).populate('products');
  }

  deleteCart(id) {
    return this.Cart.findByIdAndDelete(id);
  }
}

module.exports = MongoCart;