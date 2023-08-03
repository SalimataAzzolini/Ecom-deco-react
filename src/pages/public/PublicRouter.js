import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Home, SingleProduct,
         Contact, Salon, BedRoom, BathRoom,
         Category, CartBasket, Register, Concept, ConfirmEmail, LegalMentions, Blog } from "@/pages/public";

import Error from "@/_utils/Error";


const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category/>}  />
        <Route path="/product/:cid" element={<SingleProduct />} />
        <Route path="/category/salon" element={<Salon />} />
        <Route path="/category/bedroom" element={<BedRoom />} />
        <Route path="/category/bathroom" element={<BathRoom />} />
        <Route path="/basket" element={<CartBasket />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bienvenue" element={<ConfirmEmail />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
