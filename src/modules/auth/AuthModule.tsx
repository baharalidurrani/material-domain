import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { AuthRoute } from "./auth.routes";

export function AuthModule() {
  console.log("AuthModule");
  const match = useRouteMatch();
  const mainPage = AuthRoute.subRoutes?.length ? AuthRoute.subRoutes[0].path : "";

  return (
    <>
      <h2>Auth Module</h2>
      <ul>
        <li>
          <Link to={match.path}>Auth root</Link>
        </li>
        {AuthRoute.subRoutes?.map((route, i) => (
          <li key={i}>
            <Link to={match.path + route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {AuthRoute.subRoutes?.map((route, i) => (
          <Route key={i} path={match.path + route.path} component={route.component} />
        ))}
        {/* <Route path={match.url} exact component={() => <h3>Auth root</h3>} /> */}
        <Redirect to={{ pathname: match.path + mainPage }} />
      </Switch>
    </>
  );
}
