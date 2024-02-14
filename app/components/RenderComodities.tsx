"use client"
import React, {useEffect, useState} from "react";
import CustomCarousel from "@/app/components/CustomCarousel";


const RenderCommodities = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data.items)
                setItems(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <CustomCarousel items={items}></CustomCarousel>
        </div>

    );
};

export default RenderCommodities;