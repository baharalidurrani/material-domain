import React from "react";
import { Redirect } from "react-router-dom";
// import { isLogin } from "src/app-redux/auth/authSlice";
// import { useAppSelector } from "src/app-redux/hooks";
import { getToken } from "src/common/utils/tokenManager.util";

interface Props {
  children: React.ReactNode;
  redirectPath: string;
  path: string;
}

export function RouteGuard(props: Props) {
  console.log("RouteGuard on path: ", props.path);
  // const token = useAppSelector(isLogin);

  return getToken() ? <>{props.children}</> : <Redirect to={{ pathname: props.redirectPath }} />;
}
