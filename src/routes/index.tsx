import React from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTER_STRING } from '../constants';
import { Dashboard, ForgetPassword, Login, Logout, Register, UserProfile } from '../pages';

const authProtectedRoutes = [
    { path: ROUTER_STRING.DASHBOARD_PAGE, component: <Dashboard /> },

    { path: ROUTER_STRING.PROFILE_PAGE, component: <UserProfile /> },
    {
        path: '/',
        exact: true,
        component: <Navigate to="/dashboard" />
    }
];

const publicRoutes = [
    { path: ROUTER_STRING.LOGOUT_PAGE, component: <Logout /> },
    { path: ROUTER_STRING.LOGIN_PAGE, component: <Login /> },
    { path: ROUTER_STRING.FORGOT_PASSWORD_PAGE, component: <ForgetPassword /> },
    { path: ROUTER_STRING.REGISTER_PAGE, component: <Register /> }
];

export { authProtectedRoutes, publicRoutes };
