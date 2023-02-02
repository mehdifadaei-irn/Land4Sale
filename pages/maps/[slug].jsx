import React, { useContext } from "react";
import { ConnectButton } from "@web3uikit/web3";
import Link from "next/link";
import { useRouter } from "next/router";
import Block from "../../components/Block";
import { MdLocationOn } from "react-icons/md";
import { abi, contractAddress } from "../../constants/constants";
import { useWeb3Contract } from "react-moralis";
import { MainContext } from "../../store/context";

const wallArr = [
  10, 24, 38, 39, 40, 41, 84, 85, 86, 100, 114, 83, 82, 81, 80, 94, 108, 122,
];

function slug() {
  const router = useRouter();
  const { slug } = router.query;
  const cotext = useContext(MainContext);

  const { runContractFunction: getPlotOwner } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getPlotOwner",
    params: {
      _location: 4,
    },
  });

  const { runContractFunction: buyPlot } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "buyPlot",
    params: {
      _index: cotext.active,
    },
  });

  async function buyPlott() {
    let confirm = await buyPlot();
  }

  async function own() {
    let owner1 = await getPlotOwner();
    console.log(owner1);
  }

  return (
    <div dir="rtl" className="h-screen w-full">
      <header className="border-b-2 border-black">
        <div className="max-w-5xl mx-auto py-4">
          <ul className="flex jus justify-between font-normal  lg:font-semibold mx-0 lg:mx-7">
            <li
              className=" cursor-pointer
          text-[#31B6A7] text-2xl font-bold b-4 -translate-y-2 lg:text-3xl"
            >
              <Link href={"/"}>نشار</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer hover:underline">
              <Link href={"/map"}>
                <p className="font-bold text-xl">ساختمان</p>
              </Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer hover:underline">
              <ConnectButton moralisAuth={false} bgColor="#33d" />
            </li>
          </ul>
        </div>
      </header>

      <div className="h-full flex flex-row-reverse">
        {/* LeftSide */}
        <div className="w-[16%] h-full flex-col hidden md:flex items-start justify-center pb-20">
          <div className="flex items-center">
            <div className="w-4 h-4 ml-2 bg-[#415589]" />
            بلوک خالی
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 ml-2 bg-[#000000]" />
            خریداری شده
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 ml-2 bg-[#CEB73D]" />
            دیوار
          </div>
          <p className="mt-3 font-medium">قیمت بین 30-20 NSHR</p>
          <p className="mt-3 font-medium">
            70%زمین های این طبقه واگذار شده است
          </p>
          <button className="py-2 px-3 rounded-2xl bg-white text-black border-[#31B6A7] border-2 shadow-lg shadow-[#31B6A7] font-medium text-center mt-2 hover:text-white hover:bg-black ease-out duration-300">
            خرید NSHR
          </button>
        </div>

        {/* MiddleSide */}
        <div className="w-8/12 h-full px-2 py-1  overflow-x-auto flex flex-col items-center">
          <h2 className="text-center font-semibold text-xl">طبقه {slug} ام</h2>
          <div className="border-4 border-black h-w grid grid-map grid-rows-6 grid-co py-1 mt-1 items-center justify-center pr-1">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 11, 22, 33, 44, 556, 1, 2132, 31, 232, 1,
              12, 31, 231, 23, 1, 31, 21, 452, 31, 1, 2, 3, 4, 5, 6, 7, 8, 11,
              22, 33, 44, 556, 1, 2132, 31, 232, 1, 12, 31, 1, 2, 3, 4, 5, 6, 7,
              8, 11, 22, 33, 44, 556, 1, 2132, 31, 232, 1, 12, 31, 1, 2, 3, 4,
              5, 6, 7, 8, 11, 22, 33, 44, 556, 1, 2132, 31, 232, 1, 12, 31, 231,
              23, 1, 31, 21, 452, 31, 1, 2, 3, 4, 5, 6, 7, 8, 11, 22, 33, 44,
              556, 1, 2132, 31, 232, 1, 12, 31, 1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6,
              7,
            ].map((i, index) => {
              if (wallArr.includes(index)) {
                if (index == 38) {
                  return (
                    <div
                      className={"w-[60px] h-[60px] rounded-br-2xl"}
                      style={{ backgroundColor: "#facc15" }}
                      key={index}
                    />
                  );
                }
                if (index == 86) {
                  return (
                    <div
                      className={"w-[60px] h-[60px] rounded-tl-2xl"}
                      style={{ backgroundColor: "#facc15" }}
                      key={index}
                    />
                  );
                }
                if (index == 80) {
                  return (
                    <div
                      className={"w-[60px] h-[60px] rounded-tr-2xl"}
                      style={{ backgroundColor: "#facc15" }}
                      key={index}
                    />
                  );
                }
                return <Block color={"#facc15"} key={index} num={index} />;
              } else {
                return (
                  <Block color={"#415589"} num={index} key={index}></Block>
                );
              }
            })}
          </div>
        </div>

        {/* RightSide */}
        <div className="w-[20%] h-full">
          <div className="border-2 border-[#31B6A7] h-[80%] mt-[14%] mr-4 rounded-lg shadow-md shadow-[#31B6A7] flex flex-col items-center py-4">
            <div className="w-5/6 bg-[#415589] h-32" />
            <div className="w-full flex px-4">
              <p className="font-medium text-lg">زمین 2-5</p>
            </div>
            <div className="w-full flex px-4 justify-between mt-2">
              <div className="bg-[#415589] text-white rounded-lg py-1 px-2">
                <p>معمولی</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium text-md">2-5</p>
                <MdLocationOn size={30} />
              </div>
            </div>

            <div className="flex justify-between w-full px-4 mt-3">
              <p className="font-medium text-md">صاحب</p>
              <p className="font-medium text-md text-blue-700">{cotext.ownerOf.slice(0,7)}</p>
            </div>

            <div className="flex justify-between w-full px-4 mt-3">
              <p className="font-medium text-md">شناسه توکن</p>
              <p className="font-medium text-md text-blue-700">
                {cotext.active}
              </p>
            </div>

            <div className="flex justify-between w-full px-4 mt-3">
              <p className="font-medium text-md">اندازه بلوک</p>
              <p className="font-medium text-md text-blue-700">16مترمربع</p>
            </div>

            <button
              className="mt-3 border-2 border-[#318B40] bg-[#5ECFC3] rounded-2xl font-medium text-lg py-1 px-3"
              onClick={buyPlott}
            >
              خرید با 23NSHR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default slug;
