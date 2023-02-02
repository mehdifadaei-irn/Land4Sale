import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-48 border-t border-black  bg-white px-24">
      <div className="w-full h-full">
        <ul className="flex flex-wrap items-center justify-center pt-4 pb-20">
          <li className="pl-10 hover:underline cursor-pointer">
            <p className="w-32 ">فرصت های شعلی</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p className="">بلاگ</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p className="w-28 ">شرایط و قوانین</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p className="w-28 ">سوالات متداول</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p>راهنما</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p>سوالات متداول</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p>درباره ما</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p>نقشه</p>
          </li>
          <li className="pl-10 hover:underline cursor-pointer">
            <p>تماس با ما</p>
          </li>
        </ul>

        <div className="border-t-2 w-full flex justify-center">
          <h3 dir="ltr" className="flex items-center tracking-widest font-medium">
            © 2023 SaminRay, All right Reserved, Made With{" "}
            <span>
              <FaHeart className="mx-3 " size={35} color="#e91e63" />
            </span>{" "}
            in Iran
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
