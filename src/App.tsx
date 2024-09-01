// src/App.tsx
import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { UserProvider } from './context/userContext';
import Login from './pages/login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import KomponenPripat from './utils/komponenpripat';
import Landpage from './pages/landpage';

const App: React.FC = () => {
  const query = new QueryClient()
  return (
    <QueryClientProvider client={query}>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" Component={Login} />
            <KomponenPripat path="/landpage" component={Landpage} />
          </Routes>
        </UserProvider>
      </Router>
    </QueryClientProvider>
  );
};


export default App;
