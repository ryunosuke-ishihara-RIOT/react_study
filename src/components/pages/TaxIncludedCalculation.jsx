import { useDispatch, useSelector, shallowEqual } from "react-redux";
import React from "react";

import { addTax, addNumber } from "../../actions/index";

export const TaxIncludedCalculation = () => {
  const { price, numberValue } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        value={numberValue}
        onChange={(e) => dispatch(addNumber(e.target.value))}
      />
      <button onClick={() => dispatch(addTax(numberValue))}>計算</button>
      <span> 税込金額: {price} </span>
    </div>
  );
};
