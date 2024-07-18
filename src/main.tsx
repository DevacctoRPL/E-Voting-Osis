import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';

import Login from './pages/login';
import Landpage from './pages/landpage';
import ListKandidat from './pages/listKandidat';
import Information from './pages/information';
import Admin from './pages/adminDashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/landpage",
    element: <Landpage />
  },
  {
    path: "/list-kandidat",
    element: <ListKandidat />
  },
  {
    path: "/information",
    element: <Information/>
  },
  {
    path: "/Admin",
    element: <Admin />
  }
])
const query = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);