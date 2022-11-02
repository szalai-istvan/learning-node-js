const path = require('path');
const fs = require('fs');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views_', 'add-product.html'));
};

exports.postProduct = (req, res, next) => {
    fs.appendFileSync('log.txt', req.body.title + '\n');
    res.redirect('/');
};