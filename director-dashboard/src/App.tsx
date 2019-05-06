import React, { Component } from "react";
import styles from "./app.module.css";
import { Provider } from "react-redux";
import PageContainer from './containers/personalPageContainer/personalPageContainer';
import store from "./store";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
       <PageContainer />
      </Provider>
    );
  }
}

export default App;
