import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

// import './App.css';
import './styles.scss';
import './swiper-bundle.min.css';

import Preloader from './components/Preloader';
import Header from './components/Header';

import Head from './components/Home/Head';
import About from './components/Home/About';
import Discover from './components/Home/Discover';
import Gallery from './components/Home/Gallery';
import Subscribe from './components/Home/Subscribe';
import Partners from './components/Home/Partners';
import Footer from './components/Home/Footer';

// eslint-disable-next-line
const App = () => {
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]');

  function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
  };
  window.addEventListener('scroll', scrollActive);

  const [ hidePreload, setHidePreload ] = useState(false);
  const [ canScroll, setCanScroll ] = useState(false);
  const [ scrollUp, setScrollUp ] = useState(false);


  /*==================== HIDE PRELOAD ====================*/
  useEffect(() => {
    if (hidePreload === true) {
      setTimeout(() => {
        setCanScroll(true);
      }, 3000)
    }
  }, [hidePreload]);

  // -------------------------------------------------------

  /*==================== SHOW SCROLL UP ====================*/
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY >= 200);
    });
  }, []);

  // -------------------------------------------------------

  const HandleHidePreload = () => {
    setTimeout(() => {
      setHidePreload(true);
    }, 2000)
  };

  return (
    <div
      className={classnames(
        'main_wrapper',
        {'main_wrapper--scroll': canScroll}
      )}
    >
      <Preloader preloadState={hidePreload}/>
      <Header />

      <main  className="main" onLoad={HandleHidePreload}>
        {/* //*<!--==================== HEAD ====================--> */}
        <Head hidePreload={hidePreload}/>

        {/* //*<!--==================== ABOUT ====================--> */}
        <About />

        {/* //*<!--==================== ALBUM ====================--> */}
        <Gallery />

        {/* //*<!--==================== Pricing ====================--> */}
        <Discover />

        {/* //*<!--==================== SUBSCRIBE ====================--> */}
        <Subscribe />

        {/* //*<!--==================== PARTNERS ====================--> */}
        <Partners />
      </main>

      {/* //*<!--==================== FOOTER ====================--> */}
      <Footer />

      {/* //*<!--========== SCROLL UP ==========--> */}
      <a href="#" className={classnames("scrollup", {'show-scroll': scrollUp})} id="scroll-up">
        <i className="ri-arrow-up-line scrollup__icon"></i>
      </a>
    </div>
  );
}

export default App;
