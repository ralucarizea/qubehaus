import React from "react";
import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import Footer from "@/components/Footer";
import NavbarMenu from "@/components/NavbarMenu";
import "./globals.css";

const generalFont = Outfit({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={generalFont.className}>
        <NavbarMenu/>
        <main className='flex min-h-screen flex-col bg-background'>{children}</main>
        <footer>
            <Footer/>
        </footer>
        </body>
        </html>
    );
}
