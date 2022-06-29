const axios = require("axios")
require('dotenv').config()
const {ACCESS_TOKEN} = process.env;

class PaymentService{
    async createPayment(req){
        console.log(req.body)
        const items = req.body.map(i => {
            return {
                title: i.name,
                description: i.description,
                picture_url: i.image,
                category_id: "cat123",
                currency_id: "USD",
                quantity: i.quantity,
                unit_price: i.price,
            }
        })
        console.log(items)
        const url = "https://api.mercadopago.com/checkout/preferences";

        const body = {
            payer_email: "test_user_14959901@testuser.com",
            items: items,
            back_urls: {
                success: "/success",
                failure: "/failure",
                pending: "/pending"
            },
            notification_url: "http://www.your-site.com/ipn"
            };
        console.log(ACCESS_TOKEN)
        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        });

        return payment.data.init_point;
    }
}

module.exports = PaymentService