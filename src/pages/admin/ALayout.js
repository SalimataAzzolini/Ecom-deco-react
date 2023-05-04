import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/admin/Header';
import SideMenuAdmin from '@/components/admin/SideMenuAdmin';
import './admin.css';
// import {User, UserEdit,  UserAdd} from '@/pages/admin/user';

const ALayout = () => {
    return (
        <div className='ALayout'>
            <div id='admin'>
                <div id='side-menu'> <SideMenuAdmin/> </div>
                <div> 
                <Header/>
                <div id='admin_body'> <Outlet/> </div>
                </div>
            </div>

        </div>
    );
};

export default ALayout;