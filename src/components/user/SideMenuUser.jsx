import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaShoppingBag, FaBars, FaTextWidth, FaUserEdit  } from 'react-icons/fa';
import {BsSuitHeartFill} from 'react-icons/bs';
import "./style/side-menu-user.scss";
import Logo from '@/assets/img/logo.png';

const SideMenuUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

    return (
    <div className="sidebar-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars/> Menu
      </button>
      <div className={`sidebar-menu ${isOpen ? "open" : ""}` }>
        <Link to={"/"} className="link-side-bar-logo">
        <img src={Logo} alt="logo" className="logo-side-menu-user"/>
        </Link>
        <ul>
          <li>
            <Link to={"/user/profile"} className='link-side-bar'>
                <FaUserAlt/> Mon compte
            </Link>
          </li>
          <li>
            <Link to={"/user/profile/edit"} className='link-side-bar'>
                <FaUserEdit/> Mes informations
            </Link>
          </li>
          <li>
            <Link to={"/user/profile/orders"} className='link-side-bar'>
              <FaShoppingBag/> Mes commandes 
            </Link>
          </li>
          <li>
            <Link to={"/user/profile/favoris"}  className='link-side-bar'>
              <BsSuitHeartFill/> Mes favoris
              </Link>
            </li>
           <li>
              <Link className='link-side-bar'>
              <FaTextWidth/> Mes posts</Link>
           </li>
          <button className="btn-close-side-bar" onClick={toggleSidebar}> x </button>
        </ul>
      </div>
    </div>
    );
};

export default SideMenuUser;