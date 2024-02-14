import Image from "next/image";
import React from "react";
import {link} from "node:fs";
import Link from "next/link";

interface TopBannerProps {
    title: string
    image: string
    href: string
}

const TopBanner: React.FC<TopBannerProps> = ({title, image, href}) =>
    (
        <div
            style={{height: 350}}
            className={"relative bg-gradient-to-r from-gray-400 to-gray-100 mx-auto px-8 py-12 flex flex-col gap-3 md:flex-row justify-evenly"}>
            <Link href={href} style={{textDecoration: "none"}}>
                <Image src={image} alt={"Banner"} fill={true}>
                </Image>
                <div style={{position: 'absolute', top: '20px', left: '20px', color: 'black', fontSize: '24px'}}>
                    {/*{title}*/}
                </div>
            </Link>
        </div>

    )

export default TopBanner;