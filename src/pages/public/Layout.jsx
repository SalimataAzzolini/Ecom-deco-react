import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPublic from '@/components/public/HeaderPublic';
import FooterHome from '@/components/public/FooterHome';

const layout = () => {
    return (
        <div>
            <HeaderPublic/>
            <Outlet/> 
            <FooterHome/>

          
        </div>
    );
};

export default layout;