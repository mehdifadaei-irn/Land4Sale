import React from "react";
import { ConnectButton } from "@web3uikit/web3";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b-2 border-black">
      <div className="max-w-5xl mx-auto py-4">
        <ul className="flex jus md:justify-between font-normal  lg:font-semibold mx-0 lg:mx-7 justify-center">
          <li className="hover:text-blue-500 cursor-pointer hover:underline hidden md:block">
            اکوسیستم
          </li>
          <li className="hover:text-blue-500 cursor-pointer hover:underline hidden md:block">
            اموزش
          </li>
          <li className="hover:text-blue-500 cursor-pointer hover:underline hidden md:block">
            مهندسین
          </li>
          <li
            className=" cursor-pointer
          text-[#31B6A7] text-2xl font-bold b-4 -translate-y-2 lg:text-3xl hidden md:block"
          >
            <Link href={"/"}>نشار</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer hover:underline hidden md:block">
            درباره نشار
          </li>
          <li className="hover:text-blue-500 cursor-pointer hover:underline hidden md:block">
            <Link href={"/map"}>نقشه</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer hover:underline">
            <ConnectButton moralisAuth={false} bgColor="#33d" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
