import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import {Provider} from "next-auth/client";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51JgLOvSDdnguC8BWX5zjln7N0cmsgohKDD3JJafBBkkKHzTvxkhWnU1CdxO1t1st2ACS49Ft1yTem7QpryTlvR0e00eqtNGjFr");
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session = {pageProps.session}>
            <Elements stripe = {stripePromise}>
                <Component {...pageProps} />
            </Elements>
        </Provider>
    )
}
export default MyApp
