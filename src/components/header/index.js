import React, { useState } from 'react';
import classnames from 'classnames';
// import './style.css';

const Header = () => {
  function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 1) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader)

  /*==================== MENU VARIABLES ====================*/
  const navMenu = document.getElementById('nav-menu');


  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link')

  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu className
    navMenu.classList.remove('show-menu')
  }

  navLink.forEach(n => n.addEventListener('click', linkAction))

  /* //*===== MENU SHOW/HIDE =====*/

  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    console.log('hello');
    console.log(isActive);
    setActive(!isActive);
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="" className="nav__logo">Bespoke</a>

          <div
            className={classnames('nav__menu', { 'show-menu' : isActive})}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">About</a>
              </li>
              <li className="nav__item">
                <a href="#discover" className="nav__link">Discover</a>
              </li>
              <li className="nav__item">
                <a href="#place" className="nav__link">Interier</a>
              </li>
            </ul>

            {/* //** Theme change button */}
            {/* <div className="nav__dark">
              <span className="change-theme-name">Dark mode</span>
              <i className="ri-moon-line change-theme" id="theme-button"></i>
            </div> */}

            <i className="ri-close-line nav__close" id="nav-close" onClick={toggleMenu}></i>
          </div>

          <div
            className={'nav__toggle'}
            id="nav-toggle"
            onClick={toggleMenu}
          >
            <i className="ri-function-line"></i>
          </div>
        </nav>
      </header>
    </>
  )
};

export default Header;