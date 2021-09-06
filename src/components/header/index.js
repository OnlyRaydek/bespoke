import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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

  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link')

  navLink.forEach(n => n.addEventListener('click', toggleMenu))

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
                <Link to='/bespoke/' className="nav__link active-link">Home</Link>
              </li>
              <li className="nav__item">
                <Link to='/about/' className="nav__link">About</Link>
              </li>
              {/* <li className="nav__item">
                <Link to="/discover/" className="nav__link">Discover</Link>
              </li> */}
              {/* <li className="nav__item">
                <Link to="/works/" className="nav__link">Our Works</Link>
              </li> */}
              <li className="nav__item">
                <Link to="/album/" className="nav__link">Album</Link>
              </li>
              <li className="nav__item">
                <Link to="/contacts/" className="nav__link">Contacs</Link>
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