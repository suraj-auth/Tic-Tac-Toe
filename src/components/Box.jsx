import React from "react";
const Box = (props) => {
  return (
    <div
      className="bg-cyan-900 ml-1 mt-1 h-3/3 w-3/3 rounded flex items-center justify-center font-medium cursor-pointer"
      onClick={(e) => {
        props.tog(e, props.index);
      }}
    ></div>
  );
};
export default Box;
