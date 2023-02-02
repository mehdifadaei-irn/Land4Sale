import React, { useContext, useState } from "react";
import { ethers, BigNumber } from "ethers";
import { MainContext } from "../store/context";
import { IoMapSharp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { RiMap2Fill } from "react-icons/ri";

const contractAddress = "0x87e812E0cc4f0871e85Fdf35128d81BC54773C48";

function Hero() {
  return (
    <div className=" w-screen h-full md:px-44 px-20">
      <div className="w-full flex flex-col items-center">
        <div className="text-center pt-24 flex flex-col justify-center items-center">
          <h1 className="font-medium md:font-bold text-md lg:text-xl mb-2">
            پروژه جمع سپاری توکن محور (نشار) اولین IEO ایرانی
          </h1>
          <p className="w-4/6 mb-3">
            NSHR یک ارز باثبات و غیرمتمرکز است که تبعیض قائل نمی شود و هر فرد یا
            کسب و کاری می تواند مزایای آن را درک کند
          </p>
        </div>
        <div className="flex justify-center w-7/12 items-center flex-col lg:flex-row">
          <button className="rounded-2xl bg-[#31B6A7] px-3 py-1 text-white shadow-lg shadow-[#31B6A7] text-md">
            خرید NSHR
          </button>
          <Link href={"/map"}>
            <a className="flex items-center mr-6 hover:-translate-y-2 cursor-pointer h-10 transition-all duration-100">
              <p className="hover:text-blue-500">مشاهده نقشه</p>
              <RiMap2Fill className="mr-3" size={34} color={"#31b6a7"} />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-center ">
        <div>
          <Image
            src="/Untitled_design__1_-removebg-preview (1).png"
            alt="Picture of Home"
            width={700}
            height={700}
          />
        </div>

        <div>
          <h2 className="font-medium md:font-bold text-lg md:text-2xl">رمزگذاری شده و امن</h2>
          <p className="py-2 md:pt-4 text-md md:text-lg w-[25rem] ">
            یک ارز باثبات و غیرمتمرکز است که تبعیض قائل نمی شود و هر فرد یا کسب
            و کاری می تواند مزایای آن را درک کند
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
