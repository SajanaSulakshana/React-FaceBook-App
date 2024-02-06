import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="NavBarBox">
      <div className="NavBarLeft">
        <span className="logo">FaceBook</span>
      </div>


      <div className="NavBarCenter">
        <div className="searchBarBox">
        <SearchIcon className='searchicon'/>
        <input placeholder='search for your friend' className="searchInput" />
        </div>
      </div>


      <div className="NavBarRight">
        <div className="navBarLinks">
          <span className='navBarLink'>Home Page</span>
          <span className='navBarLink'>Profile</span>
        </div>

        <div className="navBarIcons">

        <div className="navBarIcons">
          <PersonIcon/>
          <span className="iconTag">3</span>
          
          </div>
          <div className="navBarIcons">
          <MessageIcon/>
          <span className="iconTag">6</span>
        </div>
        <div className="navBarIcons">
          <SettingsIcon/>
          <span className="iconTag">4</span>
        </div>
        </div>
        <div className="pic">
          <img src="/images/kmn.jpg" alt="" className="progfilePicImg" />
        </div>
      </div>
    </div>
    
  )
}
