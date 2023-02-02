import React, { useState } from "react";
import { createContext } from "react";

export const MainContext = createContext({
  ownerOf: "",
  setOwnerOf: () => {},
  active: null,
  setActive: ()=> {},
});

function MainContextProvider({ children }) {
  const [ownerOf, setOwnerOf] = useState('');
  const [active, setActive] = useState();

  const value = {
    ownerOf: ownerOf,
    setOwnerOf: setOwnerOf,
    active: active,
    setActive: setActive
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default MainContextProvider;
