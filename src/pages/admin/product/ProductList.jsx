import React, { useEffect, useState, useRef } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate, Link } from "react-router-dom";
import {productService} from "@/_services";

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

    //Contenu d'un produit
    // {
	// 	"id": 10,
	// 	"name": "Miroir Tyssaya",
	// 	"price": 29.99,
	// 	"description": " Lot de 2 miroirs de salle de bain ",
	// 	"stock": 60,
	// 	"category": "bain",
	// 	"images": [
	// 		{
	// 			"id": 4,
	// 			"name": "img-miroir1",
	// 			"link": "https:\/\/ecom-deco.s3.eu-west-3.amazonaws.com\/images-website\/miroir1-2-bain.webp",
	// 			"product": "\/api\/products\/10"
	// 		},
	// 		{
	// 			"id": 5,
	// 			"name": "miroir tyssaya 2",
	// 			"link": "https:\/\/ecom-deco.s3.eu-west-3.amazonaws.com\/images-website\/miroir-bain.webp",
	// 			"product": "\/api\/products\/10"
	// 		}
	// 	]
	// },

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
            {/* //Faire un tableau des produits avec les infos et ajouter une icone mui pour supprimer et une icone  modifier qui redirige vers la page d'edition /admin/product/edit/:id
             */}
            <TableContainer component={Paper}>
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