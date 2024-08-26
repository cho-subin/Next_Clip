"use client";

import Link from "next/link";
import React from "react";

const CategoryHeader = () => {
  return (
    <nav
      className="py-0 px-5 flex flex-row justify-around w-full h-[46px]
      leading-[46px] bg-black text-green border-b border-white"
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/category"}>Category</Link>
      <Link href={"#"}>Product</Link>
    </nav>
  );
};

export default CategoryHeader;
