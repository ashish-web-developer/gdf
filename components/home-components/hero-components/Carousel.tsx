import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {FC} from "react";
import ReviewCard from "./ReviewCard";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import {v4 as uuidv4} from "uuid";

let ReviewUser:string[] = ["Kiran","Tarun","Ajay","Vijay"];
let ReviewUserSvg = ReviewUser.map((user)=>{
    let svg:string|undefined = createAvatar(style, {
            seed: user,
            // ... and other options
    });
    let svgElement = <div dangerouslySetInnerHTML={{ __html: svg}} className="object-cover w-12 h-12 rounded-full dark:bg-coolGray-500"/>;
    return [user,svgElement];
});


const CarouselComp:FC = ()=>{
    let UserReviewCard = ReviewUserSvg.map((user)=>{
        return <ReviewCard key = {uuidv4()} username = {user[0]}>{user[1]}</ReviewCard>
    });
    return(
            <Carousel showThumbs = {false}>
                {UserReviewCard}
            </Carousel>
    )
}

export default CarouselComp;
