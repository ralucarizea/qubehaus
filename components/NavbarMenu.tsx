import React from "react";
import Logo from "@/components/layout/Logo";
import {Button} from "@/components/ui/button";
import {Navbar} from "@/components/layout/Navbar";


const NavbarMenu: React.FC = () => {
    return (

        <div className="w-full flex items-center justify-between bg-background pt-12 px-12">
            <Logo/>
            <Navbar/>
            <Button variant="ghost" className="px-4 py-6 bg-orange-500 rounded-full text-muted  text-[15px]">
                Configurează-ți casa
            </Button>
        </div>

    );
};

export default NavbarMenu;
