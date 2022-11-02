exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views_', 'add-product.html'));
};

