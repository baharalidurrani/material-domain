import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function AppRouting() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route exact path="/about" component={() => <h1>About</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
