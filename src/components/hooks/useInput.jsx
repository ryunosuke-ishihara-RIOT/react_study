import { useState } from "react";

export const useInput = () => {
  const [text, setText] = useState({ value: "" });
  const handelChange = (e) => {
    setText({ value: e.target.value });
  };

  return { text, handelChange };
};
