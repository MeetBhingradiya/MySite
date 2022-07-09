import React from "react";
import {useState , useEffect} from 'react';
// import axios from 'axios';
import {Route, Routes, useNavigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import Home from "../Module/UI/UI";
import Error from "../Components/Error/Error";
import Authenticator from "./Authenticator";
import "../Module/Universal/Universal.css";
// import Logout from "./Logout";
function Redirect() {
    return (
    <div>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Login" element={<Login />} />
            {/* <Route exact path="/Logout" element={<Logout />} /> */}

            {/* <Route path="/UI" element={()=>{if(Auth === true){return <UI />} else{navigate("../Login", { replace: true });}}}/> */}
            <Route exact path="/Home" element={<Authenticator Component={Home} Authenticator={Auth}/>} />
            <Route exact path="/Dashbord" element={<UI />} />
            <Route exact path="/Passbook" element={<UI />} />
            <Route exact path="/Files" element={<UI />} />
            <Route exact path="/Friends" element={<UI />} />
            <Route exact path="/Database" element={<UI />} />
            <Route exact path="/Settings" element={<UI />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </div>
    );
}

export default Redirect;