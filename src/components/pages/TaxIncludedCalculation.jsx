import { useDispatch, useSelector, shallowEqual } from "react-redux";
import React from "react";

import { addTax, addNumber } from "../../actions";

export const TaxIncludedCalculation = () => {
  const { state } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        value={state.numberValue}
        onChange={(e) => dispatch(addNumber(e.target.value))}
      />
      <button onClick={() => dispatch(addTax(state.numberValue))}>計算</button>
      <span> 税込金額: {state.price} </span>
    </div>
  );
};
