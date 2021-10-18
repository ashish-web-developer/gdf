import Image from "next/image";
import {TeamData} from "./TeamData";
import {v4 as uuidv4} from "uuid";



const TeamCardList = TeamData.map((data)=>{
    return(
            <div key = {uuidv4()} className="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
                <div className="flex -mx-4 lg:mx-0">
                <div className="w-1/3 px-4">
                    <div className = "block w-30 h-40">
                        <Image width = "128" height="160" layout = "responsive" className="w-30 h-40 mx-auto rounded-full object-cover" src={data.imageSrc} alt="" />
                    </div>
                </div>
                <div className="w-2/3 px-4">
                    <div className="relative inline-block mb-8 p-10 bg-black rounded-lg">
                    <div className="absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 bg-black" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}} />
                    <p className="mb-8 text-lg text-gray-200">{data.description}</p>
                    <div className="flex mb-4">
                    </div>
                    <h3 className="mb-1 text-2xl text-white font-bold">{data.name}</h3>
                    <p className="text-white">{data.profession}</p>
                    </div>
                </div>
                </div>
            </div>

    )
});


export default function Team(){
    return(
        <section>
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold">Our Great Team!!</h2>
            </div>
            <div className="relative py-20 2xl:py-40 bg-white overflow-hidden">
            <div className="relative container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
                <div className="relative flex flex-wrap -mx-5 mb-20">
                    {TeamCardList}
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

