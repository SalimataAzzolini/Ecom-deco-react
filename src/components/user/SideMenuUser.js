import React from 'react';
import { useState, useEffect } from 'react';
import { FaUserAlt, FaShoppingBag, FaBars  } from 'react-icons/fa';
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
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
          <button className="sidebar-toggle" onClick={toggleSidebar}> x </button>
        </ul>
      </div>
    </div>
    );
};

export default SideMenuUser;