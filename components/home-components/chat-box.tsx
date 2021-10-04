import {useState} from "react";
import {useSession} from "next-auth/client";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import {Transition} from "@headlessui/react";


let usernames:string[] = ["Ashish","Vishal","Tarun"]; 

let svgList = usernames.map((name)=>{
    let usersvg:string = createAvatar(style, {
        seed: name,
    // ... and other options
    });
    return(
        <div
            key = {name}
            className = "w-16 h-16 rounded-full"
            dangerouslySetInnerHTML={ { __html:usersvg }}
        />
    )
})




export default function ChatBox(){
    const [state,setState] = useState<boolean>(false);
    const [session]:any = useSession();
    let svg:string
    if(session){
        svg = createAvatar(style, {
            seed: session.user.name,
        // ... and other options
        });
    }
    return(
        <div className="flex flex-col items-end w-full z-10">
            <Transition 
                show = {state}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="flex-1 mr-4 w-96 bg-white shadow-xl rounded-lg relative overflow-hidden">
                <div className="bg-black h-64 rounded-t-lg absolute w-full z-0" />
                    <div className="flex flex-col overflow-y-auto h-full p-4 space-y-8">
                        <div className="flex flex-col z-10 ml-4 text-white">
                        {session?
                        <div
                            className="h-16 w-16 rounded-full"
                            dangerouslySetInnerHTML={ { __html:svg }}
                        />:
                        <div/> }
                        {session?<div className="text-3xl mb-2">Hi {session.user.name} 👋</div>:<div className="text-3xl mb-2">Hi Alien 👋</div>}
                        <div className="w-60 text-gray-200 text-sm mb-1">Ask Anything or send us Feedback.</div>
                        </div>
                        <div className="border-0 border-t-4 border-pink-500 rounded z-10 shadow-md text-sm">
                        <div className="bg-white border border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
                            <div className="px-6 py-4 flex flex-col items-start gap-3">
                            <div className="font-semibold ">Start a conversation</div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row -space-x-10">
                                    {svgList}
                                </div>
                                <div className="flex flex-col justify-center">
                                <div className="text-pink-600">Our usual reply time</div>
                                <div className="flex flex-row items-center gap-1 font-semibold">
                                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    A few minutes
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* message box */}
                    <div className = "flex justify-between items-center py-2 w-full border-2 rounded-b-md px-6 border-black">
                        <input  type = "text" placeholder = "send us message"/>
                        <button><img src="https://img.icons8.com/external-prettycons-solid-prettycons/30/000000/external-send-social-media-prettycons-solid-prettycons.png"/></button>
                    </div>
                </div>
            </Transition>
            <div className="bg-blue-600 rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl">
                <button onClick = {()=>setState((prev)=>(prev?false:true))} className = "p-2 rounded-full bg-black">
                    {state?
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="50" height="50"
                        viewBox="0 0 172 172"
                        style={{ fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#db2777"><path d="M34.34625,37.84c-0.90031,0.01344 -1.74687,0.37625 -2.37844,1.00781l-20.64,20.64c-1.34375,1.34375 -1.34375,3.52062 0,4.86437l72.24,72.24c1.34375,1.34375 3.52062,1.34375 4.86437,0l72.24,-72.24c1.34375,-1.34375 1.34375,-3.52062 0,-4.86437l-20.64,-20.64c-1.34375,-1.34375 -3.52062,-1.34375 -4.86437,0l-49.16781,49.16781l-49.16781,-49.16781c-0.65844,-0.65844 -1.55875,-1.02125 -2.48594,-1.00781z"></path></g></g>
                    </svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="60" height="60"
                        viewBox="0 0 172 172"
                    style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#db2777"><path d="M74.53333,17.2c-34.83,0 -63.06667,25.66813 -63.06667,57.33333c0,16.2632 7.49993,30.88989 19.47318,41.30911c-1.71739,5.62423 -5.29979,11.21796 -11.88099,16.20339c-0.00372,0.00374 -0.00746,0.00748 -0.0112,0.0112c-1.11129,0.42263 -1.84635,1.48737 -1.84766,2.6763c0,1.58322 1.28345,2.86667 2.86667,2.86667c0.19588,-0.00244 0.391,-0.02496 0.58229,-0.06719c11.12306,-0.03241 20.61351,-4.78364 28.16276,-10.7388c3.58246,1.45718 7.32203,2.65852 11.22031,3.49375c-1.74293,-4.93067 -2.6987,-10.18016 -2.6987,-15.62109c0,-28.45453 25.71973,-51.6 57.33333,-51.6c7.92347,0 15.47677,1.45564 22.35104,4.08724c-3.99041,-28.1736 -30.41211,-49.95391 -62.48438,-49.95391zM114.66667,74.53333c-25.33146,0 -45.86667,17.96831 -45.86667,40.13333c0,22.16503 20.53521,40.13333 45.86667,40.13333c5.86456,-0.00812 11.67293,-1.00025 17.11042,-2.92266c7.03112,4.91169 15.54015,8.55476 25.28489,8.5888c0.19861,0.04378 0.40131,0.06631 0.60469,0.06719c1.58322,0 2.86667,-1.28345 2.86667,-2.86667c-0.00188,-1.20157 -0.7529,-2.27446 -1.88125,-2.6875c-5.24708,-3.98365 -8.6101,-8.36855 -10.62683,-12.83281c8.01571,-7.4324 12.48919,-17.26044 12.50808,-27.47969c0,-22.16503 -20.53521,-40.13333 -45.86667,-40.13333z"></path></g></g>
                    </svg>
                }
                </button>
            </div>
        </div>

    )
}
