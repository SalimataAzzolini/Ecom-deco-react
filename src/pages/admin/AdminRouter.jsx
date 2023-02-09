import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ALayout, Dashboard } from '@/pages/admin'
import {User, UserAdd, UserEdit} from '@/pages/admin/user';
import {Category, CategoryEdit} from '@/pages/admin/category';


import Error from '@/_utils/Error'

const AdminRouter = () => {
    return (

        <Routes>
            <Route element={<ALayout/>}>
             {/*    Quand on tape juste admin route index qui s'affiche */}
                <Route index element={<Dashboard/>} /> 
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    {/* /uid pour id user route uniauememt dispo au clic edit user*/}
                    <Route path="edit/:uid" element={<UserEdit/>}/> 
                    <Route path="add" element={<UserAdd/>}/>
                </Route>
           
                <Route path="category">
                    <Route path="index" element={<Category/>}/>
                    <Route path="edit" element={<CategoryEdit/>}/>

                </Route>

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;