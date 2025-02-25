import React from "react";
import Logo from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

const NavbarMenu: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between bg-background/0 pt-12 px-12 sticky top-0 z-50">
      <Logo />
      <Navbar />
      <Link
        href="/configurator"
        className="p-4 bg-yellow-500 text-[15px] rounded-full text-white font-light hover:text-white transition animate-accordion-up  hover:drop-shadow-2xl hover:bg-yellow-500"
      >
        Configureaza-ti casa
      </Link>
    </div>
  );
};

export default NavbarMenu;
