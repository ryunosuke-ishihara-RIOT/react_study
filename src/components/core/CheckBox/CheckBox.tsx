import React from "react";
export type Props = {
  isChecked: boolean;
  key: string;
  value: string;
  changeId: (id: string) => void;
};
export const CheckBox: React.FC<Props> = ({
  isChecked,
  key,
  value,
  changeId,
}) => {
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => changeId(key)}
        id={key}
      />
      <label htmlFor={key}>{value}</label>
    </>
  );
};
