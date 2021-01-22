import React, { useState } from "react";

const CheckBox = ({ type, sex, value }) => {
  const [isSwitch, setIsSwitch] = useState(false);
  const handleChange = () => setIsSwitch(!isSwitch);
  return (
    <>
      <input id={sex} type={type} checked={isSwitch} onClick={handleChange} />
      <label htmlFor={sex}>{value}</label>
    </>
  );
};

export default CheckBox;
