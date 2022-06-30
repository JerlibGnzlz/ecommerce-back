const { Router } = require("express");
const users = require("./users");
const product = require("./product");
const category = require("./category");
const brand = require("./brand");
const orderItem = require("./orderItem");
const cart=require('./cart')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/users", users);
router.use("/product", product);
router.use("/categories", category);
router.use("/brands", brand);
router.use("/orderItem", orderItem);
router.use("/cart",cart)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
