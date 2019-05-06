import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import { IGeneralState } from "./generalReducer";

export interface IStore {
  general: IGeneralState;
}

export const rootReducer = combineReducers({
  general: generalReducer
});

export default rootReducer;