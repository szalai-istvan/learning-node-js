const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const productController = require('../controllers/products');
router.use(bodyParser.urlencoded());

router.use('/add-product', productController.getAddProduct);
router.post('/product', productController.postProduct);

module.exports = router;