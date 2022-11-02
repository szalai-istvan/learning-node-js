const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
router.use(bodyParser.urlencoded());

router.use('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views_', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    fs.appendFileSync('log.txt', req.body.title + '\n');
    res.redirect('/');
});

module.exports = router;