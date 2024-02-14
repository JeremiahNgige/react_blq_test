"use client"
import React, {useEffect, useState} from "react";

interface MediaCarouselBluePrint {
    slide: number,
    media: Media[]
}

const MediaCarousel: React.FC<MediaCarouselBluePrint> = ({slide, media},) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mediaReceived, setMediaReceived] = useState<Media[]>([]);
    useEffect(() => {
        const fetchMediaData = async () => {
            setCurrentSlide(slide);
            setMediaReceived(media);
        }
        fetchMediaData();
    }, [])

    return (
        <div>
            {mediaReceived.map((media, index) => (
                <div
                    key={index}
                    className={index === currentSlide ? "slide active" : "slide"}
                >
                    <img src={media?.uri} alt={''}/>
                </div>
            ))}
        </div>
    )
}
export default MediaCarousel;