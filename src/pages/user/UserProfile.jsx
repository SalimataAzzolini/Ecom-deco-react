import React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImgPostUser from '@/assets/img/img-post-user.jpg';
import ImgShoppingUser from '@/assets/img/img-shopping-user.png';
import ImgProfilUser from '@/assets/img/img-profil-user.png';
import ImgFavorisUser from '@/assets/img/img-favoris-user.png';
import './style/user-profil.scss';


const UserProfile = () => {

    let userDatas = "";
    if (localStorage.getItem("userDatas")) {
        userDatas = JSON.parse(localStorage.getItem("userDatas"));
    }


    let userName = "";
    if (userDatas !== "") {
        userName = userDatas.firstname;
    }

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