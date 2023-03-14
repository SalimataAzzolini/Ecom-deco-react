import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/public/Header';

const layout = () => {
    return (
        <div>
            <Header/>
        {/*     Toutes les routes qui sont enfants layout dans le router s'afficheront dans outlet */}
            <Outlet/> 

          
        </div>
    );
};

export default layout;