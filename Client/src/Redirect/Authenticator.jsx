import React from 'react';
import {  useCookies ,withCookies , Cookies , CookieParseOptions } from 'react-cookie';
import { Navigate , Outlet} from "react-router-dom";

// const [cookies, setCookie, removeCookie] = useCookies(['UserData']);

// console.log(cookies);

function Authenticator() {
    // if(document.cookie.get('UserData'))
    //     {
            return <Outlet/>;
    //     }
    // else
    //     {
    //         return <Navigate to="/" />
    //     }
    // const isAuth = props.Auth.loggedIn
    // return isAuth ? <Outlet/> : <Navigate to="/" />
}

export default Authenticator;