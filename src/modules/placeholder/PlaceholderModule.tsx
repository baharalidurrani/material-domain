import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { AppLayout } from "src/components/layout/AppLayout";
import { PlaceholderRoute } from "./placeholder.routes";

export function PlaceholderModule() {
  console.log("PlaceholderModule");
  const match = useRouteMatch();

  return (
    <AppLayout>
      <h2>Placeholder Module</h2>
      <ul>
        <li>
          <Link to={match.path}>Placeholder root</Link>
        </li>
        {PlaceholderRoute.subRoutes?.map((route, i) => (
          <li key={i}>
            <Link to={match.path + route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {PlaceholderRoute.subRoutes?.map((route, i) => (
          <Route key={i} path={match.path + route.path} component={route.component} />
        ))}
        <Route path={match.url} exact component={() => <h3>placeholder root</h3>} />
        <Redirect to={{ pathname: match.path }} />
      </Switch>
    </AppLayout>
  );
}
