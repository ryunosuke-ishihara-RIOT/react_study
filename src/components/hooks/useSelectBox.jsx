import { useState } from "react";

export const useSelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ id: 1, name: "石原" });

  const handleChange = () => setIsOpen((isOpen) => !isOpen);

  const handleOnClickChange = (key, value) => {
    setSelectedValue({ id: key, name: value });
    setIsOpen((isOpen) => !isOpen);
  };

  return {
    isOpen,
    selectedValue,
    handleChange,
    handleOnClickChange,
  };
};
