const config = require('../../utils/config');
const MongoProduct = require('../daos/productos/mongoproduct');
const MongoCart = require('../../src/daos/carritos/mongocarrito');
const FirebaseProduct = require('../daos/productos/firebaseproduct');
const FirebaseCart = require('../../src/daos/carritos/firebasecarrito');
let productDao;
let cartDao;

if (process.env.STORAGE_TYPE === 'mongo') {
  const mongoProduct = new MongoProduct(config.mongo.url);
  const mongoCart = new MongoCart(config.mongo.url);
  productDao = mongoProduct;
  cartDao = mongoCart;
} else if (process.env.STORAGE_TYPE === 'firebase') {
  const firebaseProduct = new FirebaseProduct(config.firebase);
  const firebaseCart = new FirebaseCart(config.firebase);
  productDao = firebaseProduct;
  cartDao = firebaseCart;
}

module.exports = { productDao, cartDao };