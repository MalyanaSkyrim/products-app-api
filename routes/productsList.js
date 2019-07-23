const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController');

router.get('/products',productsController.getAllProducts);


module.exports = router;