import { createStore } from "redux";
import rootReducer from '../reducer'
import { devToolsEnhancer } from "redux-devtools-extension";

const initialState = {};

const store = createStore(rootReducer, initialState, devToolsEnhancer({}));

export default store;
