
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import {useSession} from "next-auth/client";
import DropDown from "./BookDemoDropDown";



let svg:string;
export default function BookDemo(){
    const [session]:any = useSession();
    if(session){
        svg = createAvatar(style, {
            seed: session.user.name,
        // ... and other options
        });
    }
    return(

        <section className="h-screen bg-white bg-opacity-50">
            <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
                <div className="p-4 bg-gray-100 border-t-4 border-pink-600 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            {session?
                            <>
                            <div
                                className="mx-auto object-cover rounded-full h-16 w-16 "
                                dangerouslySetInnerHTML={ { __html:svg } }
                            />
                            <h1 className="text-pink-600 font-bold uppercase">
                                {session.user.name}
                            </h1>
                            </>:
                            <h1>Welcome</h1>
                            }
                        </div>
                    </div>
                </div>
                <div className="space-y-6 bg-white">
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Account
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                Personal info
                            </h2>
                            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                <div>
                                    <div className=" relative ">
                                        <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=" relative ">
                                            <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Phone number"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                    <h2 className="max-w-sm mx-auto md:w-4/12">
                                        Courses
                                    </h2>
                                    <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                                        <div className=" relative ">
                                            <DropDown/>
                                        </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                        <button type="submit" className="py-2 px-4  bg-black hover:bg-gray-900 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>
    )
}

