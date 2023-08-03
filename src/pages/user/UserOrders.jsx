
import './style/user-orders.scss';
import MiroirBain from '@/assets/img/miroir-bain.webp';

const UserOrders = () => {
    return (
        <div>
            <h4 className='title-user-order'>Mes commandes !</h4>
            <div className="container-user-orders-list"> 
                <ol className="list">
                    <li className="list-user-order">
                        <h3>Commande REF12344</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        <img src={MiroirBain} alt="miroir de salle de bain" className="img-user-order" />
                    </li>
                    <li className="list-user-order">
                    <h3>Commande REF12343</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </li>
                    <li className="list-user-order">
                    <h3>Commande REF12344</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </li>
            
                </ol>
            </div>
        </div>
    );
};

export default UserOrders;