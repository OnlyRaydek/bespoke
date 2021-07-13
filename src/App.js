// import './App.css';
import './styles.scss';
import './swiper-bundle.min.css';

import greenLivingRoom from './assets/img/green-living-room-ideas.jpg';

import Header from './components/header';

// eslint-disable-next-line
const App = () => {
  /*==================== SHOW MENU ====================*/
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  /*===== MENU SHOW =====*/
  /* Validate if constant exists */
  if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
    })
  };

  /*===== MENU HIDDEN =====*/
  /* Validate if constant exists */
  if(navClose){
    navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
    })
  };

  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link')

  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))


  return (
    <>
      <Header />

      {/* <!--==================== HOME ====================--> */}
      <section className="home" id="home">
        <div className="home__img" ></div>

        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__data-subtitle">Discover your interier</span>
            <h1 className="home__data-title">
              Explore The <br /> Best <b>Beautiful <br /> Design</b>
            </h1>
            <a href="#" className="button">Explore</a>
          </div>

          <div className="home__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>

          <div className="home__info">
            <div>
              <span className="home__info-title">5 best design to explore</span>
              <a href="#" className="button button--flex button--link home__info-button">
                  More <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="home__info-overlay">
              <img src={greenLivingRoom} alt="" className="home__info-img" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
