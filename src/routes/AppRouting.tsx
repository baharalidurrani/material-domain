import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from 'src/components/appLayout/AppLayout';
import { PageSkeleton } from 'src/components/molecules/PageSkeleton';
import { RouteGuard } from 'src/modules/auth/components/RouteGuard';
import { ROUTES } from './routes';

export function AppRouting() {
  console.log('AppRouting');

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {ROUTES.map((route, i) => (
            <Route
              key={i}
              path={`${route.path}/*`}
              element={
                <RouteGuard path={route.path} route={route} redirectPath="/auth/login">
                  <React.Suspense fallback={<PageSkeleton />}>{<route.component />}</React.Suspense>
                </RouteGuard>
              }
            ></Route>
          ))}
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
