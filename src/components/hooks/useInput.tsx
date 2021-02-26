import { useState } from "react";

const INPUT_TAG_DATA: {
  id: string;
  type: string;
  placeholder: string;
}[] = [
  { id: "1", type: "text", placeholder: "名前" },
  { id: "2", type: "number", placeholder: "年齢" },
];
export const useInput = () => {
  const [text, setText] = useState<{ value: string }>({ value: "" });
  const handelChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setText({ value: e.target.value });
    console.log(text);
  };

  return { INPUT_TAG_DATA, text, handelChange };
};
