import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { IRoute } from "src/common/typings/routes";

interface Props {
  moduleRoute: IRoute;
}

export function ModuleRouter({ moduleRoute }: Props): React.ReactElement {
  console.log("ModuleRouter Rendered for", moduleRoute.path);
  const match = useRouteMatch();
  const mainPage = moduleRoute.subRoutes?.length ? moduleRoute.subRoutes[0].path : "";
  return (
    <Switch>
      {moduleRoute.subRoutes?.map((route, i) => (
        <Route
          key={i}
          path={match.path + route.path + (route.pathParam || "")}
          component={route.component}
        />
      ))}
      {/* <Route path={match.url} exact component={() => <h3>Module root</h3>} /> */}
      <Redirect to={{ pathname: match.path + mainPage }} />
    </Switch>
  );
}
