import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SlideOver from "../components/home-components/SlideOver";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import {createContext,useContext,useState} from "react";
import Banner from "../components/home-components/banner/Banner";
import BannerPopup from "../components/home-components/banner/Banner-popup";
import Hero from "../components/home-components/hero-components/Hero";
import Carousel from "../components/home-components/hero-components/Carousel";
import Tagline from "../components/home-components/tagline";
import CloudLogo from "../components/home-components/cloud-logo";
import Courses from "../components/home-components/Courses";
import Stats from "../components/home-components/stats/Stats";
import RealFacts from "../components/home-components/realfacts/RealFacts";
import Team from "../components/home-components/team/Team";
import Footer from "../components/home-components/Footer";
import DemoForm from "../components/home-components/hero-components/demo/DemoForm";
import DemoPopup from "../components/home-components/hero-components/demo/DemoPopup";
import FAQ from "../components/home-components/faq/FAQ";
import ProfilePopup from "../components/home-components/profile/ProfilePopup";
import ProfileCard from "../components/home-components/profile/ProfileCard";

interface BannerPopupInterface{
    bannerPopupState:boolean;
    setBannerPopupState:(arg:boolean)=>void;
}
interface DemoPopupInterface{
    demoPopupState:boolean;
    setDemoPopupState:(arg:boolean)=>void;
}


const BannerPopupContext = createContext({} as BannerPopupInterface);
const DemoPopupContext = createContext({} as DemoPopupInterface);

const Home: NextPage = () => {
    const [bannerPopupState,setBannerPopupState] = useState<boolean>(false);
    const [demoPopupState,setDemoPopupState] = useState<boolean>(false);
    return (
        <>
        <SlideOver/>
        <BannerPopupContext.Provider value = {{bannerPopupState,setBannerPopupState}}>
            <Banner/>
            <BannerPopup/>
        </BannerPopupContext.Provider>
        <DemoPopupContext.Provider value = {{demoPopupState,setDemoPopupState}}>
            <DemoPopup>
                <DemoForm/>
            </DemoPopup>
            <Hero>
                <Carousel/>
                <ProfilePopup>
                    <ProfileCard/>
                </ProfilePopup>
            </Hero>
        </DemoPopupContext.Provider>
        <Tagline/>
        <CloudLogo/>
        <Courses/>
        <Stats/>
        <RealFacts/>
        <Team/>
        <FAQ/>
        <Footer/>
        </>
    )
};


function useBannerPopupContext(){
    const {bannerPopupState,setBannerPopupState} = useContext(BannerPopupContext);
    return {bannerPopupState,setBannerPopupState};
}

function useDemoPopupContext(){
    const {demoPopupState,setDemoPopupState} = useContext(DemoPopupContext);
    return {demoPopupState,setDemoPopupState};
}


export {useBannerPopupContext,useDemoPopupContext};

export default Home;
