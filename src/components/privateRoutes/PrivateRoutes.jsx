import React from "react";
import { Navigate, Outlet, Route } from 'react-router-dom'

const PrivateRoute = ({children, ...propierties}) => {
  const user = localStorage.getItem('userProfile')
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute