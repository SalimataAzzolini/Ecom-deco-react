import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userService } from "@/_services";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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

    const delUser = (userId) => {
        userService.deleteUser(userId)
            .then(res => {
                console.log(res);
                setUsers(users.filter(user => user.id !== userId))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container-user-list">
                    <h1 className="title-product-list" style={{marginBottom : "20px", textAlign : "center", fontFamily :  "Great Vibes"}}>Liste des clients</h1>
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
                        <TableCell align="center">Actions</TableCell>
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
                            <TableCell align="center">
                                <DeleteIcon onClick={() => delUser(user.id)} style={{cursor : "pointer", color : '#FA8072'}}/>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default UserList;
