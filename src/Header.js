import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

export const Header = () => {
   return (
      <div className='header'>
         <div className="header__logo">
            <h1>@LOGO</h1>
         </div>
         <div className='header__center'>
            <input type="text" />
            <SearchIcon />
         </div>
         <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
         </div>
      </div>
   )
}
