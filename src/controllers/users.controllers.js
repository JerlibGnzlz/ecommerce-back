const {User} = require("../db");
const {Op} = require('sequelize')
const controller = {}


controller.getAllUsers = async (req, res) => {
    const {name} = req.query
    if(name){
        try{
            let users = await User.findAll({
                where: {
                    title: {
                        [Op.substring]: name
                    }
                }
            })
            res.status(200).send(users)
        }
        catch(e){
            res.status(400).send(e)
        }
    }
    else{
        try{
            res.status(200).send(await User.findAll())
        }
        catch(err){
            res.status(400).send(err)
        }
    }
}

controller.getUserById = async (req, res) => {
    const {id} = req.params
    try{
        res.status(200).send(await User.findAll({
            where:{
                id: id
            }
        }))
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = controller