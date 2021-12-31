import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { IRoute } from "src/common/typings/routes";
// import { isLogin } from "src/app-redux/auth/authSlice";
// import { useAppSelector } from "src/app-redux/hooks";
import { getToken } from "src/common/utils/tokenManager.util";

interface Props {
  children: React.ReactNode;
  redirectPath: string;
  path: string;
  route: IRoute;
}

export function RouteGuard(props: Props) {
  console.log("RouteGuard on path: ", props.path);
  const location = useLocation();
  // const token = useAppSelector(isLogin);

  return !props.route.guard || getToken() ? (
    <>{props.children}</>
  ) : (
    <Navigate to={props.redirectPath} state={{ from: location }} replace />
  );
}
