import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NavigationBar from './components/nav-bar/navBar';
import * as serviceWorker from './serviceWorker';
import CompanyOverview from './components/companyOverview/companyOverview';
import PersonalPage from './components/personalPage/personalPage';

ReactDOM.render(<PersonalPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
