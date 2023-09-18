import React from "react";

const Clear = ({ value, setValue }) => {
  function clearTasks() {
    setValue(value.filter((item) => (!item.resolved ? item : null)));
  }

  return (
    <button
      onClick={clearTasks}
      className={`bg-transparent border-[1px] border-white block mx-auto py-[16px] px-[24px] text-white uppercase font-extralight rounded-3xl hover:bg-white hover:border-white hover:text-asteroid-100 hover:animate-pulse duration-300`}
    >
      Delete tasks done
    </button>
  );
};

export default Clear;
