import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import './style/contact.scss';
import FlowerContact from '@/assets/img/flower-contact.png';



const Contact = () => {
    return (
        <>
        <div className='container-contact'>
            <div className="container-contact-form">
                <h2 className='title-contact-form'>Contact</h2>
                <form action="" className="form-group">
                    <div className="label-input-contact">
                        <div className='label-input-name-contact'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' placeholder='Votre nom' className='input-contact' />
                        </div>

                        <div className="label-input-email-contact"> 
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' placeholder='Votre email'className='input-contact' />
                        </div>
                    </div>
                        
                        <div className='label-input-textarea-contact'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Dites-nous tout !' className='textarea-contact'></textarea>
                        </div>

                        <button type='submit' className='btn-contact-form'>Envoyer</button>

                </form>
            </div>
            <img src={FlowerContact} alt="" className='img-flower-contact'/>
        </div>
        <div className="container-contact-infos">
           <h2 className='title-contact-infos'>Infos : </h2>
           <div className="block-infos-contact">
               <p> <LocationOnIcon/> Adresse : 1 Rue Paul Vergan 06300 Nice</p>
               <p> <PhoneIcon/> Téléphone : 04 00 00 00 00</p>
               <p> <EmailIcon/> Email : home@decor.fr </p>
               <p> <AddBusinessIcon/> Horaire d'ouverture : <br/>
                    Lundi - Samedi  : 10h - 19h <br/>
                </p>
           </div>
        </div>
         </>    
    );
};

export default Contact;