import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '@/_services/account.service';

const AuthGuardAdmin = ({children}) => {
    
    if(!accountService.isLogged() || !accountService.isAdmin()){
        return <Navigate to="/auth/admin/login" />
    }
    return children;
};

export default AuthGuardAdmin;