const fs = require('fs');
const path = require('path');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    console.log(Product.fetchAll());
    res.render('shop', {products: Product.fetchAll()});
};