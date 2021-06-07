import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppLayout } from "src/components/appLayout/AppLayout";
import { RouteGuard } from "src/modules/auth/components/RouteGuard";
import { ROUTES } from "./routes";

export function AppRouting() {
  console.log("AppRouting");

  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route key={i} path={route.path}>
              {route.guard ? (
                <RouteGuard path={route.path} redirectPath="/auth/login">
                  {<route.component />}
                </RouteGuard>
              ) : (
                <route.component />
              )}
            </Route>
          ))}

          {/* <Route path="/" exact>
          <h1>root</h1>
        </Route> */}
          <Redirect to={{ pathname: "/home" }} />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
}
