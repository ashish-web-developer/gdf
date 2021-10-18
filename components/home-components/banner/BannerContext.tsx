import Image from "next/image";
const BannerContent = ()=>{
    return(
        <div className="w-full mx-auto">
            <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-black rounded cursor-pointer">Notification</a>
            </div>
            <div className="mt-2">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility tools for designers and developers</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
            </div>
            <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-indigo-600 dark:text-blue-400 hover:underline">Read more</a>
            <div className="flex items-center">
                <div className = "w-10 h-10 block">
                    <Image width = "40" height = "40" layout = "responsive" className="hidden object-cover mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                </div>
                <span className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Ashish Prajapati (C.E.O)</span>
            </div>
            </div>
        </div>
    )
}

export default BannerContent;
