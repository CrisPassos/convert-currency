import React from "react";

import { Switch, Route } from "react-router-dom";
import Homepage from "../../pages/Homepage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  );
}

export default App;
