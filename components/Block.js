import React, { useContext, useEffect, useState } from "react";
import { abi, contractAddress } from "../constants/constants";
import { useWeb3Contract } from "react-moralis";
import { MainContext } from "../store/context";

function Block({ color, num }) {
  const [scale, setScale] = useState(1);
  const [owner, setOwner] = useState();
  const index = num + 1;
  const cotext = useContext(MainContext);
  const [color1, setColor1] = useState();

  const { runContractFunction: getPlotOwner } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getPlotOwner",
    params: {
      _location: num,
    },
  });

  async function Clicked() {
    let owner1 = await getPlotOwner();
    // console.log(owner1 == "0x6e4E84Ca80362356db324405969d9C84CcbCA23d");

    cotext.setActive(num);
    cotext.setOwnerOf(owner1);
  }

  useEffect(() => {
    async function f() {
      let owner1 = await getPlotOwner();
      console.log(owner1);
      if (owner1 == "0x6e4E84Ca80362356db324405969d9C84CcbCA23d") {
        setColor1(color);
        console.log("blue");
      } else {
        setColor1("#000");
      }
    }
    f();
  });

  // useEffect(() => {
  //   if (cotext.active === index) {
  //     setScale(true);
  //     own();
  //   } else {
  //     setScale(false);
  //   }
  // }, [cotext.active]);

  const handleClick = async () => {
    let owner1 = await getPlotOwner();
    cotext.setOwnerOf(owner1);
    // cotext.setActive(index);

    // if (scale === false) {
    //   setScale(true);
    //
    // } else {
    //   setScale(false);
    // }
  };
  if (color1 == "#000") {
    return (
      <div
        className={`hover:bg-green-500 w-[60px] h-[60px] ${
          color1 == "#000" ? "cursor-not-allowed" : "cursor-pointer"
        } `}
        style={{ backgroundColor: color1 }}
        onClick={Clicked}
      />
    );
  }

  if (color == "#facc15") {
    return (
      <div
        className={`hover:bg-green-500 w-[60px] h-[60px] ${
          color1 == "#000" ? "cursor-not-allowed" : "cursor-pointer"
        } `}
        style={{ backgroundColor: color1 }}
      />
    );
  }

  return (
    <div
      className={`hover:bg-green-500 w-[60px] h-[60px] ${
        color1 == "#000" ? "cursor-not-allowed" : "cursor-pointer"
      } ${cotext.active == num? "bg-green-500": "#415589"} `}
      style={{ backgroundColor: cotext.active == num? "#2fd": color1 }}
      onClick={Clicked}
    />
  );
}

export default Block;
