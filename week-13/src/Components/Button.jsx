import React from 'react';

function Button({ children, btnStatus, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${btnStatus ? "bg-text" : "bg-accent"} cursor-pointer text-white font-bold px-4 rounded-lg transition-all text-center w-9/12 py-3`}
    >
      {children}
    </div>
  );
}

export default Button;
