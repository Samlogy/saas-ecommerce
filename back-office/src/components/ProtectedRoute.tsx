// import React, { FunctionComponent } from "react";
import { Navigate, Outlet } from 'react-router-dom'

import { loadState } from '../utils/localStorage'

const ProtectedRoutes = () => {
  const auth = loadState('auth-admin')

  // autho --> for redireection

  return auth ? <Outlet /> : <Navigate to={'/login'} replace />
}
export default ProtectedRoutes
