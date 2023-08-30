import React from 'react';
import { Outlet } from 'react-router-dom';
import  HeaderUser from '@/components/user/HeaderUser';
import FooterHome from '@/components/public/FooterHome';
import SideMenuUser from '@/components/user/SideMenuUser';
import './user-layout.scss'

const UserLayout = () => {
    return (
        <div>
            <div id='user-layout'>
                <div id='user-side-menu'> <SideMenuUser/> </div>
                <div id='user-body'>
                    <HeaderUser/>
                    <Outlet/> 
                </div>
            </div>
         <FooterHome/>
        </div>
    );
};

export default UserLayout;