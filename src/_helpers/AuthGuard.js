import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '@/_services/account.service';



/* Pareil que (props) const {children} = props */

/* Dans les children on va retouver adminrouter qui est maintenant un enfant de AuthGuard def dans app*/ /* Parfois authprovider ou routeprovider */
const AuthGuard = ({children}) => {

    /*  si on est pas logge on donne l'instruction au router de naviguer vers login si pas connecter sinon on renvoie les routes enfants de admin*/
if(!accountService.isLogged()){
        return <Navigate to="/auth/login" />
    }
    return children;
};

export default AuthGuard;