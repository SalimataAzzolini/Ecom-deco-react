import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderUser, SideMenuUser } from '@/components/user';

const UserLayout = () => {
    return (
        <div className='user-layout'>
            <HeaderUser />

            <div id='user-layout'>
                <div id='user-side-menu'> <SideMenuUser/> </div>
                <div id='user-body'> <Outlet/> </div>
            </div>
         
        </div>
    );
};

export default UserLayout;