import { createContext } from "react";

export const initialState = {
  IsLogin: false,
};
const Store = createContext(initialState); //store도 컴포넌트

export default Store;
