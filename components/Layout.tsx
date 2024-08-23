import React, { ReactNode } from "react";
import Logo from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col bg-background sm:p-4 md:p-6 lg:p-12">
            <div className="w-full flex items-center justify-between">
                <Logo />
                <Navbar />
                <Button variant="ghost" className="px-4 py-6 bg-orange-500 rounded-full text-muted  text-[15px]">
                    Configurează-ți casa
                </Button>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
