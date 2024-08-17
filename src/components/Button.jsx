import React from "react";

const Button = () => {
  return (
    <button
      onClick={() => {
        window.location.reload();
      }}
      className="text-cyan-100 mt-10 bg-slate-900 h-14 w-40 rounded-3xl"
    >
      Reset
    </button>
  );
};

export default Button;
