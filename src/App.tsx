// src/App.tsx
import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Landpage from './pages/landpage';
import Information from './pages/information';
import ListKandidat from './pages/listKandidat';
import Admin from './pages/adminDashboard';
import Thanks from './pages/thanks';
import { RootLayout } from './components/evlayout';

const App: React.FC = () => {
  const query = new QueryClient()
  return (
    <QueryClientProvider client={query}>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
          <Route path="/" Component={Login} />
          <Route path="/thanks" Component={Thanks} />
          <Route path="/landpage" element={<Landpage />} />
          <Route path="/listkandidat/:org" Component={ListKandidat} />
          <Route path="/information/:id" Component={Information} />
          <Route path="/votes" Component={Admin} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};


export default App;
