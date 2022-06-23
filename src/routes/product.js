const express = require('express');
const controller = require('../controllers/product.controllers')

const router = express.Router();
module.exports = router;

router.get("/", controller.product)