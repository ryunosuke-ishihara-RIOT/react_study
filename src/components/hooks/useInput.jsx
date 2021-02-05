import { useState } from "react";

const INPUT_TAG_DATA = [
  { id: "1", type: "text", placeholder: "名前" },
  { id: "2", type: "number", placeholder: "年齢" },
];
export const useInput = () => {
  const [text, setText] = useState({ value: "" });
  const handelChange = (e) => {
    setText({ value: e.target.value });
  };

  return { INPUT_TAG_DATA, text, handelChange };
};
