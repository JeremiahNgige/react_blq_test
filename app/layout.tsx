import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/nav/NavBar";
import Footer from "@/app/components/footer/Footer";


// const inter = Inter({subsets: ["latin"]});
const poppins = Poppins({subsets: ["latin"], weight: ["400", "700"]});

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
        <body className={poppins.className}>
        <NavBar></NavBar>
        <Footer></Footer>
        <main>
            {children}
        </main>
        <Footer></Footer>
        </body>
        </html>
    );
}
