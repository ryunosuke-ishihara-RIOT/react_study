// ActionCreator
const ADDTAX = "ADDTAX";

export const addTax = (price) => {
  return {
    type: ADDTAX,
    price,
  };
};

const TEXT = "TEXT";

export const addText = (value) => {
  return {
    type: TEXT,
    value,
  };
};
