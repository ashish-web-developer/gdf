import "tailwindcss/tailwind.css";
import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import {useState,createContext} from "react";



export interface SlideOverInterface{
    slideOverState:boolean;
    setSlideOverState:(args:boolean)=>void;
}

// slide over context
const SlideOverContext = createContext<SlideOverInterface|undefined>(undefined);




function MyApp({ Component, pageProps }: AppProps) {
    const [slideOverState,setSlideOverState] = useState<boolean>(false);
    return (
        <SlideOverContext.Provider value = {{slideOverState,setSlideOverState}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SlideOverContext.Provider>
    )
}

// user session hook

export default MyApp
export {SlideOverContext}
