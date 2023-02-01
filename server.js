const express = require('express');
const productDao = require('./utils/main').productDao;
const config = require('./utils/config');
const cartDao = require('./utils/main').cartDao;


const app = express();
const port = process.env.PORT || config.port;

app.get('/products', (req, res) => {
  productDao.getAll().then((products) => {
    res.json(products);
  });
});

app.get('/carts', (req, res) => {
  cartDao.getAll().then((carts) => {
    res.json(carts);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});