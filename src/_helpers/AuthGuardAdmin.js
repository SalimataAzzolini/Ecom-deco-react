import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '@/_services/account.service';

const AuthGuardAdmin = ({children}) => {
     /*  si on est pas logge on donne l'instruction au router de naviguer vers login si pas connecter sinon on renvoie les routes enfants de admin*/
if(!accountService.isLogged()){
    return <Navigate to="/auth/admin/login" />
}
return children;
};

export default AuthGuardAdmin;