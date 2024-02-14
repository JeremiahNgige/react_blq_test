import type {Metadata} from "next";
import {Poppins, Roboto_Serif} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/nav/NavBar";
import Body from "@/app/components/body/Body";
import React from "react";
import {NextUIProvider} from "@nextui-org/react"
import {Providers} from "@/app/app";


// const inter = Inter({subsets: ["latin"]});
const poppins = Poppins({subsets: ["latin"], weight: ["400", "700"]});
const serif = Roboto_Serif({subsets: ['latin'], weight: ["400", "700"]});

export const metadata: Metadata = {
    title: "E-Commerce",
    description: "E-commerce assignment",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={serif.className}>
        <Providers>
            <NavBar></NavBar>
            <Body></Body>
        </Providers>

        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
