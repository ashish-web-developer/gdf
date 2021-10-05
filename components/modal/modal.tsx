export default function Modal(){
    return(
            <div className="fixed top-0 left-0 right-0 pt-20 z-50">
                <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <div className="p-8 md:p-16 bg-black rounded-md shadow-xl">
                    <h2 className="mb-4 text-2xl text-white font-heading">Sign up to our newsletter</h2>
                    <p className="mb-6 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <form>
                        <div className="mb-6">
                        <input className="w-full py-4 px-6 bg-black rounded-full border text-white font-bold outline-none placeholder-white" type="email" placeholder="Type your e-mail" />
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start">
                        <a className="inline-flex justify-center w-full md:w-auto mb-6 lg:mb-0 md:mr-8 items-center py-4 px-6 rounded-full bg-pink-400 hover:bg-yellow-400 transform duration-200" href="#">
                            <svg className="mr-3" width={16} height={9} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black" />
                            </svg>
                            <span className="text-sm font-heading">Sign up now</span>
                        </a>
                        <a className="inline-flex items-center text-white hover:underline" href="#">
                            <span className="mr-2 text-sm font-heading">No, thanks</span>
                            <svg width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z" fill="#FFEC3E" />
                            </svg>
                        </a>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
    )
}
