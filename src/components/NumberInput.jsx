import React from "react";

const NumberInput = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const value = e.target.valueAsNumber || 0;
    onChange(value);
  };
  return (
    <input
      type="number"
      min={0}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default NumberInput;
