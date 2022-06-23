const {Product, Brand, Category} = require("../db");
const {Op} = require('sequelize')
const controller = {}

controller.product = async (req, res) => {

    let {category, brand, id, price} = req.body;

    // para que no se creen errores price sola mente puede tomar los valores ASC o DESC sino no se aplicara el ordenamiento
    let orderByPrice = []
    if(price){
        if(price === "ASC" || price === "DESC"){
            orderByPrice = [['price', price]]
        }
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

        else{
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

// controller.createProduct = async (req, res) => {
//     const {name, description, model, price, image, brandId, categoryId} = req.body
//     console.log(req.body)
//     try{
//         await Product.create({
//             name: name,
//             description: description,
//             model: model,
//             price: price,
//             image: [image],
//             brandId: brandId,
//             categoryId: categoryId
//         })
//         res.status(200).send("producto creado")
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// }

module.exports = controller