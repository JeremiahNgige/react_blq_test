import Container from "@/app/components/Container";
import React from "react";
import Link from "next/link";
import {Redressed} from "next/font/google";

const redressed = Redressed({subsets: ['latin'], weight: ['400']});

const NavBar = () => {

    return <div className="
    sticky
    top-0
    w-full
    bg-slate-200
    z-30
    shadow-sm
    ">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="
                flex
                items-center
                justify-between
                gap-3
                md:gap-0
                ">
                    <Link href={"/"}
                          className={`${redressed.className} font-bold text-2xl accent-green-600`}>Testvalley</Link>
                    <div className="hidden md:block">Search Bar</div>
                    <div className="flex items-center gap-8 md:gap-12">
                        <div>User Menu</div>
                        <div>Cart Count</div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
}

export default NavBar;