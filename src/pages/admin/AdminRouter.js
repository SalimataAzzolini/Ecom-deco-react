import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ALayout, Dashboard } from '@/pages/admin'
import {User, UserEdit,  UserAdd, UserList} from '@/pages/admin/user';
import {Category, CategoryEdit} from '@/pages/admin/category';
import {ProductList, ProductEdit} from '@/pages/admin/product';

import Error from '@/_utils/Error'


const AdminRouter = () => {
    return (

        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>} /> 
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path="user">
                    <Route path="list" element={<UserList/>}/>
                    {/* /uid pour id user route uniauememt dispo au clic edit user*/}
                    <Route path="edit/:uid" element={<UserEdit/>}/> 
                    <Route path="add" element={<UserAdd/>}/>
                </Route>
           
                <Route path="category">
                    <Route path="index" element={<Category/>}/>
                    <Route path="edit" element={<CategoryEdit/>}/>
                </Route>

                <Route path="product">
                    <Route path="index" element={<ProductList/>}/>
                    <Route path="edit/:pid" element={<ProductEdit/>}/>
                </Route>

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;