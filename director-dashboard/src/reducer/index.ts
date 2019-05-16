import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import { IGeneralState } from "./generalReducer";
import { IProfileState } from './profileReducer';
import profileReducer from './profileReducer';

export interface IStore {
  general: IGeneralState;
  profile: IProfileState;
}

export const rootReducer = combineReducers({
  general: generalReducer,
  profile: profileReducer
});

export default rootReducer;