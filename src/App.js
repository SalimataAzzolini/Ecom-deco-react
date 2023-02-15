// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import PublicRouter from "@/pages/public/PublicRouter";
import AdminRouter from "@/pages/admin/AdminRouter";
import AuthRouter from "@/pages/auth/AuthRouter";
import AuthGuard from "@/_helpers/AuthGuard";
import UserRouter from "./pages/user/UserRouter";
import AuthAdminRouter from "./pages/auth_admin/AuthAdminRouter";
import AuthGuardAdmin from "./_helpers/AuthGuardAdmin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
              {/* On accroche un point d entree on met l'etoile derriere pour dire qu il y a des enfants /*/}
          <Route path="/*" element={<PublicRouter />}/>
              {/* On va bloquer la route admin avec authguard et a metre apres elements */}
          {/* <Route path="/admin/*" 
                 element={ 
                       <AuthGuardAdmin> 
                            <AdminRouter /> 
                       </AuthGuardAdmin> 
                }
          /> */}

          <Route path="/user/*" 
                 element={ 
                       <AuthGuard> 
                            <UserRouter/>
                       </AuthGuard> 
                }
          />
          <Route path="/auth/*" element={<AuthRouter/>} />
          <Route path="/auth/admin/*" element={<AuthAdminRouter/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
