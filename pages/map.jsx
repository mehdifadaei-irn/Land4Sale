import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { VscTriangleUp } from "react-icons/vsc";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

function map() {
  const [arrowState, setArrowState] = useState("");
  const [blockColor, setBlockColor] = useState("#000");

  function setCursor(e) {
    setArrowState(parseInt(e.target.id));
  }

  useEffect(() => {
    switch (arrowState) {
      case 5:
        setBlockColor("#166534");
        break;
      case 4:
        setBlockColor("#047857");
        break;
      case 3:
        setBlockColor("#16a34a");
        break;
      case 2:
        setBlockColor("#22c55e");
        break;
      case 1:
        setBlockColor("#34d399");
        break;

      default:
        setBlockColor("#000");
        break;
    }
  }, [arrowState]);

  //   function clicked(){
  //     console.log(arrowState);
  //   }

  return (
    <div dir="rtl" className="w-full h-screen bg-slate-300 overflow-hidden">
      <Header />
      {/* <button onClick={clicked}>cli</button> */}

      {/* Left Side */}
      <div className="flex flex-col md:flex-row-reverse justify-between h-full ">
        <div className=" w-1/2 items-center flex flex-col justify-center ">
          <VscTriangleUp
            size={"42%"}
            width={"50%"}
            className={"-translate-y-11"}
          />

          <div className="w-full -translate-y-28">
            <div className="w-full flex items-center flex-col">
              <div className="w-full flex flex-row-reverse items-center justify-center">
                <FaLongArrowAltRight
                  className="-translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 5 ? "100" : "0"}` }}
                />
                <div
                  className="w-[29%] h-7 bg-emerald-800 rounded-sm cursor-pointer"
                  id="5"
                  onClick={(e) => setCursor(e)}
                ></div>
                <FaLongArrowAltLeft
                  className="translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 5 ? "100" : "0"}` }}
                />
              </div>

              <div className="flex flex-row justify-between w-[29%]">
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
              </div>
            </div>

            <div className="w-full flex items-center flex-col">
              <div className="w-full flex flex-row-reverse items-center justify-center">
                <FaLongArrowAltRight
                  className="-translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 4 ? "100" : "0"}` }}
                />
                <div
                  className="w-[29%] h-7 bg-emerald-700 rounded-sm cursor-pointer"
                  id="4"
                  onClick={(e) => setCursor(e)}
                ></div>
                <FaLongArrowAltLeft
                  className="translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 4 ? "100" : "0"}` }}
                />
              </div>

              <div className="flex flex-row justify-between w-[29%]">
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
              </div>
            </div>

            <div className="w-full flex items-center flex-col">
              <div className="w-full flex flex-row-reverse items-center justify-center">
                <FaLongArrowAltRight
                  className="-translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 3 ? "100" : "0"}` }}
                />
                <div
                  className="w-[29%] h-7 bg-emerald-600 rounded-sm cursor-pointer"
                  id="3"
                  onClick={(e) => setCursor(e)}
                ></div>
                <FaLongArrowAltLeft
                  className="translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 3 ? "100" : "0"}` }}
                />
              </div>

              <div className="flex flex-row justify-between w-[29%]">
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
              </div>
            </div>

            <div className="w-full flex items-center flex-col">
              <div className="w-full flex flex-row-reverse items-center justify-center">
                <FaLongArrowAltRight
                  className="-translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 2 ? "100" : "0"}` }}
                />
                <div
                  className="w-[29%] h-7 bg-emerald-500 rounded-sm cursor-pointer"
                  id="2"
                  onClick={(e) => setCursor(e)}
                ></div>
                <FaLongArrowAltLeft
                  className="translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 2 ? "100" : "0"}` }}
                />
              </div>

              <div className="flex flex-row justify-between w-[29%]">
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
              </div>
            </div>

            <div className="w-full flex items-center flex-col">
              <div className="w-full flex flex-row-reverse items-center justify-center">
                <FaLongArrowAltRight
                  className="-translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 1 ? "100" : "0"}` }}
                />
                <div
                  className="w-[29%] h-7 bg-emerald-400 rounded-sm cursor-pointer"
                  id="1"
                  onClick={(e) => setCursor(e)}
                ></div>
                <FaLongArrowAltLeft
                  className="translate-x-3"
                  size={25}
                  style={{ opacity: `${arrowState == 1 ? "100" : "0"}` }}
                />
              </div>

              <div className="flex flex-row justify-between w-[29%]">
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
                <div className="w-3 h-5 bg-white border-r-2 border-l-2 border-black"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}

        <div className="w-1/2 flex items-center justify-center" style={{opacity: arrowState ? "100": "0"}}>
          <div className="border-2 border-[#31B6A7] w-5/12 h-4/6 -translate-y-11 rounded-lg shadow-xl shadow-[#31B6A7] flex flex-col items-start px-10">
            <h3 className="font-medium text-center w-full text-lg">
              ساختمان سبر <span className="text-green-700">نشار</span>
            </h3>

            <div className="w-full flex flex-col items-center">
              <div
                className={`w-[86%] h-32 mt-3 rounded`}
                style={{ backgroundColor: blockColor }}
              />
            </div>
            <p className="mt-1 font-semibold">
              طبقه <span>{arrowState}</span>ام
            </p>
            <p className="font-medium mt-2 text-white">
              <span
                dir="ltr"
                className="bg-blue-500 rounded-lg py-1 px-1 font-medium "
              >
                20-30<span className="text-white"> NSHR</span>
              </span>
            </p>
            <p className="font-medium">70% این طبقه فروخته شده است. </p>
            <div className="w-full flex flex-col items-center">
              <Link href={`/maps/${arrowState}`}>
                <button className="py-2 px-3 rounded-2xl bg-[#31B6A7] text-white font-medium text-center shadow-md shadow-[#31B6A7] hover:text-white hover:bg-black ease-out duration-300">
                  مشاهده طبقه
                </button>
              </Link>
              <button className="py-2 px-3 rounded-2xl bg-white text-black border-[#31B6A7] border-2 shadow-lg shadow-[#31B6A7] font-medium text-center mt-2 hover:text-white hover:bg-black ease-out duration-300">
                خرید NSHR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default map;
