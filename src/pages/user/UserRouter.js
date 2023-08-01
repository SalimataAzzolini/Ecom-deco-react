import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserLayout, UserProfile, UserProfileEdit,UserOrders, UserFavoris, StripeContainer, ConfirmationOrder  } from '@/pages/user';
import Error from '@/_utils/Error';




const UserRouter = () => {
    return (
        <div> 
            <Routes>
                <Route element={<UserLayout/>}>
                    <Route index element={<UserProfile/>} />
                    <Route path="profile" element={<UserProfile/>}/>
                    <Route path="profile/edit" element={<UserProfileEdit/>}/>
                    <Route path="profile/orders" element={<UserOrders/>}/>
                    <Route path="profile/favoris" element={<UserFavoris/>}/>
                    <Route path="*" element={<Error/>}/>   
                </Route>
                <Route path="/checkout" element={<StripeContainer/>}/>
                <Route path="/confirmation-order" element={<ConfirmationOrder/>}/>
            </Routes>

          
                  

        </div>
    );
};

export default UserRouter;