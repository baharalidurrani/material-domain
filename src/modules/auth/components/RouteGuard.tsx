import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isLogin } from 'src/app-redux/auth/authSlice';
import { useAppSelector } from 'src/app-redux/hooks';
import { type IRoute } from 'src/common/typings/routes';

interface Props {
  children: React.ReactNode;
  redirectPath: string;
  path: string;
  route: IRoute;
}

export function RouteGuard(props: Props) {
  console.log('RouteGuard on path: ', props.path);
  const location = useLocation();
  const token = useAppSelector(isLogin);

  return !props.route.guard || token ? (
    <>{props.children}</>
  ) : (
    <Navigate to={props.redirectPath} state={{ from: location }} replace />
  );
}
