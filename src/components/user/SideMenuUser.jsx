import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaShoppingBag, FaBars, FaTextWidth, FaUserEdit, FaSignOutAlt,  FaThList } from 'react-icons/fa';
// import {FaTh, FaRegChartBar, FaCommentAlt, FaThList,FaShoppingCart }from "react-icons/fa";
import {BsSuitHeartFill} from 'react-icons/bs';
import "./style/side-menu-user.scss";
import LogoUser from '@/assets/img/logo.png';
import { accountService } from '@/_services/account.service';


const SideMenuUser = () => {

  let navigate = useNavigate();

    // Gestion du bouton de déconnexion
    const logout = () => {
      accountService.logout()
      navigate('/')
  }

  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);

  const menuItem=[
      {
          path:"/user/profile",
          name:"Profile",
          icon:<FaUserAlt/>
      },
  
      {
          path:"/user/profile/edit",
          name:"Edit Profile",
          icon:<FaUserEdit/>
      },
      {
          path:"/user/profile/orders",
          name:"Orders User",
          icon:<FaShoppingBag/>
         
      },
      {
          path:"/user/profile/favoris",
          name:"Favoris",
          icon:<BsSuitHeartFill/>

      },
      {
          path:"/Blog",
          name:"Blog",
          icon:<FaThList/>
      }
  ]

    return (
        <div className="container-sidemenu-admin">
        <div style={{width: isOpen ? "310px" : "50px"}} className="sidebar-user">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}}>
                    <Link to="/" className="link-logo-admin">
                    <img src={LogoUser} alt="logo" className='logo-side-menu-user'/>
                    </Link>
                </h1>
                <div style={{marginLeft: isOpen ? "50%" : "0px"}} className="bars-admin">
                    
                    <FaBars onClick={toggle}
                    style={{marginTop : isOpen ? "-10px" : "10px",
                    fontSize:  "25px",
                    marginLeft: isOpen ? "10px" : "0px",
                    marginTop : "15px"
                    }}
                    className='icon-bars-admin'
                    />

                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link-sidebar-user" activeclassname="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            <Link to={'/'} onClick={logout} className="link-sidebar-user-logout">
               <FaSignOutAlt className="icon"/>
               <span style={{display: isOpen ? "block" : "none"}} > Se déconnecter</span>
                </Link>
        </div>
        
     </div>
    );
};

export default SideMenuUser;