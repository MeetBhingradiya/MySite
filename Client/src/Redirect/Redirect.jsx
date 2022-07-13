import React,{useState, createContext} from 'react';
import {Route, Routes , useNavigate} from "react-router-dom";
import Login from "../Components/Login/Login";
import Error from "../Components/Error/Error";
// import Test from '../Components/Test/Test';
import axios from 'axios';
import Authenticator from "./Authenticator";
// import Authenticator from '../Context/Auth/Auth';
import "../Module/Universal/Universal.css";
import UI from "../Module/UI/UI";
// import Logout from "./Logout";
function Redirect() {
    const LoginVerify = createContext();
    const [UserLogin,SetUserLogin] = useState({ isLoggedIn:false });



    async function Verify()
        {
            const navigate = useNavigate();
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
                }
    
                let reqOptions = {
                url: "/auth/login/verify",
                method: "GET",
                headers: headersList,
                }
            const Data = await axios.request(reqOptions).then(function (response) {if(response.data.Auth === true)
                {
                    const Login = true;
                    // setInterval(() => {
						navigate("../Home", { replace: true });
					// }, 3000);
                    SetUserLogin({ isLoggedIn:true });
                }
            else
                {
                    const Login = true;
                    SetUserLogin({ isLoggedIn:false });
                }
            })
        }
        // Verify();
    return (
    <div>
        <LoginVerify.Provider value={UserLogin}>
            <Routes>
                {/* <Route exact path="test" element={<Test />} /> */}
                <Route exact path="/" element={<Login />} />
                <Route exact path="/Login" element={<Login />} />

                        {/* <Route element={<Authenticator Auth={Verify().Login}/>}> */}
                            <Route path="/Home" element={<UI />}/>
                            <Route path="/Dashbord" element={<UI />} />
                            <Route path="/Passbook" element={<UI />} />
                            <Route path="/Files" element={<UI />} />
                            <Route path="/Friends" element={<UI />} />
                            <Route path="/Database" element={<UI />} />
                            <Route path="/Settings" element={<UI />} />
                            {/* <Route path="/Logout" element={<Logout />} /> */}
                        {/* </Route> */}
                <Route path="/*" element={<Error />} />
            </Routes>
        </LoginVerify.Provider>
    </div>
    );
}

export default Redirect;