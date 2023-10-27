import React from "react";
import Logo from '../../assets/logo.png';
import LightDark from "./LightDark";

const NavBar = () => {
  return (
    <div className="h-16 w-full justify-between bg-[#d9d9ff] flex items-center dark:text-gray-50 dark:bg-blue-950">
      <div className="pl-4">
        <img src={Logo} alt="" className="w-10 h-10"/>
      </div>
     

        <div id="modeToggle">
          <LightDark />
       
      </div>
    </div>
  );
};

export default NavBar;
