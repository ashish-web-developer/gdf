export default function CloudLogo(){
    return(
        <section className="px-4 py-24 mx-auto max-w-7xl">
        <h1 className="mb-3 text-2xl font-bold leading-tight text-center text-pink-600 uppercase md:text-5xl">Our Affliates</h1>
        <p className="mb-16 text-lg text-center text-gray-600">Organizations of all sizes trust Hellonext to manage customer feedback</p>
        <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
            <div className="flex items-center justify-center">
                <img src="https://img.icons8.com/ios-filled/250/000000/amazon.png" className="block object-contain h-24"/>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://img.icons8.com/ios-filled/250/000000/google-logo.png" className="block object-contain h-24"/>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://img.icons8.com/ios-filled/250/000000/facebook--v2.png" className="block object-contain h-24"/>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://img.icons8.com/ios-filled/250/000000/bing.png" className="block object-contain h-24"/>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://img.icons8.com/ios-filled/250/000000/chrome--v1.png" className="block object-contain h-24"/>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://img.icons8.com/windows/256/000000/react-native.png" className="block object-contain h-24"/>
            </div>
        </div>
        <div className="text-center">
            <a href="#" className="btn btn-light btn-lg btn-icon">
            <span>See our Testimonials</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="ml-3">
                <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
                ></path>
            </svg>
            </a>
        </div>
        </section>

        
    )
}
