import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_STRING } from '../constants';

const Authmiddleware = (props) => {
    // if (!localStorage.getItem('authUser')) {
    // return <Navigate to={{ pathname: ROUTER_STRING.LOGIN_PAGE, state: { from: props.location } }} />;
    // }
    return <React.Fragment>{props.children}</React.Fragment>;
};

export default Authmiddleware;
