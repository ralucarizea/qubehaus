import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const generalFont = Outfit({ subsets: ["latin"] });

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
    <html lang="ro">
      <body className={generalFont.className}>{children}</body>
    </html>
  );
}
