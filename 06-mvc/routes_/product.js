const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const productController = require('../controllers/products');
router.use(bodyParser.urlencoded());

router.use('/add-product', productController.getAddProduct);

router.post('/product', (req, res, next) => {
    fs.appendFileSync('log.txt', req.body.title + '\n');
    res.redirect('/');
});

module.exports = router;