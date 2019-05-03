import React, { Component } from "react";
import styles from "./app.module.css";
import { Provider } from "react-redux";
import PageContainer from './containers/personalPageContainer/personalPageContainer';

class App extends Component {
  public render() {
    return (
       <PageContainer />
    );
  }
}

export default App;
