
import axios from "axios";
export const Authenticator = (state=false , action)=>{
    axios.defaults.withCredentials = true;
    axios.get('/auth/login/verify').then((response) =>{
        if(response.data.Auth === true)
            {
                return state=true
            }
        else
            {
                return state=false;
            }
        })
};