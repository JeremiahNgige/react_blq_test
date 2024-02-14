"use client";
import React, {useEffect, useState} from "react";
import {MainShortcut} from "@/app/models/ShortcutModel";
import TopBanner from "@/app/components/TopBanner";
import Link from "next/link";
import Image from "next/image";


const ShortCutsView = () => {
    const [shortcuts, setShortcuts] = useState<MainShortcut[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setShortcuts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={"flex flex-col relative justify-center gap-0 md:flex-row mx-auto"}>
            {shortcuts.map((shortcut, index) => (
                <div key={index}
                     className={"mx-auto"}
                >
                    <Link href={shortcut.linkUrl} style={{textDecoration: "none"}}>
                        <Image src={shortcut.imageUrl} alt={"Banner"} fill={false} width={50} height={50}>
                        </Image>
                    </Link>
                    <div className={"flex flex-row font-light mt-3"}><h2
                        style={{fontSize: "12px"}}> {shortcut.title}</h2></div>

                </div>
            ))}
        </div>

    );
};

export default ShortCutsView;