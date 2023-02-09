import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserLayout, UserProfile } from '@/pages/user';
import {UserAccountEdit } from '@/pages/user/account';

import Error from '@/_utils/Error'


const UserRouter = () => {
    return (
        <div> 
            <Routes>
                <Route element={<UserLayout/>}>
                    <Route index element={<UserProfile/>} />
                    <Route path="profile" element={<UserProfile/>}/>
                    <Route path="account" element={<UserAccountEdit/>}/>
                </Route>

            </Routes>

          
                  

        </div>
    );
};

export default UserRouter;