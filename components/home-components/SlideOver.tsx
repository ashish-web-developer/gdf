/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState ,useContext,FC,ReactNode} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {SlideOverContext,SlideOverInterface} from "../../pages/_app";
import {signIn} from "next-auth/client";
import Image from "next/image";

interface Props {
    text:string;
    children:ReactNode;
    social:string;
}
const SignInButton:FC<Props> = ({text,children,social})=>{
    return(
        <button onClick = {()=>signIn(social)} type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
        <div className=" flex items-center justify-center ">
            {children}
            <span className="ml-4"> {text} </span>
        </div>
      </button>
         
    )
}

const SlideOver:FC = ()=> {
    const {slideOverState,setSlideOverState} = useContext(SlideOverContext) as SlideOverInterface;

    return (
        <Transition.Root show={slideOverState} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setSlideOverState}>
            <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
                >
                <div className="relative w-screen max-w-md">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                        <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setSlideOverState(false)}
                        >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    </Transition.Child>
                    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-12 space-y-4">
                        <SignInButton text = "Sign in with Github" social="github">
                            <Image width = "24" height = "24" alt = "user" className ="w-6 h-6" src="https://img.icons8.com/color/50/000000/github.png"/>
                        </SignInButton>
                        <SignInButton text = "Sign in with Google" social="google">
                            <Image width = "24" height = "24" alt = "user" className ="w-6 h-6" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                        </SignInButton>
                        <SignInButton text = "Sign in with Facebook" social="facebook">
                            <Image width = "24" height = "24" alt = "user" className ="w-6 h-6" src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/>
                        </SignInButton>
                        
                        {/* Replace with your content */}
                        
                        {/* /End replace */}
                    </div>
                    </div>
                </div>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    )
}


export default SlideOver;
