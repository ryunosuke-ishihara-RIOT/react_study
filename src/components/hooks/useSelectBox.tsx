import { useState } from "react";

const OPTION_NAME_LIST: {
  id: string;
  name: string;
}[] = [
  { id: "1", name: "石原" },
  { id: "2", name: "木村" },
  { id: "3", name: "村山" },
  { id: "4", name: "下野" },
];

export const useSelectBox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<{
    id: string;
    name: string;
  }>({
    id: "1",
    name: "項目を選択してください",
  });

  const handleChange: () => void = () => setIsOpen((isOpen) => !isOpen);

  const onItemBtn: (key: string, value: string) => void = (key, value) => {
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
