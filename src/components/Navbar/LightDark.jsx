import React from "react";

const LightDark = () => {
  const handleChange = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return (
    <>
      <div className="flex justify-end">
          <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Mode
          </span>
        <label class="relative inline-flex items-center mr-5 cursor-pointer">

          <input 
          type="checkbox"
          onChange={handleChange}
          class="sr-only peer" 
           />

          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"></div>
        </label>
      </div>
    </>
  );
};

export default LightDark;
