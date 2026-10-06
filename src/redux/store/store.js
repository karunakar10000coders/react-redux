import { reducer } from "../reducer/reducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(reducer);

//redux => redux tooolkit
