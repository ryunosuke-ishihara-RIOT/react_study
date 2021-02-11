import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTax, addText } from "../../actions/index";

export const TaxIncludedCalculation = () => {
  const price = useSelector((state) => state.price);
  const number = useSelector((state) => state.value);

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => dispatch(addText(e.target.value))}
      />
      <button onClick={() => dispatch(addTax(number))}>計算</button>
      税込金額：{price}
    </div>
  );
};
