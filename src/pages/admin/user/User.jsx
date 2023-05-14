import React, { useEffect, useState, useRef } from "react";
/* import { useQuery } from "react-query"; */
import { useNavigate, Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userService } from "@/_services";
// import "../../admin/admin.css"


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const User = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const flag = useRef(false);


  
  // Récupération de la liste des utilisateurs à l'affichage
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

    <div >
      TEST DATA GRID
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    // <div>
    //   Liste users
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Nom</th>
    //         <th>Pronom</th>
    //         <th>Email</th>
    //         <th>Phone</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user) => (
    //         <tr key={user.id}>
            
    //           <td> <span 
    //                  style={{color:'red'}} 
    //                  className="del-btn" 
    //                  onClick={() => delUser(user.id)}>
    //                  x</span> </td>
    //            <td><Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link></td>
    //           <td>{user.name.firstname}</td>
    //           <td>{user.name.lastname}</td>
    //           <td>{user.email}</td>
    //           <td>{user.phone}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default User;
