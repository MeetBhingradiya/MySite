import './Signup.css';
import pass from '../Images/pass.png';
import hidepass from '../Images/hidepass.png';
import React,{useState} from 'react';

function Signup(){
	const [image, setimage] = useState(pass)
	function tpassword()
			{
				var password = document.querySelector('[name=password]');
				if(password.getAttribute('type') === 'password')
					{
						password.setAttribute('type', 'text');
						password.setAttribute('placeholder','Password is Showing');
						setimage(hidepass);
					}
				else
					{
						password.setAttribute('type','password');
						password.setAttribute('placeholder','Password');
						setimage(pass);
					}
			}
			const [image2, setimage2] = useState(pass)
		function tpassword2()
			{
				var password = document.querySelector('[name=conpassword]');
				if(password.getAttribute('type') === 'password')
					{
						password.setAttribute('type', 'text');
						password.setAttribute('placeholder','Conform Password is Showing');
						setimage2(hidepass);
					}
				else
					{
						password.setAttribute('type','password');
						password.setAttribute('placeholder','Conform Password');
						setimage2(pass);
					}
			}
		
    return(
        <section>
		<div class="box">
			
			<form method="POST" class="form" action="../Functions/signup check" enctype="multipart/form-data">
				<h2 class="h2">Signup</h2>
				<div class="Message">
							<img src="" alt="info"/><a class='error-link' href='./help'><div></div></a>
				</div>
				<div class="inputbxl2">
					<div class="imgview" imgurl="" id="imgview"></div>
					<div id="uploder" class="file-upload-wrapper" data-text="Select Profile Image">
						<input type="file" name="image" class="file-upload-field" accept="image/jpg,image/jpeg,image/png"/>
					</div>
				</div>
				<div class="inputbxl3">
					<selected name="role" id="select1" class="select">
						<optgroup label="Selected Role">
							<option selected disabled value=""></option>
						</optgroup>
						<optgroup label="List">

						<option value="User">User</option>
						<option value="Vip">Vip</option>
						</optgroup>
					</selected>
					<selected name="gender" id="select2" class="select">
						<optgroup label="Selected Gender">
							<option selected disabled value=""></option>
						</optgroup>
						<optgroup label="List">
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						</optgroup>
					</selected>
					<selected name="type" id="select3" class="select">
						<optgroup label="Selected Account Type">
							<option selected disabled value=""></option>
						</optgroup>
						<optgroup label="List">
						<option value="professional">Professional</option>
						<option value="personal">Personal</option>
						</optgroup>
					</selected>
					<selected name="theme" id="select4" class="select">
						<optgroup label="Selected Theme">
							<option selected disabled value=""></option>
						</optgroup>
						<optgroup label="List">
						<option value="default">Default</option>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
						<option value="System_Settings">System_Settings</option>
						<option value="Premade_1">Premade_1</option>
						</optgroup>
					</selected>
				</div>
				<div class="inputbx">
					<input type="text" name="name" class="name"  id="text" placeholder="Name" value=""/>
				</div>
				<div class="inputbx">
					<input class="name" type="text" name="email" id="text" placeholder="Email" value=""/>
				</div>
				<div class="inputbx">
					<input id="password" type="password" name="password" placeholder="Password"/>
					<span class="tpass1">
					<img id="toggler1" class="toggle" src={image} onClick={tpassword} alt="Show Password"/>
					</span>
				</div>
				<div class="inputbx">
					<input id="password" type="password" name="conpassword" placeholder="Conform Password"/>
					<span class="tpass2">
						<img id="toggler2" class="toggle" src={image2} onClick={tpassword2} alt="Show Password"/>
					</span>
				</div>
				<div class="inputbx">
					<input type="submit" value="Sign Up"/>
				</div>
				<div class="inputbx">
					<a id="link1" class="link" href="../../index"><input type="button" value="Login"/></a>
				</div>
			</form>
		</div>
	</section>
    )
}
export default Signup;