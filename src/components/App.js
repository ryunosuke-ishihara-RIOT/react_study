import { Provider } from "react-redux";
import React from "react";

import { TaxIncludedCalculation } from "./pages/TaxIncludedCalculation";
import { store } from "../store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <TaxIncludedCalculation />
      </Provider>
    </>
  );
};
