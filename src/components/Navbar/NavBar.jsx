import React from "react";
import LightDark from "./LightDark";

const NavBar = () => {
  return (
    <div className="h-16 w-full bg-[#d9d9ff] flex items-center dark:text-gray-50 dark:bg-blue-950">
      <div className="w-[10%] min-w-15">
        <div id="logo" className="bg-blue-600 rounded-full h-10 w-10 mx-5"></div>
      </div>
      <div id="lists" className="w-[90%] flex font-medium">
        <div className="w-[90%] flex justify-end pr-20 gap-6">
         <a href="/">Home</a>
         <a href="/">About Us</a>
        </div>
        <div id="modeToggle">
          <LightDark />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
