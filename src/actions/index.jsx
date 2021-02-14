// ActionCreator
const ADDTAX = "ADDTAX";
const NUMBER_VALUE = "NUMBER_VALUE";

export const addTax = (price) => ({
  type: ADDTAX,
  price,
});

export const addNumber = (numberValue) => ({
  type: NUMBER_VALUE,
  numberValue,
});
