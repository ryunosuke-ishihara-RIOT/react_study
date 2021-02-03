import { useState } from "react";

const OPTION_NAME_LIST = [
  { id: "1", name: "石原" },
  { id: "2", name: "木村" },
  { id: "3", name: "村山" },
  { id: "4", name: "下野" },
];

export const useSelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: "1",
    name: "項目を選択してください",
  });

  const handleChange = () => setIsOpen((isOpen) => !isOpen);

  const onItemBtn = (key, value) => {
    setSelectedValue({ id: key, name: value });
    setIsOpen((isOpen) => !isOpen);
  };

  return {
    isOpen,
    OPTION_NAME_LIST,
    selectedValue,
    handleChange,
    onItemBtn,
  };
};
