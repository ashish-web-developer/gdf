import Nav from  "./home-components/nav-components/Nav";
import {ReactNode,useState,useContext,createContext} from "react";
import {useSession} from "next-auth/client";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';

interface Props{
    children:ReactNode
}

interface ProfilePopupInterface{
    profilePopupState:boolean;
    setProfilePopupState:(arg:boolean)=>void;
}
interface UserSessionInterface{
    userSvg:string|undefined;
    session:any;
}

const ProfilePopupContext = createContext({} as ProfilePopupInterface);
const UserSessionContext = createContext({} as UserSessionInterface);
const Layout = ({children}:Props)=>{
    const [profilePopupState,setProfilePopupState] = useState<boolean>(false);
    const [session] = useSession();
    let userSvg;
    if(session && session.user){
        userSvg = createAvatar(style, {
            seed: session.user.name!,
            // ... and other options
        });
        
    }

    return(
        <>
        <UserSessionContext.Provider value = {{session,userSvg}}>
            <ProfilePopupContext.Provider value = {{profilePopupState,setProfilePopupState}}>
                <Nav/>
                <main>{children}</main>
            </ProfilePopupContext.Provider>
        </UserSessionContext.Provider>
        </>
    )
}

export const useUserSession = ()=>{
    const {session,userSvg}= useContext(UserSessionContext);
    let userSession;
    userSession = {
        session,
        userSvg
    };
    return userSession;
}


export const useProfilePopupContext = ()=>{
    const {profilePopupState,setProfilePopupState} = useContext(ProfilePopupContext);
    return {profilePopupState,setProfilePopupState}
};

export default Layout;
