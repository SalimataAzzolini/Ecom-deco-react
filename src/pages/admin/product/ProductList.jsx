import React, { useEffect, useState, useRef } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate, Link } from "react-router-dom";
import {productService} from "@/_services";
import "./style/product-list.scss";

const ProductList = () => {

    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if(flag.current === false){
            productService.getAllProducts()
                .then(res => {
                    console.log(res.data);
                    setProducts(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true

    }, [])

 
    const deleteProduct = (productId) => {
        productService.deleteProduct(productId)
            .then(res => {
                console.log(res);
                setProducts(products.filter(product => product.id !== productId))
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container-product-list">
            <h1 className="title-product-list" style={{marginBottom : "20px", textAlign : "center", fontFamily :  "Great Vibes"}}>Liste des produits</h1>
            <Button variant="outlined" style={{color : '#A26A48', borderColor : '#A26A48', marginBottom : '1rem'}}
            onClick={() => navigate("/admin/product/add")}
            >Ajouter des produits</Button>

            <TableContainer component={Paper} className="table-product-admin">
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Stock</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Images</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell align="center">{product.name}</TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center">{product.description}</TableCell>
                                <TableCell align="center">{product.stock}</TableCell>
                                <TableCell align="center">{product.category}</TableCell>
                                <TableCell align="center">{product.images.length}</TableCell>
                                <TableCell align="center">
                                    <Link to={`/admin/product/edit/${product.id}`}>
                                        <ModeEditIcon style={{color : '#808000'}}/>
                                    </Link>
                                    <DeleteIcon onClick={() => deleteProduct(product.id)} style={{color : '	#FA8072', cursor: 'pointer'}}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


                
                    
            
            
        </div>
    );
};

export default ProductList;