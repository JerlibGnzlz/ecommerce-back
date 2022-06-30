const { User } = require("../db");
const express = require("express");
// const controller = require("../controllers/users.controllers");
const router = express.Router();
module.exports = router;

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { cart, action } = req.body;
  const user = await User.findByPk(id);
  // const cartUpdated = user.cart.length && JSON.parse(user.cart);

  console.log(user.cart?.length && user.cart.find((e) => e.name === cart.name));
  if (user.cart?.length && user.cart.find((e) => e.name === cart.name)) {
    if (action === "suma") {
      user.cart.find((e) => e.name === cart.name).cantidad += 1;
      await User.update(
        { cart: [...user.cart] },
        {
          where: {
            id,
          },
        }
      );
    } else if (action === "resta") {
      user.cart.find((e) => e.name === cart.name).cantidad -= 1;
      await User.update(
        { cart: [...user.cart] },
        {
          where: {
            id,
          },
        }
      );
    } else if (action === "borrar") {
      const userCartDeleted = user.cart.filter((e) => e.name !== cart.name);
      await User.update(
        { cart: userCartDeleted },
        {
          where: {
            id,
          },
        }
      );
    }
  } else {
    await User.update(
      { cart: [...user.cart, cart] },
      {
        where: {
          id,
        },
      }
    );
  }

  res.send("carrito creado");
});
