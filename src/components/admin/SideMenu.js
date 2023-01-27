import React from 'react';
import { Link } from 'react-router-dom';

import './side-menu.css';

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
                        <li><Link to="/admin/user/index">Liste user</Link></li>
                        <li><Link to="/admin/user/add">Ajouter un user</Link></li>
                        
                    </ul>
                </li>
                <li>
                    Cocktail
                    <ul>
                        <li><Link to="/admin/cocktail/index">Liste cocktail</Link></li>
                        <li><Link to="/admin/cocktail/edit">Ajouter ou editer cocktail</Link></li>
                    </ul>
                </li>
           </ul>
        </div>
    );
};

export default SideMenu;