import React from "react";

const Input = ({
  value,
  setValue,
  errorEmpty,
  setErrorEmpty,
  errorWidth,
  setErrorWidth,
}) => {
  return (
    <>
      <input
        className={`bg-transparent text-center w-full border-b-2 outline-none text-white uppercase font-extralight placeholder:opacity-50 placeholder:font-extralight ${
          errorWidth ? "error" : null
        } ${errorEmpty ? "error" : null}`}
        placeholder="Add a new task"
        type="text"
        value={value}
        onChange={({ target }) => {
          if (target.value.length < 25) {
            setValue(target.value);
            setErrorWidth(false);
            setErrorEmpty(false);
          } else setErrorWidth(true);
        }}
      ></input>
      <button className="bg-transparent rounded-2xl px-8 text-white text-[24px] font-extralight -ml-[64px] mb-[2px] hover:bg-white hover:text-asteroid-100 hover:animate-pulse duration-300">
        +
      </button>
    </>
  );
};

export default Input;
