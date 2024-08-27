"use client";

import Link from "next/link";
import React from "react";

const CategoryHeader = () => {
  return (
    <nav className="flex h-[46px] w-full flex-row justify-around border-b border-white bg-black px-5 py-0 leading-[46px] text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/category"}>Category</Link>
      <Link href={"#"}>Product</Link>
    </nav>
  );
};

export default CategoryHeader;
