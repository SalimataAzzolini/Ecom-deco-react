import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userService } from "@/_services";
import "../../admin/admin.css"
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import "../style/user-list.scss"

const UserList = () => {

    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const flag = useRef(false);
  
    useEffect(() => {
        if(flag.current === false){
            userService.getAllUsers()
                .then(res => {
                    console.log(res.data);
                    setUsers(res.data)
                })
                .catch(err => console.log(err))
        }
  
        return () => flag.current = true 
      
    }, [])

    return (
        <div className="container-user-list">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 900 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Lastname</TableCell>
                        <TableCell align="center">Firstname</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Zipcode</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.id}
                            </TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.lastname}</TableCell>
                            <TableCell align="center">{user.firstname}</TableCell>
                            <TableCell align="center">{user.address}</TableCell>
                            <TableCell align="center">{user.city}</TableCell>
                            <TableCell align="center">{user.zipcode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default UserList;
