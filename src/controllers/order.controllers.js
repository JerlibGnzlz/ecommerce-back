const e = require("express");
const { Op } = require("sequelize");
const { OrderItem, Brand, Category, Product, Order, User } = require("../db");
const { product } = require("./product.controllers");

//const {Op} = require('sequelize')
const controller = {};


controller.allOrders = async (req, res) => {
    let {email} = req.query;
    let user = await User.findAll({where: {email: email}})
    try{
    if(user[0].dataValues.isAdmin){
        res.status(200).send(await Order.findAll({
            include: [
                    { model: User }, 
                    { model: OrderItem,
                      include:[{
                            model: Product,
                            include: [{model: Brand}]}]
                    }],
        }))
    }
    else{
        res.status(404).send({error: true, msg: "Not an admin user"})
    }
    }
    catch(err){
        res.status(400).send(err)
    }
}

controller.getHistory = async (req, res) => {
    let{email} = req.params; 
    if(email){
    try{
        res.status(200).send(await User.findOne({
                                where: {email : email},
                                include:[{
                                        model: Order, 
                                        include:[{
                                            model: OrderItem,
                                            include: [{ 
                                                    model: Product,
                                                    include: [{model: Brand}]}]}]}]
        }))
    }catch(err){
        res.status(400).send(err)
    }
    }
    else{
        res.status(404).send({error: true, msg: "User not loggedt"})
    }
}

module.exports = controller