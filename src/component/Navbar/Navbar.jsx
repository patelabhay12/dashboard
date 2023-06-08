import React from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search....' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icons' />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icons' />
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className='icons' />
            <div className="counter">10</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icons' />
            <div className="counter">4</div>
          </div>
          <div className="item">
            <ViewListOutlinedIcon className='icons' />
          </div>
          <div className="item">
            <img
              src="https://statinfer.com/wp-content/uploads/dummy-user.png"
              alt="Photos"
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;