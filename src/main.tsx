import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { createBrowserRouter, createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './index.css';

import Login from './pages/login';
import Landpage from './pages/landpage';
import ListKandidatMPK from './pages/listKandidatMPK';
import Information from './pages/information';
import ListKandidatOsis from './pages/listKandidatOsis';
import Admin from './pages/adminDashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './context/userContext';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/landpage",
    element: <Landpage />,
  },
  {
    path: "/list-Kandidat/MPK",
    element: <ListKandidatMPK />
  },
  {
    path: "/list-Kandidat/OSIS",
    element: <ListKandidatOsis />
  },
  {
    path: "/information",
    element: <Information />
  },
  {
    path: "/Admin",
    element: <Admin />
  }
]
const router = createBrowserRouter(routes)
const query = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

