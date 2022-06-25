const e = require("express");
const { OrderItem, Product, Order } = require("../db");

//const {Op} = require('sequelize')
const controller = {};

controller.orderItem = async (req, res) => {
  let { util } = req.query;
  const allOrderItem = await OrderItem.findAll({
    //include: [{ model: Product }],
  });

  const orderItems = allOrderItem.map((el) => {
    return {
      quantity: el.quantity,
      productId: el.productId,
    };
  });

  const idSell = orderItems.map((el) => el.productId);

  const products = idSell.map((el) =>
    Product.findAll({
      where: {
        id: el,
      },
    })
  );

  console.log(products, "aaa");

  //const productTotal = await products.map((el) => el);

  //   const products1 = await Product.findAll({
  //     where: {
  //       id: 1,
  //     },
  //   });

  if (!util) {
    try {
      res.status(200).send(products);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};
//controller.orderItem();
module.exports = controller;
