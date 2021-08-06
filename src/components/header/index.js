import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
// import './style.css';

const Header = () => {
  /*==================== HEADER CLASSNAME ====================*/
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 70);
    });
  }, []);

  /*===== MENU SHOW/HIDE =====*/
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

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

  return (
    <>
      <header
        className={classnames('header', { 'scroll-header': scroll })}
        id="header"
      >
        <nav className="nav container">
          {/* <a href="" className="nav__logo">Bespoke</a> */}
            <div
              className={classnames(
                'nav__svg',
                {'nav__svg-logo--full': !scroll},
                {'nav__svg-logo--mini': scroll}
              )}
              alt="Company logo"
            />

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
                <a href="#album" className="nav__link">Album</a>
              </li>
              <li className="nav__item">
                <a href="#discover" className="nav__link">Discover</a>
              </li>
              <li className="nav__item">
                <a href="#subscribe" className="nav__link">Sunbscribe</a>
              </li>
              <li className="nav__item">
                <a href="#partners" className="nav__link">Partners</a>
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