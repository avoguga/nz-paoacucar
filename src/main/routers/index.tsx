import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes';
import React from 'react';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route
            path="*"
            key="not-found"
            element={<h1>Tela não foi achada</h1>}
          />

          {Object.values(ROUTES).map((route) => (
            <Route
              key={route.path()}
              path={route.path()}
              element={route.page()}
            />
          ))}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
