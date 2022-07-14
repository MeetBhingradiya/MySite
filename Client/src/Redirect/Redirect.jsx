import React,{ useState, createContext  , useContext } from 'react';
import { Route, Routes , Navigate , Outlet } from "react-router-dom";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Cookies from 'js-cookie';
import Login from "../Components/Login/Login";
import Error from "../Components/Error/Error";
import "../Module/Universal/Universal.css";
import UI from "../Module/UI/UI";
// import Logout from "./Logout";
function Redirect() {
    const [UserLogin,SetUserLogin] = useState(false);
    return (
    <div>
        <LoginVerify.Provider value={{UserLogin,SetUserLogin}}>
            <Routes>
                {/* <Route exact path="test" element={<Test />} /> */}
                <Route exact path="/" element={<Login />} />
                <Route exact path="/Login" element={<Login />} />

                        <Route element={<Authenticator Auth={UserLogin}/>}>
                            <Route path="/Home" element={<UI />}/>
                            <Route path="/Dashbord" element={<UI />} />
                            <Route path="/Passbook" element={<UI />} />
                            <Route path="/Files" element={<UI />} />
                            <Route path="/Friends" element={<UI />} />
                            <Route path="/Database" element={<UI />} />
                            <Route path="/Settings" element={<UI />} />
                            {/* <Route path="/Logout" element={<Logout />} /> */}
                        </Route>
                <Route path="/*" element={<Error />} />
            </Routes>
        </LoginVerify.Provider>
    </div>
    );
}

const Authenticator = () => {
    const Auth = useContext(LoginVerify);
    return (
        <div>
            {
                Auth.UserLogin?  <Outlet/> : <Navigate to="/" />
            }
        </div>
    )
}
export const LoginVerify = createContext();
export default Redirect;