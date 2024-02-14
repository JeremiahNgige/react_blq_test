"use client";
import React, {useEffect, useState} from 'react';
import TopBanner from './TopBanner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {MainBanner} from "@/app/models/ItemOneModel";


const TopBannerCarousel: React.FC = () => {
    const [banners, setBanners] = useState<MainBanner[]>([]);

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.testvalley.kr/main-banner/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBanners(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Carousel responsive={responsive}>
            {banners.map((banner, index) => (
                <div key={index} className={" pt-0 p-4"}>
                    <TopBanner title={banner.title} image={banner.pcImageUrl} href={banner.linkUrl}></TopBanner>
                </div>
            ))}
        </Carousel>
    );
};

export default TopBannerCarousel;
