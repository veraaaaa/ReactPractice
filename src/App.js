import React from 'react';
import "assets/style/reset.css"
// 4引用
import { Provider } from 'react-redux'
import store from './store/index'
import Layout from "./pages/home/Layout"
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    // 5 使用
    <Provider store={store}>
      <Router>
    <div className="App">
        <Layout/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
