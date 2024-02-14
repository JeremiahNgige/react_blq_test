"use client"
import React, {useEffect, useState} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Button} from "@nextui-org/react";
import MediaCarousel from "@/app/components/MediaCarousel";

interface CarouselInterface {
    items?: Item[]
}

const CustomCarousel: React.FC<CarouselInterface> = ({items}) => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? items!.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === items!.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel-container mx-auto">
            <div className="carousel">
                {items!.map((item, index) => (
                    <div key={index} className={"grid grid-col-2 mx-auto"}>
                        <div className={"flex flex-rows justify-start px-10 py-12 mx"}>
                            <div>
                                <h1 className={"font-bold"}>{item.title}</h1>
                                <h2>{item.description}</h2>
                            </div>

                            <div className={"flex flex-row mx-auto"}>
                                <Button variant={"light"} className="prev"
                                        onClick={prevSlide}><ArrowBackIosIcon></ArrowBackIosIcon></Button>
                                <Button variant={"light"} className="next"
                                        onClick={nextSlide}><ArrowForwardIosIcon></ArrowForwardIosIcon></Button>
                            </div>
                        </div>
                        <div>
                            <MediaCarousel slide={currentSlide} media={item.items}></MediaCarousel>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomCarousel;
