import React, { useState } from "react";

export const CheckBox = ({ type, sex, value }) => {
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
