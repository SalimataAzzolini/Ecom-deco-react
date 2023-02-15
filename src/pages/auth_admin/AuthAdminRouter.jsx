import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginAdmin from "./LoginAdmin";
import Error from "@/_utils/Error";

const AuthAdminRouter = () => {
    return (
        <Routes>
            <Route index element={<LoginAdmin />} />
            <Route path="login" element={<LoginAdmin />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AuthAdminRouter;