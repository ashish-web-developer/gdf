export default function Courses(){
    return(
        <section className="pb-24 pt-20 bg-black overflow-hidden">
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-2/5 px-4 mb-20 lg:mb-0">
                <div className="lg:max-w-lg">
                <h2 className="mt-8 mb-12 text-6xl 2xl:text-7xl font-bold font-heading text-white">Best <span className = "text-pink-900">computer</span> courses <span className = "text-pink-900">GDF</span> Provide</h2>
                <p className="text-lg text-gray-200">The brown fox jumps over the lazy dog.</p>
                </div>
            </div>
            <div className="w-full lg:w-3/5 px-4">
                <div className="flex justify-center items-center">
                <div className="py-8 px-2 sm:px-6 mr-3 bg-gray-900 rounded-lg">
                    <img className="h-20 mx-auto" src="https://img.icons8.com/nolan/128/java-coffee-cup-logo.png"/>
                </div>
                <div className="flex flex-col mr-3">
                    <div className="inline-block ml-auto py-12 px-4 sm:px-8 mb-3 bg-gray-900 rounded-lg">
                        <img className="h-20 mx-auto" src="https://img.icons8.com/nolan/96/python.png"/>
                    </div>
                    <div className="py-16 px-2 sm:px-4 bg-gray-900 rounded-lg">
                        <img className="h-20 mx-auto" src="https://img.icons8.com/nolan/128/android.png"/>
                    </div>
                </div>
                <div className="-mb-32">
                    <div className="py-8 px-2 sm:px-14 mb-3 bg-gray-900 rounded-lg">
                        <img className="h-20 mx-auto" src="https://img.icons8.com/nolan/96/php.png"/>
                    </div>
                    <div className="inline-block py-14 px-2 sm:px-8 bg-gray-900 rounded-lg">
                        <img className="h-20 mx-auto" src="https://img.icons8.com/nolan/96/js.png"/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
