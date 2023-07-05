import { BrowserRouter, Routes, Route} from "react-router-dom";
import PublicRouter from "@/pages/public/PublicRouter";
import AdminRouter from "@/pages/admin/AdminRouter";
import AuthRouter from "@/pages/auth/AuthRouter";
import AuthGuard from "@/_helpers/AuthGuard";
import UserRouter from "./pages/user/UserRouter";
import AuthAdminRouter from "./pages/auth_admin/AuthAdminRouter";
import AuthGuardAdmin from "./_helpers/AuthGuardAdmin";
import UserDatasProvider from "./_contexts/userDatasContext";



function App() {
  return (
    <UserDatasProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/*" element={<PublicRouter />}/>

          <Route path="/admin/*" 
                 element={ 
                       <AuthGuardAdmin> 
                            <AdminRouter /> 
                       </AuthGuardAdmin> 
                }
          />

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
    </UserDatasProvider>
  );
}

export default App;
