const FirebaseContainer = require('../../Contenedores/ContenedorFireBase');

class FirebaseProduct extends FirebaseContainer {
  async createProduct(productData) {
    return this.createDocument('products', productData);
  }

  getProduct(id) {
    return this.getDocument('products', id);
  }

  updateProduct(id, productData) {
    return this.updateDocument('products', id, productData);
  }

  deleteProduct(id) {
    return this.deleteDocument('products', id);
  }
}

module.exports = FirebaseProduct;