import React from 'react';
import { Link } from 'react-router-dom';

import './style/side-menu.scss';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
             <ul>
                <li><Link to="/">Accueil</Link></li>
                <li>&nbsp;</li>

                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/dashboard/user/index">Liste user</Link></li>
                        <li><Link to="/admin/dashboard/user/add">Ajouter user</Link></li>
                        
                    </ul>
                </li>
                <li>
                    Produit
                    <ul>
                        <li><Link to="/admin/dashboard/product/index">Liste produit</Link></li>
                        <li><Link to="/admin/dashboard/product/edit">Ajouter ou editer un produit</Link></li>
                    </ul>
                </li>
           </ul>
        </div>
    );
};

export default SideMenu;