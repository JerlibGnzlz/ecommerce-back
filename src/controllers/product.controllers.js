const {Product, Brand, Category} = require("../db");
const {Op} = require('sequelize')
const controller = {}

controller.product = async (req, res) => {
    
    try{
        res.status(200).send(await Product.findAll({
            include: [
                {model: Brand}, 
                {model: Category}]
        }))
    }catch(err){
        res.status(400).send(err)
    }
}

module.exports = controller