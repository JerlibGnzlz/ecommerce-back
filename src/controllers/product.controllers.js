const {Product, Brand, Category} = require("../db");
const {Op} = require('sequelize')
const controller = {}

controller.product = async (req, res) => {
    let {category, brand} = req.body[0];
    console.log(req.body[0])
    if(category || brand){
        if(category && brand){
            try{
                res.status(200).send(await Product.findAll({
                    where:{
                        [Op.and]:{
                            brandId: brand,
                            categoryId: category
                        }
                    },
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