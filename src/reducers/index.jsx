export const TextReducer = (state = "", action) => {
  switch (action.type) {
    case "TEXT":
      return Object.assign({}, state, { value: action.value });
    case "ADDTAX":
      return Object.assign({}, state, { price: action.price * 1.08 });
    default:
      return state;
  }
};
