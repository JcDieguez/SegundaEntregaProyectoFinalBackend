const express = require('express');
const productDao = require('./main').productDao;
const config = require('./config');
const cartDao = require('./main').cartDao;


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