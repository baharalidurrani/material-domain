import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { HomeRoute } from "./home.routes";

export function HomeModule() {
  console.log("HomeModule");
  const match = useRouteMatch();
  console.log("match", match);

  return (
    <>
      <h2>Home Module</h2>
      <ul>
        <li>
          <Link to={match.path}>home root</Link>
        </li>
        {HomeRoute.subRoutes?.map((route, i) => (
          <li key={i}>
            <Link to={match.path + route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {HomeRoute.subRoutes?.map((route, i) => (
          <Route key={i} path={match.path + route.path} component={route.component} />
        ))}

        <Route path={match.url} exact component={() => <h3>home root</h3>} />
        <Redirect to={{ pathname: match.path }} />
      </Switch>
    </>
  );
}
