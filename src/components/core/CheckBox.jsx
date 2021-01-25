import React, { useState } from "react";

const CheckBox = ({ type, sex, value }) => {
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <>
      <input
        id={sex}
        type={type}
        checked={isSwitched}
        onClick={() => setIsSwitched(!isSwitched)}
      />
      <label htmlFor={sex}>{value}</label>
    </>
  );
};

export default CheckBox;
