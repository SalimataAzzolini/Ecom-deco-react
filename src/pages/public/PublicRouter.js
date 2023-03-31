import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Home, SingleProduct, Contact, Salon } from "@/pages/public";

import Error from "@/_utils/Error";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/product/:cid" element={<SingleProduct />} />
        <Route path="/category/salon" element={<Salon />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
