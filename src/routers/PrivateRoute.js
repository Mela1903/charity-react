import React from 'react';
import {useAuth} from "../contexts/AuthContext";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to='/wylogowano' />
};

export default PrivateRoute;