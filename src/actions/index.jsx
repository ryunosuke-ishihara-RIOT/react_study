// ActionCreator
const ADDTAX = "ADDTAX";
const NUMBER_VALUE = "NUMBER_VALUE";

export const addTax = (price) => {
  return {
    type: ADDTAX,
    price,
  };
};

export const addNumber = (numberValue) => {
  return {
    type: NUMBER_VALUE,
    numberValue,
  };
};
