import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from 'main/routers';
import { GlobalStyles } from 'presentation/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>
);
