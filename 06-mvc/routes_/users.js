const userController = require('../controllers/users');

const express = require('express');
const router = express.Router();


router.get('/', userController.getProducts);

module.exports = router;