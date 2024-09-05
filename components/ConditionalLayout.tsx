"use client";

import { usePathname } from "next/navigation";
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";

export const ConditionalLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isConfiguratorPage = pathname.startsWith("/configurator");

  return (
    <>
      {!isConfiguratorPage && <NavbarMenu />}
      <main>{children}</main>
      {!isConfiguratorPage && <Footer />}
    </>
  );
};
