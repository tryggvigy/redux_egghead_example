import React from 'react';
require('./Header.scss');
const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <a className="Header__nav__link" href="#">The Infinite</a>
        <a className="Header__nav__link" href="#">The Unatainable</a>
        <a className="Header__nav__link" href="#">Anything</a>
      </nav>
      <h1 className="Header__title"> Zombocom </h1>
      <div className=""></div>
    </header>
  );
};

export default Header;
