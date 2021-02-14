import { createStore } from "redux";

import { TextReducer } from "../reducers";

//state初期化
export const initialState = {
  price: {},
  numberValue: {},
};

//store作成
export const store = createStore(TextReducer, initialState);
