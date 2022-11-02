const fs = require('fs');
const path = require('path');

exports.getProducts = (req, res, next) => {
    //const filePath = path.join(__dirname, '..', 'views_', 'shop.html');
    //res.sendFile(filePath);
    let products = fs.readFileSync(path.join(__dirname, '..', 'log.txt'));
    products = products.toString().split('\n');
    console.log(products);
    res.render('shop', {products: products.slice(0, products.length - 1)});
};