import pass from '../Images/pass.png';
import hidepass from '../Images/hidepass.png';
import React,{useState , useEffect} from 'react';
import { createRoutesFromChildren, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
function Login() {
	const navigate = useNavigate();
	// Title Editor
	document.title = 'My App - Login';
	// States
	const [Message,ChangeMessage] = useState('Restricted Login Permissions only');
	const [password, setpassword] = useState('false');
	const [email, setemail] = useState('false');
	const [image, setimage] = useState(pass);
	const [User, setUser] = useState({
		email:"",password:""
	});
	
	axios.defaults.withCredentials = true;

	useEffect(()=>{
		axios.get('/auth/login/verify').then((response) =>{
			if(response.data.loggedIn === true)
				{
					toast.success(`Hi, ${response.data.user[0].frist_name} ${response.data.user[0].last_name}`,{
						autoClose:3000
					});
					console.log(response.data.user[0].frist_name + " " + response.data.user[0].last_name);
					ChangeMessage(`Hi, ${response.data.user[0].frist_name} ${response.data.user[0].last_name}`);
					setInterval(() => {
						navigate("../Home", { replace: true });
					}, 4000);
				}
		})
	},[])

	// Functions
	function tpassword()
			{
				var password = document.querySelector('[name=password]');
				if(password.getAttribute('type') === 'password')
				{
					password.setAttribute('type', 'text');
					password.setAttribute('placeholder','Password Showing');
					setimage(hidepass);
				}
				else
				{
					password.setAttribute('type','password');
					password.setAttribute('placeholder','Password');
					setimage(pass);
				}
			}
	const inputvalue = (e) =>
	{
		var name = e.target.name;
		var value = e.target.value;

		setUser({...User , [name]:value})
	}
	function eerror()
	{
		var error = document.querySelector('.error1');
		if(error.innerHTML === '* Required')
		{
			error.innerHTML = 'Invalid Email';
			error.style.display= 'block';
		}
		else if(error.innerHTML === 'Invalid Email')
		{
			
		}
	}
	function p(){setpassword('true');}
	function e(){setemail('true');}
	function perror()
			{
				var error = document.querySelector('.error2');
				if(error.innerHTML === '* Required')
					{
						error.innerHTML = 'Invalid Password';
						error.style.display= 'block';
					}
				else if(error.innerHTML === 'Invalid Password')
					{
						
					}
			}
	const Login = async (e) =>
		{

let headersList = {
	"Accept": "*/*",
	"Content-Type": "application/json" 
}

const {email , password} = User;
let bodyContent = JSON.stringify({
    "email":email,
    "password":password
});

let reqOptions = {
	url: "/Login",
	method: "POST",
	headers: headersList,
	data: bodyContent,
}

axios.request(reqOptions).then(function (response) {
	if(response.data.message)
		{
			toast.error(`${response.data.message}`,
			{
				autoClose:10000,
				closeOnClick:true,
				pauseOnHover:false,
				newestOnTop:true,
				closeButton:false,
			}
			);
			ChangeMessage('Username OR Password Wrong');
		}
	else if (response.data[0].id)
		{
			if(response.data[0].login_permission == 'true')
				{
					toast.success(`You been Redirected in few moments`);
					ChangeMessage(`Hi, ${response.data[0].frist_name} ${response.data[0].last_name}`);
					setInterval(() => {
						navigate("../Home", { replace: true });
					}, 3000);
					console.log(response.data[0])
				}
			else
				{
					toast.error(`You Need Permission For Login`);
				}
				console.log(response)
		}
})
e.preventDefault();
		}
    return (
        <section className="section bodylogin">
			<ToastContainer 
			position="top-right"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			draggable
			pauseOnHover
			theme= 'dark'
			></ToastContainer>
		<div className="box2">
			<form method="POST" className="form">
					<h2>Login</h2>
					<div className="inputbx">
						<div className="Message">
						</div>
					</div>
					<div className="inputbx">
						<input id="email" type="email" name="email" focused={email} className="text" placeholder='Email'  onChange={e=> {inputvalue(e);eerror();}} value={User.email} required onClick={e}/>
						<div className="error1">* Required</div>
					</div>
					<div className="inputbx">
						<input id="password" type="password" name="password" focused={password} className="password" placeholder='Password' onChange={e=> {inputvalue(e);perror();}}  value={User.password} pattern= "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" required onClick={p}/>
						<div className="error2">* Required</div>
					</div>
					<div className="inputbx">
						<span>
							<img alt="Show Password" id="toggler" className="toggle" src={image} onClick={tpassword} />
						</span>
					</div>
					<div className="inputbx">
						<input id="button" type="submit" value="Login" onClick={Login}/>
					</div>
					<div className="inputbx">
						<a id="link1" className="link" href="/">Forgot Password ? [Not Added]</a>
					</div>
					<div className="inputbx">
						<a id="link2" className="link" href="/signup">New User ?</a>
					</div>
					<div className="inputbx">
						<a className="link3" href="./help">• {Message} •</a>
					</div>
				</form>
			</div>
		</section>
    );
}
export default Login;