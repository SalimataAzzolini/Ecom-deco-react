import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/admin/Header';
import SideMenuAdmin from '@/components/admin/SideMenuAdmin';
import './admin.scss';
// import {User, UserEdit,  UserAdd} from '@/pages/admin/user';

const ALayout = () => {
    return (
        <div className='admin-layout'>
                <div id='side-menu'> 
                    <SideMenuAdmin/>
                </div>
                <div className='admin-header-body'> 
                    <Header/>
                    <div className='admin-body'> <Outlet/> </div>
                </div>

        </div>
    );
};

export default ALayout;