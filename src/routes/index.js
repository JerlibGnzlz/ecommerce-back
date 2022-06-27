const { Router } = require("express");
const users = require("./users");
const product = require("./product");
const category = require("./category");
const brand = require("./brand");
const orderItem = require("./orderItem");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/users", users);
router.use("/product", product);
router.use("/categories", category);
router.use("/brands", brand);
router.use("/orderItem", orderItem);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
