import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";


const CheckoutForm = ()=>{
    const stripe:any = useStripe();
    const elements = useElements();

    const handleSubmit = async(event:any)=>{
        event.preventDefault();


        const {sessionId} = await fetch("api/checkout/sessions",{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify({quantity:1})
        }).then(res=>res.json());
        const {error} = await stripe.redirectToCheckout({
            sessionId,
        });
    }

    return(
        <form onSubmit = {handleSubmit}>
            <CardElement/>
            <button className = "py-2 px-6 bg-purple-600 rounded" type = "submit" disabled = {!stripe}>Pay Now</button>
        </form>
    )
}

export default CheckoutForm;
