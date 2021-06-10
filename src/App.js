import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import DefaultLayout from "./layout/Default";
import RouteLayout from "./layout/RouteLayout";

import LoginView from "./route/MainView";

function App() {
  return (
    <Router>
      <Switch>
        <RouteLayout
          exact
          path="/"
          layout={DefaultLayout}
          component={MainView} />
      </Switch>
    </Router>
  );
}

export default App;