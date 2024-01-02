import React from 'react';
import { Navigate } from 'react-router-dom';

// Profile
import UserProfile from '../pages/Authentication/user-profile';

// Authentication related pages
import Login from '../pages/Authentication/Login';
import Logout from '../pages/Authentication/Logout';
import Register from '../pages/Authentication/Register';
import ForgetPwd from '../pages/Authentication/ForgetPassword';

// Dashboard
import Dashboard from '../pages/Dashboard/index';
import { ROUTER_STRING } from '../constants';

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
    { path: ROUTER_STRING.FORGOT_PASSWORD_PAGE, component: <ForgetPwd /> },
    { path: ROUTER_STRING.REGISTER_PAGE, component: <Register /> }
];

export { authProtectedRoutes, publicRoutes };
