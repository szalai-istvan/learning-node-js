const path = require('path');

const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    const filePath = path.join(__dirname, '..', 'views_', 'shop.html');
    res.sendFile(filePath);
});

module.exports = router;