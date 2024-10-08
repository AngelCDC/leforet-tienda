import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import CartProvider from "@/app/components/providers";
import ShoppingCartModal from "@/app/components/ShoppingCartModule";
import Header from "./components/header";
import HeaderMobile from "./components/header-mobile";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <CartProvider>
        <Navbar/>
        <Header/>
        <HeaderMobile/>
        <ShoppingCartModal/>
        {children}

        </CartProvider>

        </body>
    </html>
  );
}