import React,{ useState , createContext , useContext , useEffect} from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

export default function App() {
    const [Auth, setAuth] = useState(false);
    const ReadCookie = ()=>{
        const UserLoginStatus = Cookies.get('isLoggedIn');
            if(UserLoginStatus)
                {
                    setAuth(true);
                }
    }

    useEffect(() => {
        ReadCookie()
    },[]);
    
    return (
        <AuthApi.Provider value={{Auth,setAuth}}>
            <div className='mx2'>
                <div className='container'>You Viewing TEST MODE [Context API]</div>
                <MyRoutes Auth={Auth}/>
            </div>
        </AuthApi.Provider>
    )
}
const Login = ()=>{
    const navigate = useNavigate();
    const Auth = useContext(AuthApi);
    const handleLogin = ()=>{
        Auth.setAuth(true);
        // navigate("../Home", { replace: true });
        Cookies.set('isLoggedIn', 'true', { expires: 2 });
    }
    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

const Dashbord = ()=>{
    const navigate = useNavigate();
    const Auth = useContext(AuthApi);
    const handleLogout = ()=>{
        Auth.setAuth(false);
        // navigate("../", { replace: true });
        Cookies.remove('isLoggedIn');
    }
    return(
        <div>
            <h1>Dashbord</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}


const MyRoutes = ()=> {
    const Auth = useContext(AuthApi);
    return(
        <Routes>
            <Route element={<LoginVerify Auth={Auth.Auth}/>}>
                <Route path='/' element={<Login/>}/>
            </Route>
            <Route element={<EncryptedRoutes Auth={Auth.Auth}/>}>
                <Route path="/Home" element={<Dashbord />}/>
                <Route path="/Dashbord" element={<Dashbord />} />
                <Route path="/Passbook" element={<Dashbord />} />
                <Route path="/Files" element={<Dashbord />} />
                <Route path="/Friends" element={<Dashbord />} />
                <Route path="/Database" element={<Dashbord />} />
                <Route path="/Settings" element={<Dashbord />} />
            </Route>
        </Routes>
    )
}

const LoginVerify = ({Auth})=> {
    return(
    <div>
        {Auth? <Navigate to="/Home"/> : <Outlet/>}
    </div>
    )
}
const EncryptedRoutes = ({Auth})=> {
    return(
    <div>
        {Auth? <Outlet/> : <Navigate to="/"/>}
    </div>
    )
}

const AuthApi = createContext();