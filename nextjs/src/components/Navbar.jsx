import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/about"}>About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
