import React from 'react';
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImgPostUser from '@/assets/img/img-post-user.jpg';
import ImgShoppingUser from '@/assets/img/img-shopping-user.png';
import ImgProfilUser from '@/assets/img/img-profil-user.png';
import ImgFavorisUser from '@/assets/img/img-favoris-user.png';
import { UserDatasContext } from "@/_contexts/userDatasContext";
import './style/user-profil.scss';


const UserProfile = () => {

    const userDatas = localStorage.getItem('userDatas');
    const userDatasParsed = JSON.parse(userDatas);//permet de convertir la chaine de caractère en objet
    const userName = userDatasParsed.firstname;
    return (
        <div>

            <h2 className='title-hello-user'> Bonjour {userName} </h2>

            <div className="container-card-user"> 
            
            <Card className="card-user-profil">
                <CardMedia
                   className='img-card-user-profil'
                    image={ImgProfilUser}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     <Link to={"/user/profile/edit"} className="link-card-user"> Mes informations </Link> 
                    </Typography>
                </CardContent>
            </Card>
            <Card className="card-user-profil">
                <CardMedia
                          className='img-card-user-profil'
                    image={ImgShoppingUser}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     <Link to={"/user/profile/orders"} className="link-card-user"> Mes commandes</Link> 
                    </Typography>
                </CardContent>
            </Card>
            <Card className="card-user-profil">
                <CardMedia
                    className='img-card-user-profil'
                    image={ImgPostUser}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     <Link to={""} className="link-card-user"> Mes posts</Link> 
                    </Typography>
                </CardContent>
            </Card>
            

            <Card className="card-user-profil">
                <CardMedia
                    className='img-card-user-profil'
                    image={ImgFavorisUser}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     <Link to={"/user/profile/favoris"}   className="link-card-user"> Mon favoris</Link> 
                    </Typography>
                </CardContent>
            </Card>

            </div>
            
        </div>
    );
};

export default UserProfile;