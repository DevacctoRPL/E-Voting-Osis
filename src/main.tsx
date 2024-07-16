import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './pages/login';
import Landpage from './pages/landpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/landpage",
    element: <Landpage />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);