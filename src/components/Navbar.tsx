"use client";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import { useAtom } from "jotai";
// import { cartAtom } from "@/atoms/cartAtoms";
import Link from "next/link";
import { cartAtom } from "@/store/cartAtom";

const Navbar = () => {
  const [cart] = useAtom(cartAtom);
  return (
    <header className="sticky  top-0  pt-4 w-full shadow-md border border-b border-gray-200 z-10 bg-black">
      <div className="h-[68px] mx-auto flex flex-row justify-between items-center  px-4 md:px-8 lg:px-28 lg:gap-x-24 ">
        <div>
          <Image src="/logonew.png" alt="logo" width={100} height={100} />
          {/* <Image src="/logonew.png" alt="logo" width={100} height={100}  /> */}
        </div>
        <div className=" relative">
          <ShoppingCartIcon />
          <Link
            href={"product/cart"}
            className=" cursor-pointer text-sm absolute -top-2 left-5"
          >
            {cart.length}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
