import { createStore } from "redux";
import rootReducer from '../reducer'
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const initialState = {};

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, devToolsEnhancer({}));

export default store;
