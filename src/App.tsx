// src/App.tsx
import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { UserProvider } from './context/userContext';
import Login from './pages/login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Landpage from './pages/landpage';
import Information from './pages/information';
import ListKandidat from './pages/listKandidat';
import Admin from './pages/adminDashboard';
import { VoteProvider } from './context/votedContext';

const App: React.FC = () => {
  const query = new QueryClient()
  return (
    <QueryClientProvider client={query}>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route element={<UserProvider />}>
            <Route path="/landpage" element={<Landpage />} />
            <Route path="/listkandidat/:org" Component={ListKandidat} />
            <Route element={<VoteProvider />}>
              <Route path="/information/:id" Component={Information} />
            </Route>
            <Route path="/votes" Component={Admin} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};


export default App;
