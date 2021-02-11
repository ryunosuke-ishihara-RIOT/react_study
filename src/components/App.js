import React from "react";
import { Provider } from "react-redux";

import { TaxIncludedCalculation } from "./pages/TaxIncludedCalculation";
import { store } from "../store/index";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <TaxIncludedCalculation />
      </Provider>
    </>
  );
}
