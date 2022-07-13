import React from 'react';
import Cookies from 'js-cookie'
import { Navigate , Outlet} from "react-router-dom";

function Authenticator() {
    debugger
    if(Cookies.get('UserData'))
        {
            return <Outlet/>;
        }
    else
        {
            return <Navigate to="/" />
        }
    // const isAuth = props.Auth.loggedIn
    // return isAuth ? <Outlet/> : <Navigate to="/" />
}

export default Authenticator;