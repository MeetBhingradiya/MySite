import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import UI from "../Module/UI/UI";
import Error from "../Pages/Error/Error";
import "../Module/Universal/Universal.css";
import Logout from "./Logout";
function Redirect() {
    return (
    <div>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
        <Route path="/hello" element={<h1>Hello User</h1>} />
        <Route path="/Admin/Database/Install" element={<UI />} />

        <Route path="/UI" element={<UI />} />
        <Route exact path="/Home" element={<UI />} />
        <Route exact path="/Dashbord" element={<UI />} />
        <Route exact path="/Passbook" element={<UI />} />
        <Route exact path="/Files" element={<UI />} />
        <Route exact path="/Friends" element={<UI />} />
        <Route exact path="/Database" element={<UI />} />
        <Route exact path="/Settings" element={<UI />} />
        
        
        </Routes>
    </div>
    );
}

export default Redirect;