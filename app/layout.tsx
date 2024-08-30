import React from "react"
import type {Metadata} from "next"
import {Outfit} from "next/font/google"
import Footer from "@/components/Footer"
import NavbarMenu from "@/components/NavbarMenu"
import "@/globals.css"
import {cn} from "@/lib/utils"

const generalFont = Outfit({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
                                       className = "", // Default className to an empty string
                                       children,
                                   }: {
    children: React.ReactNode
    className?: string // className is optional and defaults to a string
}) {
    return (
        <html lang="en">
        <body className={cn("relative bg-background", className)}>
        <NavbarMenu/>
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer/>
        </body>
        </html>
    )
}
