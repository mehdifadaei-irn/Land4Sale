import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Socials() {
  return (
    <div className="xl:px-44 px-19 py-16">
      <div className="flex flex-col items-center pt-5 px-16 border-2 border-[#31B6A7] h-56 w-full shadow-md shadow-[#31b6a7] rounded">
        <h1 className="font-bold text-2xl">به ما بپیوندید</h1>
        <p className="font-medium text-md text-center pt-5">
          درباره بلاک چین بیشتر بدانید، با اعضای تیم و سایر افراد جامعه صحبت
          کنید و در شکل گیری آینده امور مالی غیر متمرکز نقش داشته باشید.
        </p>
        <div className="flex justify-between w-full px-5 py-9">
          <a href="" className="cursor-pointer">
            <FaTwitter size={38} color="#00acee"/>
          </a>
          <a href="" className="cursor-pointer">
            <BsInstagram size={35} />
          </a>
          <a href="" className="cursor-pointer">
            <FaGitlab size={35} color={"#fca326"}/>
          </a>
          <a href="" className="cursor-pointer">
            <FaGithub size={35} color={"#171515"} />
          </a>
          <a href="" className="cursor-pointer">
            <FaWhatsapp size={40} color={"#25D366"}/>
          </a>
          <a href="" className="cursor-pointer">
            <FaFacebookSquare size={35} color={"#3b5998"} />
          </a>
          <a href="" className="cursor-pointer">
            <FaLinkedin size={35} color={"#0072b1"}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
