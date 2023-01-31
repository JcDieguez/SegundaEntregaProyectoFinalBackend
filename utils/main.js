const { MongoProduct, FirebaseProduct } = require('../src/Contenedores/ContenedorMongoDb');
const { productDao, cartDao } = require('../src/daos/daos');

const storage = process.env.STORAGE;

let productDaoInstance;
let cartDaoInstance;

if (storage === 'mongodb') {
productDaoInstance = new MongoProduct();
cartDaoInstance = new MongoCart();
} else if (storage === 'firebase') {
productDaoInstance = new FirebaseProduct();
cartDaoInstance = new FirebaseCart();
} else {
  throw new Error(`Unsupported storage: ${storage}`);
}

module.exports = {
productDao: productDaoInstance,
cartDao: cartDaoInstance
};