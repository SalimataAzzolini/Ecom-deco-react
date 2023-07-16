import React from 'react';
import {useNavigate} from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ConfirmEmail = () => {

    let navigate = useNavigate();


    return (
        <div>
            <Card sx={{ width : 600, margin : 'auto', marginTop : 10}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Merci de votre inscription
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Bienvenue sur Home Décor, un email de confirmation vous a été envoyé.
                    Cliquez sur le lien pour activer votre compte.
                    Nous vous souhaitons une bonne visite.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                    onClick={() => navigate('/')}
                    >Retour à l'accueil</Button>
                </CardActions>
                <CardActions>
                    <Button size="small"
                    onClick={() => navigate('/auth/login')}
                    >Se connecter</Button>
                </CardActions>
                </Card>
        </div>
    );
};

export default ConfirmEmail;