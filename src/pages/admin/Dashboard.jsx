import { useNavigate} from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PeopleIcon from '@mui/icons-material/People';

import './style/dashboard.scss';


const Dashboard = () => {
    let navigate = useNavigate();
    return (
        <div className="container-dashboard">
        
          <h2> <AdminPanelSettingsIcon
                style={{
                    fontSize: "40px",
                    color: "white",
                    backgroundColor: "#A26A48",
                    borderRadius: "15%",
                    padding: "3px",
                    marginRight: "10px",
                }}
                /> 
                Dashboard
        </h2>

        <div className="container-cards-admin">
            <div className="card-admin card-admin1" onClick={() => navigate("/admin/product/list")}>
                <LocalOfferIcon className='icon-card-admin'/>
                <h3 className='subtitle-card-admin'> produits</h3>
                <h1 className='title-card-admin'>430</h1>
            </div>
            <div className="card-admin card-admin2" onClick={() => navigate("/admin/user/list")}>
            <PeopleIcon className='icon-card-admin'/>
                <h3 className='subtitle-card-admin'> clients</h3>
                <h1 className='title-card-admin'>709</h1>
            </div>
            <div className="card-admin card-admin3" onClick={() => navigate("/admin/order/list")}>
                <ShoppingCartCheckoutIcon  className='icon-card-admin'/>
                <h3 style={{ marginTop: '-40px', }}> Commandes</h3>
                <h1 className='title-card-admin'>1300</h1>
            </div>
        </div>
     </div>
    );
};

export default Dashboard;