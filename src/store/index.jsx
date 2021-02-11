import { createStore } from "redux";

import { TextReducer } from "../reducers/index";
//state初期化
export const initialState = {
  price: "",
  value: "",
};

//store作成
export const store = createStore(TextReducer, initialState);
