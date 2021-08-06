import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './style.scss';

const PageNavigation = () => {
  /*==================== HEADER CLASSNAME ====================*/
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 70);
    });
  }, []);

  /*===== MENU SHOW/HIDE =====*/
  // const [isActive, setActive] = useState(false);

  // const toggleMenu = () => {
  //   setActive(!isActive);
  // };

  /*==================== MENU VARIABLES ====================*/
  // const navMenu = document.getElementById('nav-menu');


  /*==================== REMOVE MENU MOBILE ====================*/
  // const navLink = document.querySelectorAll('.nav__link')

  // function linkAction(){
  //   const navMenu = document.getElementById('nav-menu')
  //   // When we click on each nav__link, we remove the show-menu className
  //   navMenu.classList.remove('show-menu')
  // }

  // navLink.forEach(n => n.addEventListener('click', linkAction));

  /*==================== ACTIVE PAGE NAVIGATION ====================*/

  // const sections = document.querySelectorAll('section[id]');

  // function scrollActive(){
  //   const scrollY = window.pageYOffset;

  //   sections.forEach(current =>{
  //       const sectionHeight = current.offsetHeight;
  //       const sectionTop = current.offsetTop - 50;
  //       let sectionId = current.getAttribute('id');

  //       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
  //       } else {
  //           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
  //       }
  //   });
  // };
  // window.addEventListener('scroll', scrollActive);

  return (
    <>
      <nav className={classnames('asside_nav', { 'asside_nav--scroll': scroll })}>
        <div
          className={classnames('asside_nav__menu', { 'show-menu' : isActive})}
          id="asside_nav-menu"
        >
          <ul className="asside_nav__list">
            <li className="asside_nav__item">
              <a href="#home" className="asside_nav__link active-link">Home</a>
            </li>
            <li className="asside_nav__item">
              <a href="#about" className="asside_nav__link">About</a>
            </li>
            <li className="asside_nav__item">
              <a href="#discover" className="asside_nav__link">Discover</a>
            </li>
            <li className="asside_nav__item">
              <a href="#place" className="asside_nav__link">Interier</a>
            </li>
          </ul>

          <i
            className="ri-close-line asside_nav__close"
            id="asside_nav-close"
            onClick={toggleMenu}
          ></i>
        </div>

        <div
          className={'asside_nav__toggle'}
          id="asside_nav-toggle"
          onClick={toggleMenu}
        >
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </>
  )
};

export default PageNavigation;