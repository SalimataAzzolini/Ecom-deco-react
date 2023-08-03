import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

import HeaderPublic from '@/components/public/HeaderPublic';
import FooterHome from '@/components/public/FooterHome';
import CoverCardThinkOrder from '@/assets/img/cover-card-think-order.png';
import '../style/confirmation-order.scss';


const ConfirmationOrder = () => {


    let navigate = useNavigate();


    return (
        <div>
            <HeaderPublic/>
                <div className='container-confirmation-order'>
                <Card sx={{ width : 700, margin : 'auto', marginTop : 10, paddingBottom : "2rem"}}>
                <CardMedia
                    sx={{ height: 230 }}
                    image={CoverCardThinkOrder}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Merci  ! 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   Votre commande sera traité sous peu et vous recevrez un email de confirmation.
                   En attendant, vous pouvez consulter vos commandes dans votre espace personnel.
                   Pour rappel notre magasin est ouvert du lundi au samedi de 10h à 19h à l'adresse :
                  <AddBusinessIcon/> 1 Rue Paul Vergan 06300 Nice
                
                    </Typography>
                </CardContent>
                <div style={{display : 'flex', justifyContent : 'space-between'}}>
                <CardActions>
                    <Button size="small"
                    onClick={() => navigate('/user/profile')}
                    >Retour au profil</Button>
                </CardActions>
                <CardActions>
                    <Button size="small"
                    onClick={() => navigate('/')}
                    >Retour à l'accueil</Button>
                </CardActions>
                </div>
                </Card>
                </div>
            <FooterHome/>
        </div>
    );
};

export default ConfirmationOrder;