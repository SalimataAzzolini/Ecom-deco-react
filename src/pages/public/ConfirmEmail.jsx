import {useNavigate} from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import CoverWelcome from '@/assets/img/cover-welcome.png';
import './style/confirm-email.scss';

const ConfirmEmail = () => {

    let navigate = useNavigate();


    return (
        <div className='confirm-email'>
          <Card sx={{ width : 700, margin : 'auto', marginTop : 10, paddingBottom : "2rem"}}>
                <CardMedia
                    sx={{ height: 230 }}
                    image={CoverWelcome}
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
                <div style={{display : 'flex', justifyContent : 'space-between'}}>
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
                </div>
                </Card>
        </div>
    );
};

export default ConfirmEmail;