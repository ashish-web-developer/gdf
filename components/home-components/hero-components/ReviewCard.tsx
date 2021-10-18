import {ReactNode} from "react";

interface Props{
    children:ReactNode;
    username:string|JSX.Element;
}
export default function ReviewCard({children,username}:Props){
    return(
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-indigo-400 dark:bg-coolGray-900 dark:text-coolGray-100">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        {children}
                    </div>
                    <div>
                        <h4 className="font-bold text-white">{username}</h4>
                        <span className="text-xs text-white">2 days ago</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#6366f1"><path d="M165.12,64.6505l-59.26833,-1.6125l-19.85167,-55.87133l-19.85167,55.87133l-59.26833,1.6125l47.00617,36.1415l-16.78433,56.87467l48.89817,-33.53283l48.89817,33.53283l-16.78433,-56.8675zM86,106.75467l-23.736,16.2755l8.1485,-27.59883l-22.8115,-17.544l28.767,-0.78117l9.632,-27.12583l9.632,27.11867l28.767,0.78117l-22.8115,17.544l8.1485,27.59883z" /></g></g></svg>
                    <span className="text-xl font-bold text-indigo-400">4.5</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-white">
                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
            </div>
        </div>
    )
}
