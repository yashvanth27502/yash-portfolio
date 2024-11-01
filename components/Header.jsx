"use client";

import Link from  "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return ( <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between item-center">

        {/* Logo */}
        <Link href={"/"}>
        <h1 className="text-4xl font-semibold">
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