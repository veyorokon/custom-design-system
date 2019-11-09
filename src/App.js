/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router-dom";
import Editor from "layouts/Editor.jsx";
import {createBrowserHistory} from "history";
import {ThemeProvider} from "styled-components";

import theme from "theme";
const hist = createBrowserHistory();
const App = () =>
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Router history={hist}>
        <Route path="/" component={Editor} />
      </Router>
    </ThemeProvider>,
    document.getElementById("root")
  );

export default App;
