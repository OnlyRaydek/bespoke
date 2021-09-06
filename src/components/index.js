import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { Switch, Route, useLocation, Redirect } from 'react-router-dom'

import ScrollToTop from './ScrollToTop';
import Preloader from './Preloader';
import Header from './Header';

import Home from './Home';
import About from './About';
import Album from './Gallery';
import Contacts from './Contacts';
import Footer from './Footer';

const Main = () => {

  // /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  // const sections = document.querySelectorAll('section[id]');

  // function scrollActive(){
  //   const scrollY = window.pageYOffset;

  //   sections.forEach(current =>{
  //       const sectionHeight = current.offsetHeight;
  //       const sectionTop = current.offsetTop - 100;
  //       let sectionId = current.getAttribute('id');

  //       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
  //       } else {
  //           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
  //       }
  //   });
  // };
  // window.addEventListener('scroll', scrollActive);

  const [ hidePreload, setHidePreload ] = useState(false);
  const [ canScroll, setCanScroll ] = useState(false);
  const [ scrollUp, setScrollUp ] = useState(false);


  // /*==================== HIDE PRELOAD ====================*/
  useEffect(() => {
    if (hidePreload === true) {
      setTimeout(() => {
        setCanScroll(true);
      }, 4000)
    }
  }, [hidePreload]);

  // /*==================== SHOW SCROLL UP ====================*/
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY >= 200);
    });
  }, []);

  // // -------------------------------------------------------

  const HandleHidePreload = () => {
    setTimeout(() => {
      setHidePreload(true);
    }, 2000)
  };

  // /*==================== SHOW SCROLL UP ====================*/

  // custom hook to get the current pathname in React

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }

  // -------------------------------------------------------

  return (
    <>
    <div
      className={classnames(
        'main_wrapper',
        {'main_wrapper--scroll': canScroll}
      )}
    >
      {usePathname() === '/bespoke' || '/bespoke/' && !canScroll
        ? <Preloader preloadState={hidePreload}/>
        : null
      }
      <Header />

      <main>
        <ScrollToTop>
          <Switch>
            <Redirect exact from="/" to="/bespoke/" />

            <Route
              exact path='/bespoke/'
              render={(props) => <Home hideFunction={HandleHidePreload} hidePreload={hidePreload} preloadState={hidePreload} {...props} />}
            />
            <Route path='/about/' component={About}/>
            {/* <Route path='/discover/' component={Album}/> */}
            {/* <Route path='/works/' component={Works}/> */}
            <Route path='/album/' component={Album}/>
            <Route path='/contacts/' component={Contacts}/>
            <Route path="*" render={() => <Redirect to={{pathname: "/"}}/>} />
          </Switch>
        </ScrollToTop>
      </main>

      {/* <Home hideFunction={HandleHidePreload} hidePreload={hidePreload} /> */}
      <Footer />

      {/* //*<!--========== SCROLL UP ==========--> */}
      <div
        className={classnames("scrollup", {'show-scroll': scrollUp})}
        onClick={() => { window.scrollTo(0, 0) }}
      >
        <i className="ri-arrow-up-line scrollup__icon"></i>
      </div>
    </div>
    </>
  );
};

export default Main;