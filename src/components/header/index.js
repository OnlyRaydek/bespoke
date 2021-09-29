import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames';
// import './style.css';

const Header = ({ currentLocation }) => {
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
  const navLink = document.querySelectorAll('.nav__link');
  navLink.forEach(n => n.addEventListener('click', toggleMenu));

  const navigation = [
    {
      name: 'головна',
      path: '/bespoke/',
    },
    {
      name: 'про нас',
      path: '/about/',
    },
    {
      name: 'наші роботи',
      path: '/works/',
    },
    {
      name: 'контакти',
      path: '/contacts/',
    },
  ]

  return (
    <>
      <header
        className={classnames('header', { 'scroll-header': scroll })}
        id="header"
      >
        <nav className="nav container">
          <Link to='/bespoke/'
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
              {navigation.map((element) => {
                return (
                  <li className="nav__item">
                    <Link
                      to={element.path}
                      className={classnames(
                        "nav__link",
                        {"active-link": currentLocation === element.path},
                      )}
                    >
                      {element.name}
                    </Link>
                  </li>
                )
              })}
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