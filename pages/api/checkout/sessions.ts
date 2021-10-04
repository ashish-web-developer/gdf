import {NextApiRequest,NextApiResponse} from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion:"2020-03-02"
});
export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const {Quantity} = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:[
            {
                price:process.env.PRICE_ID,
                Quantity

            },
        ],
        mode:"payment",
        success_url:`${req.headers.origin}/result?session_id={checkout_session_id}`,
        cancel_url:`${req.headers.origin}/checkout`
    })
    res.status(200).json({sessionId:session.id});
    
}
