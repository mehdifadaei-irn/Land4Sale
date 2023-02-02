import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logos() {
  return (
    <div className="md:h-64 h-full border-t border-black bg-white">
      <h1 className="font-medium md:font-bold text-lg md:text-2xl pr-5">تکنولوژی های استفاده شده</h1>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="-translate-y-7 pl-7 flex flex-col items-center">
          <a href="https://www.alchemy.com/" target={"_blank"}>
            <Image src={"/alchemy.svg"} width={200} height={200} />
          </a>
          <p className="tr -translate-y-3 font-bold text-xl">Alchemy</p>
        </div>
        <div className="-translate-y-7 pl-3 flex flex-col items-center">
          <a href="https://docs.chain.link/" target={"_blank"}>
            <Image
              src={"/Chainlink Logo Blue.png"}
              width={200}
              height={200}
              objectFit={"contain"}
            />
          </a>
          <p className="tr -translate-y-3 font-bold text-xl">Alchemy</p>
        </div>
        <div className="-translate-y-7 pl-3 flex flex-col items-center">
          <a href="https://metamask.io/" target={"_blank"}>
            <Image
              src={"/Metamask-logo.png"}
              width={250}
              height={200}
              objectFit={"contain"}
            />
          </a>
          <p className="tr -translate-y-3 font-bold text-xl">Alchemy</p>
        </div>
        <div className="-translate-y-7 pl-3 flex flex-col items-center">
          <a href="https://moralis.io/" target={"_blank"}>
            <Image
              src={"/Moralis.png"}
              width={200}
              height={200}
              objectFit={"contain"}
            />
          </a>
          <p className="tr -translate-y-3 font-bold text-xl">Alchemy</p>
        </div>
        <div className="-translate-y-7 pl-3 flex flex-col items-center pr-7">
          <a href={"https://www.openzeppelin.com/"} target="_blank">
            <Image
              src={"/openzeppelin-logo-vector.svg"}
              width={200}
              height={200}
              className="c cursor-pointer"
            />
          </a>
          <p className="tr -translate-y-3 font-bold text-xl">Alchemy</p>
        </div>
      </div>
    </div>
  );
}

export default Logos;
