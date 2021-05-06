import React from 'react';
import { Route } from 'react-router-dom';
import { UseAuth0 } from './auth0-context';

export default function PrivateRoute({children, ...rest}) {
    const { isAuthenticated, user, login } = UseAuth0();

    if(!isAuthenticated && !user) {
        return login();
    }
    
    return (<Route {...rest}>{children}</Route>)
}