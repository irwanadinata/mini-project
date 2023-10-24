import React from 'react';

const Input = ({ placeholder,type, value, onChange }) => {
  return (
    <input className="input input-bordered input-warning w-full text-black"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
