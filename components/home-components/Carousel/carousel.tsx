import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReviewCard from "./Review-card";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';

let username:string[] = ["Ashish","Vishal","Tarun","kiran"];

let svg:string;
let ReviewList = username.map((name)=>{
    svg = createAvatar(style, {
        seed:name ,
    // ... and other options
    });
    return <ReviewCard><div className="object-cover w-12 h-12 rounded-full dark:bg-coolGray-500" dangerouslySetInnerHTML={ { __html:svg }}></div></ReviewCard>;
})





export default function CarouselComponent(){
    return(
        <Carousel showThumbs = {false}>
            {ReviewList}
        </Carousel>
    )
}
