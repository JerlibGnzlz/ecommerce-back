const { Order, Product, OrderItem, User } = require("../db");

class PaymentController {
    constructor(subscriptionService){
        this.subscriptionService = subscriptionService;
    }

    async getPaymentLink(req,res){
        try{
            console.log(req)
            const payment = await this.subscriptionService.createPayment(req);
            let order = await Order.create({state:"pending", total:req.body.total, userId:req.body.user})
            await req.body.product.map(async p => {
                    await OrderItem.create({orderId: order.id, productId: p.id, quantity: p.quantity})
            })
            console.log(order)
            console.log(await OrderItem.findAll())
            return res.json(payment);
        } catch (err){
            console.log(err);

            return res.status(500).json({error: true, msg: "Failed to create payment"})
        }
    }
}

module.exports = PaymentController;