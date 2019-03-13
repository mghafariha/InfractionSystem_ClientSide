import React from 'react'
export const Button = ({ text, onClick, type, disabled,style }) => (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={style}
    >
      {text}
    </button>
  );

  export default Button