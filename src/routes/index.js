const { Router } = require("express");
const users = require("./users");
const product = require("./product");
const category = require("./category");
const brand = require("./brand");
const orderItem = require("./orderItem");
const auth = require("./auth");
const middleware = require("../middleware");
const softMiddleware = require("../middleware/integrationSoft");
const verifyUser = require("./verifyUser");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/users", middleware.decodeToken, users);
router.use("/product", softMiddleware.decodeSoft, product);
router.use("/categories", middleware.decodeToken, category);
router.use("/brands", brand);
router.use("/orderItem", middleware.decodeToken, orderItem);
router.use("/auth", auth);
router.use("/verify", verifyUser);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
