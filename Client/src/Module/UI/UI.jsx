// ! Modules
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// ! Images
import Profile1M from './Settings/Profiles/1.jpg';
import Profile2F from './Settings/Profiles/2.jpg';
import Dark from './Settings/theme-dark.png';
import Light from './Settings/theme-light.png';
// ! Icons
import { CgMenu } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';
import { FiDatabase } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import { MdFolder } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { AiFillPieChart } from 'react-icons/ai';
import { MdLibraryBooks } from 'react-icons/md';





function UI() {
    const Logout = (e) =>{
        e.preventDefault();
    }
    const [image, setimage] = useState(Dark);
    const [MenuBar, ChangeMenuBar] = useState('menubar');
    const [ProfileMenu , ChangeProfileMenu] = useState('profile_toggle');
    function theme_toggle()
{
    if(image === Dark)
        {
            setimage(Light) ;
            document.body.setAttribute('class','light');
        }
    else 
        {
            setimage(Dark);
            document.body.setAttribute('class','Dark');
        }
}
document.title = 'My App UI Module'
function MenuToggle()
{
    if(MenuBar === 'menubar')
        {
            ChangeMenuBar('menubar_active');
        }
    else 
        {
            ChangeMenuBar('menubar');
        }
}
function ProfileToogle()
{
    if(ProfileMenu === 'profile_toggle')
        {
            ChangeProfileMenu('profile_toggle_visible');
        }
    else 
        {
            ChangeProfileMenu('profile_toggle');
            console.log(Profile2F);
        }
}
return (
    <div class="ui" id="body">
        <div class="navigation">
            <div class={MenuBar}>
                <ul class="menu_ul">
                    <li class="menu_img" onClick={ MenuToggle }><div><CgMenu class="menu_icon"/></div></li>
                    <li class="menu_li"><NavLink to="/Home" end className={({ isActive }) =>isActive ? 'active' : 'notactive'}><div class="menu_logo" ><FaHome/></div><div class="menu_text">Home</div></NavLink></li>
                    <li class="menu_li"><NavLink to="/Dashbord" end className={({ isActive }) =>isActive ? 'active' : 'notactive'}><div class="menu_logo"><AiFillPieChart/></div><div class="menu_text">Dashbord</div></NavLink></li>
                    <li class="menu_li"><NavLink to="/Passbook" end className={({ isActive }) =>isActive ? 'active' : 'notactive'}><div class="menu_logo"><MdLibraryBooks/></div><div class="menu_text">Passbook</div></NavLink></li>
                    <li class="menu_li"><NavLink to="/Files" end className={({ isActive }) =>isActive ? 'active' : 'notactive'}><div class="menu_logo"><MdFolder/></div><div class="menu_text">Files</div></NavLink></li>
                    <li class="menu_li"><NavLink to="/Friends" end className={({ isActive }) =>isActive ? 'active' : 'notactive'}><div class="menu_logo"><FaUserFriends/></div><div class="menu_text">Friends</div></NavLink></li>
                    <li class="menu_li"><NavLink to="/Database" end className={({ isActive }) =>isActive ? 'active' : 'notactive'}><div class="menu_logo"><FiDatabase/></div><div class="menu_text">Database</div></NavLink></li>
                    <li class="menu_li"><NavLink to="/Settings" end className={({ isActive }) =>isActive ? 'active' : 'notactive'}><div class="menu_logo"><IoSettingsSharp/></div><div class="menu_text">Settings</div></NavLink></li>
                    <li class="logout" onClick={Logout}><div class="menu_logo"><FiLogOut/></div><div class="menu_text">Logout</div></li> 
                </ul>
            </div>
            
            <div class="statusbar">
                <div class="profile" onClick={ProfileToogle}><img alt="ProfiePic" src={Profile1M}/></div>
                <div class={ProfileMenu}>
                    <div class="profile_img_area">
                            <div class="profile_img"><img alt="ProfiePic" src={Profile2F}/></div>
                            <div class="profile_img_changer"></div>
                            <div class="account_name">Firstname Lastname</div>
                    </div>
                    <ul class="profile_ul">
                        <li>Manage Account</li>
                        <li>Logout</li>
                    </ul>
                </div>
                <div class="theme" onClick={theme_toggle}>
                    <img id="theme_img" src={image} alt="Theme Changer"/> 
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default UI;