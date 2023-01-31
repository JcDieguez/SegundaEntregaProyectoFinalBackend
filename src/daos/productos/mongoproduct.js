const MongoContainer = require('../../Contenedores/ContenedorMongoDb');


class MongoProduct extends MongoContainer {
  createProduct(productData) {
    const product = new this.Product(productData);
    return product.save();
  }

  getProduct(id) {
    return this.Product.findById(id);
  }

  updateProduct(id, productData) {
    return this.Product.findByIdAndUpdate(id, productData, { new: true });
  }

  deleteProduct(id) {
    return this.Product.findByIdAndDelete(id);
  }
}

module.exports = MongoProduct;