const {Product} = require("../db");
const {Op} = require('sequelize')
const controller = {}

controller.product = async (req, res) => {
    
    try{
        res.status(200).send(await Product.findAll())
    }catch(err){
        res.status(400).send(err)
    }
}

module.exports = controller