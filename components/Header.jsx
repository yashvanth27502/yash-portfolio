"use client";

import Link from  "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return ( <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between item-center">

        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
        <Image 
            src="/favicon.png" // Adjust this path if your logo is in a different location in `public`
            alt="Portfolio Logo"
            width={40} // Adjust the width based on your design needs
            height={40} // Adjust the height based on your design needs
            className="object-contain" // Optional: keeps the image contained without stretching
          />
        <h1 className="text-3xl font-semibold">
            Portfolio<span className="text-accent">.</span>
        </h1>
        </Link>


        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex item-center gap-8">
            <Nav />
            <Link href={"/contact"}>
            <Button className="h-12 justify-center items-center">Hire me </Button>
            </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
    </div>
  </header>
  );
};

export default Header