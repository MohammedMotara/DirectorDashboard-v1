import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PersonalPageContainer from './containers/personalPageContainer/personalPageContainer';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import {
//   faBell,
//   faUser,
//   faBook
// } from "@fortawesome/free-solid-svg-icons";

ReactDOM.render(<PersonalPageContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
