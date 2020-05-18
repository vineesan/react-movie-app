import React from 'react';
import logo from '../../_img/movie.svg';
import logoVini from '../../_img/movie.svg';
import SearchBar from '../../components/SearchBar';

import './index.css';

const Header = () => {
  return (
    <div className="App-header">
      <div className="App-logo">
        <a className="App-header-title" href="/"><img src={logo} alt="Movie"/></a>
        <a className="App-header-title" href="/"><img src={logoVini} alt="Movie Logo"/></a>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
