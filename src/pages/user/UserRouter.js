import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserLayout, UserProfile, UserProfileEdit } from '@/pages/user';


import Error from '@/_utils/Error'


const UserRouter = () => {
    return (
        <div> 
            <Routes>
                <Route element={<UserLayout/>}>
                    <Route index element={<UserProfile/>} />
                    <Route path="profile" element={<UserProfile/>}/>
                    <Route path="profile/edit" element={<UserProfileEdit/>}/>

                    <Route path="*" element={<Error/>}/>   
                </Route>

            </Routes>

          
                  

        </div>
    );
};

export default UserRouter;