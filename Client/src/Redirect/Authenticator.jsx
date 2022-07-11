import React from 'react';
import { Navigate , Outlet} from "react-router-dom";

function Authenticator(props) {

    if(props.Auth.loggedIn === 'true')
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

export default Authenticator