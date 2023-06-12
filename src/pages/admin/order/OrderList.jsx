import React, { useEffect, useState, useRef } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {orderService} from "@/_services";
import './style/order-list.scss';

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    const flag = useRef(false);

    function formaterDate(date) {
        const dateObj = new Date(date);
        const jour = String(dateObj.getDate()).padStart(2, '0');
        const mois = String(dateObj.getMonth() + 1).padStart(2, '0'); // Les mois sont indexés à partir de zéro
        const annee = dateObj.getFullYear();
      
        return `${jour}/${mois}/${annee}`;
    }

    const token = localStorage.getItem('token');

    useEffect(() => {
        if(flag.current === false){

            const config = {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            };
            orderService.getAllOrders(config)
                .then(res => {
                    console.log(res.data);
                    setOrders(res.data)
                })
                .catch(err => console.log(err))
        }
        
        return () => flag.current = true

    }, [])

    // const onStatusChange = (e, orderId) => {
    //     const status = e.target.value;
    //     setOrders(orders.map(order => order.id === orderId ? 
    //         {...order, status: status} : order))
    // }

    // const onSubmitStatus = () => {
    // orders.map((order) => (
    //     orderService.updateOrderStatus(order.id, order.status)
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(err => console.log(err))
    // ))
    // }

    const onUpdateOrderStatus = (orderId, status) => {
        orderService.updateOrderStatus(orderId, status)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };
    
    const onStatusChange = (e, orderId) => {
        const status = e.target.value;
        setOrders(orders.map(order => order.id === orderId ? 
            {...order, status: status} : order));
        onUpdateOrderStatus(orderId, status);
    };

  
    const deleteOrder = (orderId) => {
        orderService.deleteOrder(orderId)
            .then(res => {
                console.log(res);
                setOrders(orders.filter(order => order.id !== orderId))
            })
            .catch(err => console.log(err))
    }



    return (
        <div className='container-order-list'>
            <h1 className="title-product-list" style={{marginBottom : "20px", textAlign : "center", fontFamily :  "Great Vibes"}}>Liste des commandes</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">User</TableCell>
                            <TableCell align="center">Reference</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Products</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{order.id}</TableCell>
                                <TableCell align="center">{formaterDate(order.created_at)}</TableCell>
                                <TableCell align="center">{order.user}</TableCell>
                                <TableCell align="center">{order.reference}</TableCell>
                                <TableCell align="center">{order.quantity}</TableCell>
                                <TableCell align="center">{order.price}</TableCell>
                                <TableCell align="center">{order.products.map((product) => (
                                        <div key={product.id}>
                                            <p>{product.name}</p>
                                        </div>
                                   ))}
                                </TableCell>
                                <TableCell align="center"> 
                                    <select name="status" id="status"
                                        value={order.status} 
                                        onChange={(e) => onStatusChange(e, order.id)}
                                    >
                                        <option value="pending">En attente</option>
                                        <option value="retired">Retiré</option>
                                    </select>
                                </TableCell>
                                <TableCell align="center">
                                    <div className="action-icons">
                                        {/* <CheckCircleIcon
                                            onClick={onSubmitStatus}
                                            style={{color : '#808000', cursor: 'pointer'}} 
                                        /> */}

                                        <DeleteIcon onClick={() => deleteOrder(order.id)} style={{color : '	#FA8072', cursor: 'pointer'}} />
                                        
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrderList;