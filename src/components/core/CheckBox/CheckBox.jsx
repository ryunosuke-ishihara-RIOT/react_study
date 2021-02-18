import React from "react";

export const CheckBox = ({ isChecked, id, changeId, value }) => {
  console.log(changeId);
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => changeId(id)}
        id={id}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};
