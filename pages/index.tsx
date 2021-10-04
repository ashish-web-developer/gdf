import type { NextPage } from 'next'
import {signIn} from "next-auth/client";
import {createContext,useState} from "react";
import Head from 'next/head'
import Nav from "../components/nav-components/Nav";
import SlideOver from "../components/home-components/Slide-over";
import Hero from "../components/home-components/Hero";
import Banner from "../components/home-components/Banner";
import FacebookIcon from "/icons8-facebook-48.png";
import Image from "next/image";
import NotificationPopup from "../components/home-components/Notification/Notification-popup";
import NotificationContent from "../components/home-components/Notification/Notification-content";
import ProgressPichart from "../components/home-components/Progress-pichart";
import ProfileCard from "../components/home-components/profile-card";
import Carousel from "../components/home-components/Carousel/carousel";
import Affiliates from "../components/home-components/Affliates";
import ChatBox from "../components/home-components/chat-box";
import Checkout from "../components/home-components/Checkout";



interface contextInterface{
    state:boolean;
    setState:any
}
const SignInButtonStateContext = createContext<contextInterface>(undefined!);
const NotificationPopupButtonStateContext = createContext<contextInterface>(undefined!);

const Home:NextPage = ()=>{
    const [state,setState] = useState<boolean>(false);
    const [notificationState,setNotificationState] = useState<boolean>(false);



    return(
        <>
        <SignInButtonStateContext.Provider value = {{state,setState}}>
            {/* slide over */}
            <SlideOver>
                <div className = "space-y-6">
                    <button onClick = {()=>signIn("google")} type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <div className="flex items-center justify-center">
                         <Image width = "24" height = "24"  src="https://img.icons8.com/fluency/48/000000/google-logo.png"/>
                        <span className="ml-4"> Log in with Google </span>
                        </div>
                    </button>
                    <button type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <div className="flex items-center justify-center">
                            <Image width = "24" height = "24" src="https://img.icons8.com/color/48/000000/facebook-circled.png"/>
                        
                        <span className="ml-4"> Log in with Facebook</span>
                        </div>
                    </button>
                    <button onClick = {()=>signIn("github")} type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <div className="flex items-center justify-center">
                            <Image width = "24" height = "24" src="https://img.icons8.com/color/48/000000/github--v3.png"/>
                        
                        <span className="ml-4"> Log in with GitHub</span>
                        </div>
                    </button>
                    <button onClick = {()=>signIn()} type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <div className="flex items-center justify-center">
                            <Image width = "24" height = "24" src="https://img.icons8.com/fluency/48/000000/twitter.png"/>
                        
                        <span className="ml-4"> Log in with Twitter</span>
                        </div>
                    </button>
                </div>
                
            </SlideOver>

            {/* Nav bar goes here */}

            <Nav/>

            {/* Notification banner goes here */}
            <NotificationPopupButtonStateContext.Provider value = {{notificationState,setNotificationState}}>
                <Banner/>
                <NotificationPopup>
                    <NotificationContent/>
                </NotificationPopup>
            </NotificationPopupButtonStateContext.Provider>

            {/* Hero goes here */}
            <Hero>
                <Carousel/>
            </Hero>
        </SignInButtonStateContext.Provider>
        <Affiliates/>
        <div className = "fixed bottom-4 right-4">
            <ChatBox/>
        </div>
        <Checkout/>
        </>
    )
}

export default Home;
export {SignInButtonStateContext};
export {NotificationPopupButtonStateContext};
