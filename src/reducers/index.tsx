export const TextReducer: (
  state: {} | undefined,
  action: {
    type: string;
    price: number;
    numberValue: string;
  }
) => {} = (state = {}, action) => {
  switch (action.type) {
    case "NUMBER":
      return { ...state, numberValue: action.numberValue };

    case "ADDTAX":
      return { ...state, price: Math.ceil(action.price * 1.08) };
    default:
      return state;
  }
};
