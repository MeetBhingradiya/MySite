import React from 'react';
import {useNavigate } from "react-router-dom";

function Authenticator(props) {
    const {Component , Authenticator} = props
    // const navigate = useNavigate();
    const[Auth, setAuth] = useState("true");
    // axios.defaults.withCredentials = true;
    // useEffect(()=>{
	// 	axios.get('/auth/login/verify').then((response) =>{
	// 		if(response.data.Auth === true)
	// 			{
    //                 setAuth('true');
	// 			}
    //         else
    //             {
    //                 setAuth('false')
    //                 console.log( Auth, 'Auth Failed');
    //             }
	// 	})
	// },[])
    return (
        <div>
            {
                <Component/>
            }
        </div>
    )
}

export default Authenticator