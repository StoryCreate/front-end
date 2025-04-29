import React, { ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useAppSelector } from './hooks';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { token, user } = useAppSelector((state) => state.auth);
  const cookieToken = Cookies.get('token');
  const location = useLocation();

  // If neither redux state nor cookie has a token/user, redirect to login
  if ((!token && !user) && !cookieToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth; 