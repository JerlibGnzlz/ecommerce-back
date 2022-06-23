const {Product, Brand, Category} = require("../db");
const {Op} = require('sequelize')
const controller = {}

controller.product = async (req, res) => {
    let {category, brand, id, price} = req.body[0];
    
    let orderByPrice = []
    if(price){
        orderByPrice = [['price', price]]
    }

    if(id){
        try{
            res.status(200).send(await Product.findAll({
                where:{
                    id: id
                },
                include: [
                    {model: Brand}, 
                    {model: Category}]
            }))
        }catch(err){
             res.status(400).send(err)
        }
    }
    else if(category || brand){
        if(category && brand){
            try{
                res.status(200).send(await Product.findAll({
                    where:{
                        [Op.and]:{
                            brandId: brand,
                            categoryId: category
                        }
                    },
                    order: orderByPrice,
                    include: [
                        {model: Brand}, 
                        {model: Category}]
                }))
            }catch(err){
                 res.status(400).send(err)
            }
        }

        else if (category){
            try{
                res.status(200).send(await Product.findAll({
                    where:{
                        categoryId: category
                    },
                    order: orderByPrice,
                    include: [
                        {model: Brand}, 
                        {model: Category}]
                }))
            }catch(err){
                 res.status(400).send(err)
            }
        }

        else if(brand){
            try{
                res.status(200).send(await Product.findAll({
                    where:{
                        brandId: brand
                    },
                    order: orderByPrice,
                    include: [
                        {model: Brand}, 
                        {model: Category}]
                }))
            }catch(err){
                res.status(400).send(err)
            }
        }
    }

    else{
        try{
            res.status(200).send(await Product.findAll({
                order: orderByPrice,
                include: [
                    {model: Brand}, 
                    {model: Category}]
            }))
        }catch(err){
            res.status(400).send(err)
        }
    }   
}

module.exports = controller