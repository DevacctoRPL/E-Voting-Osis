// src/components/PrivateRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/userContext';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const KomponenPripat: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useAuth()
  return (
    <Route {...rest} Component={(props) => user ? <Component {...props} /> : <Navigate to="/" />} />
  );
};

export default KomponenPripat;
