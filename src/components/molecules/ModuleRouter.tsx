import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IRoute } from 'src/common/typings/routes';

interface Props {
  moduleRoute: IRoute;
}

export function ModuleRouter({ moduleRoute }: Props): React.ReactElement {
  console.log('ModuleRouter Rendered for', moduleRoute.path);
  const mainPage = moduleRoute.subRoutes?.length ? moduleRoute.subRoutes[0].path : '';
  return (
    <Routes>
      {moduleRoute.subRoutes?.map((sub, i) => (
        <Route key={i} path={`${sub.path + (sub.pathParam ?? '')}/*`} element={<sub.component />} />
      ))}
      <Route path="*" element={<Navigate replace to={mainPage} />} />
    </Routes>
  );
}
