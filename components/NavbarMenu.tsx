import React from "react";
import Logo from "@/components/layout/Logo";
import {Button} from "@/components/ui/button";
import {Navbar} from "@/components/layout/Navbar";


const NavbarMenu: React.FC = () => {
    return (

        <div className="w-full flex items-center justify-between bg-background/0 pt-12 px-12 sticky top-0 z-50">
            <Logo/>
            <Navbar/>
            <Button variant="ghost" className="px-4 py-7 bg-orange-500 rounded-full text-muted text-[16px] font-light hover:text-white transition animate-accordion-up hover:shadow-orange-100 hover:shadow-xl hover:drop-shadow-sm hover:bg-orange-500">
                Configurează-ți casa
            </Button>
        </div>

    );
};

export default NavbarMenu;
