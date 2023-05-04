import React from 'react';
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PeopleIcon from '@mui/icons-material/People';
import { DataGrid } from '@mui/x-data-grid';
import './style/dashboard.scss';

// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

const Dashboard = () => {
    return (
        <div className="container-dashboard">
        
          <h2> <AdminPanelSettingsIcon
                style={{
                    fontSize: "40px",
                    color: "white",
                    backgroundColor: "#A26A48",
                    borderRadius: "15%",
                    padding: "3px",
                    marginRight: "10px",
                }}
                /> 
                Dashboard
        </h2>

        <div className="container-cards-admin">
            <div className="card-admin card-admin1">
                <LocalOfferIcon className='icon-card-admin'/>
                <h3 className='subtitle-card-admin'> produits</h3>
                <h1 className='title-card-admin'>1300</h1>
        
            </div>
            <div className="card-admin card-admin2">
            <PeopleIcon className='icon-card-admin'/>
                <h3 className='subtitle-card-admin'> clients</h3>
                <h1 className='title-card-admin'>709</h1>
            </div>
            <div className="card-admin card-admin3">
                <ShoppingCartCheckoutIcon  className='icon-card-admin'/>
                <h3 style={{ marginTop: '-40px', }}> Commandes</h3>
                <h1 className='title-card-admin'>506</h1>
            </div>
        </div>
     </div>
    );
};

export default Dashboard;