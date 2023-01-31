const FirebaseContainer = require('../../Contenedores/ContenedorFireBase');

class FirebaseCart extends FirebaseContainer {
  async createCart(cartData) {
    return this.createDocument('carts', cartData);
  }

  getCart(id) {
    return this.getDocument('carts', id);
  }

  updateCart(id, cartData) {
    return this.updateDocument('carts', id, cartData);
  }

  deleteCart(id) {
    return this.deleteDocument('carts', id);
  }
}

module.exports = FirebaseCart;