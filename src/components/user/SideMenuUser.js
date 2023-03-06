import React from 'react';
import { useState } from 'react';
import { FaUserAlt, FaShoppingBag, FaBars, FaTextWidth  } from 'react-icons/fa';
import {BsSuitHeartFill} from 'react-icons/bs';
import "./side-menu-user.scss";

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
        <ul>
          <li>
            <a href="https//" className='link-side-bar'>
                <FaUserAlt/> Mon compte
            </a>
          </li>
          <li><a href="https//" className='link-side-bar'>
          <FaShoppingBag/> Mes commandes </a></li>
          <li><a href="https//" className='link-side-bar'>
           <BsSuitHeartFill/> Mes favoris</a></li>
           <li><a href="https//" className='link-side-bar'>
           <FaTextWidth/> Mes posts</a></li>
          <button className="btn-close-side-bar" onClick={toggleSidebar}> x </button>
        </ul>
      </div>
    </div>
    );
};

export default SideMenuUser;