import React, {useState} from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaShoppingCart,
 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoAdmin from '@/assets/img/logo.png';
import './style/side-menu.scss';

const SideMenu = () => {

    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/admin/order/list",
            name:"Commandes",
            icon:<FaShoppingCart/>
           
        },
    
        {
            path:"/admin/user/list",
            name:"Clients",
            icon:<FaRegChartBar/>
        },
       
        {
            path:"/admin/product/list",
            name:"Produits",
            icon:<FaShoppingBag/>
 
        },
        {
            path:"/Blog",
            name:"Blog",
            icon:<FaThList/>
        }
    ]


    return (
        <div className="container-sidemenu-admin">
        <div style={{width: isOpen ? "310px" : "50px"}} className="sidebar-admin">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}}>
                    <Link to="/" className="link-logo-admin">
                    <img src={LogoAdmin} alt="logo" className='logo-side-admin'/>
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
                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                        <div className="icon-side-menu-admin">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        
     </div>
    );
};

export default SideMenu;