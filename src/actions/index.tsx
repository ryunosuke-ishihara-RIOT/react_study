// ActionCreator
const ADDTAX = "ADDTAX";
const NUMBER_VALUE = "NUMBER_VALUE";

export const addTax: (
  price: number
) => {
  type: string;
  price: number;
} = (price: number) => ({
  type: ADDTAX,
  price,
});

export const addNumber: (
  numberValue: string
) => {
  type: string;
  numberValue: string;
} = (numberValue: string) => ({
  type: NUMBER_VALUE,
  numberValue,
});
