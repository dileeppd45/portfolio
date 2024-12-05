import React, { createContext, useState, useRef } from 'react';

// Create Context
export const MenuContext = createContext();

// Create a Provider Component
const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "750px";
    }
  };

  return (
    <MenuContext.Provider value={{ menu, setMenu, menuRef, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
