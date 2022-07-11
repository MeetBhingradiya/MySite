import React,{useState , useEffect} from 'react';
import {Route, Routes } from "react-router-dom";
import Login from "../Components/Login/Login";
import Error from "../Components/Error/Error";
import Authenticator from "./Authenticator";
import axios from 'axios';
import "../Module/Universal/Universal.css";
import UI from "../Module/UI/UI";
// import Logout from "./Logout";
function Redirect() {

    const [UserLogin,SetUserLogin] = useState("false");
    axios.defaults.withCredentials = true;
    useEffect(()=>{
    axios.get('/auth/login/verify').then((response) =>{
        if(response.data.Auth === true)
            {
                SetUserLogin('true')
                console.log('User Login Success');
            }
        else
            {
                SetUserLogin('false')
                console.log('User Login Fail');
            }
        })
    },[UserLogin])
    debugger
    return (
    <div>
        <Routes>
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
    </div>
    );
}

export default Redirect;