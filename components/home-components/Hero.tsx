
import {useContext} from "react";
import ProfileCard from "./profile-card";
import {useSession} from "next-auth/client";
import ChatBox from "./chat-box";
import {BookDemoStateContext} from "../../pages/index";

const Hero = ({children}:any) => {
    const {bookDemoState,setBookDemoState} = useContext(BookDemoStateContext);
    const [session] = useSession();
    console.log(session);
    return (
        <div className="relative">
        <img
            src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
        />
        <div className="relative bg-opacity-75 bg-pink-400">
            <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
            >
            <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
            </svg>
            <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="uppercase max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Commited to excellence<br className="hidden md:block" />
                    in Education
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                    quae.
                </p>
                <button
                    className="py-2 px-6 bg-black text-white rounded-md"
                    onClick = {()=>setBookDemoState(true)}
                >
                    Book Demo
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        className="inline-block w-6 ml-2"
                        width="30" height="30"
                        viewBox="0 0 172 172"
                        style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#db2777"><path d="M164.66592,84.29376l-8.13904,-14.24504l1.01824,-16.6324c0.07224,-1.19368 -0.4816,-2.34264 -1.462,-3.0272l-13.57424,-9.50472l-6.10256,-15.26672c-0.4472,-1.11456 -1.4448,-1.91952 -2.6316,-2.1156l-16.2884,-2.71416l-12.22232,-11.20064c-0.8944,-0.81872 -2.15,-1.10768 -3.30584,-0.76024l-15.95816,4.75064l-15.95816,-4.75064c-1.15584,-0.34744 -2.41144,-0.05848 -3.30584,0.76024l-12.22232,11.20408l-16.2884,2.71416c-1.1868,0.19608 -2.1844,1.00104 -2.6316,2.1156l-6.10256,15.26672l-13.57424,9.50472c-0.9804,0.688 -1.53424,1.83352 -1.462,3.0272l1.01824,16.6324l-8.13904,14.24504c-0.60544,1.05608 -0.60544,2.3564 0,3.41248l8.13904,14.24504l-1.01824,16.6324c-0.07224,1.19368 0.4816,2.34264 1.462,3.0272l13.57424,9.50472l6.10256,15.26672c0.4472,1.11456 1.4448,1.91952 2.6316,2.1156l16.2884,2.71416l12.22232,11.20408c0.8944,0.81872 2.15,1.10424 3.30584,0.76024l15.95816,-4.75752l15.95816,4.75064c0.32336,0.09632 0.65016,0.14448 0.9804,0.14448c0.84968,0 1.67872,-0.31304 2.32544,-0.90472l12.22232,-11.20408l16.2884,-2.71416c1.1868,-0.19608 2.1844,-1.00104 2.6316,-2.1156l6.10256,-15.26672l13.57424,-9.50472c0.9804,-0.688 1.53424,-1.83352 1.462,-3.0272l-1.01824,-16.6324l8.13904,-14.24504c0.60544,-1.05264 0.60544,-2.35296 0,-3.40904zM80.85032,118.7832l-31.21112,-28.16672l4.6096,-5.10496l25.20488,22.74528l37.71272,-58.52128l5.78608,3.72552z"></path></g></g>
                    </svg>
                </button>
                </div>
                <div className="w-full max-w-lg xl:w-5/12">
                    <div className="bg-black rounded shadow-2xl p-7">
                        {/* content goes here */}
                        {children}
                        
                    </div>
                </div>
            </div>
            <div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;
