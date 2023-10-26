import React from "react";

const Input = ({ lable, placeholder, value, Name, setElement, formErrors }) => {
  
  return (
    <div className="m-auto w-full">
      <label htmlFor={lable} className="block mb-2 font-bold">
        {lable}:{" "}
      </label>
      <input
        type="text"
        className="bg-gray-50 border ErrorClass text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id={lable}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setElement(e.target.value)}
        required
      />
      {formErrors && (
        <p className=" p-1 text-sm text-black font-black">
          {formErrors[`${Name}`]}
        </p>
      )}
    </div>
  );
};

export default Input;
