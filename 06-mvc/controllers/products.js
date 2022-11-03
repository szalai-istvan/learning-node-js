const path = require('path');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views_', 'add-product.html'));
};

exports.postProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};