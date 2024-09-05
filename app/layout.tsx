import React from "react";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import NavbarMenu from "@/components/NavbarMenu";
import "../app/globals.css";
import { cn } from "@/lib/utils";
import "/app/globals.css";
import { ConditionalLayout } from "@/components/ConditionalLayout";

const generalFont = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  className = generalFont.className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <html lang="en">
      <body className={cn("relative bg-background", className)}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
