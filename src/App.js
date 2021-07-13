// import './App.css';
import './styles.scss';
import './swiper-bundle.min.css';

import greenLivingRoom from './assets/img/green-living-room-ideas.jpg';
import sponsors1 from './assets/img/sponsors1.png';
import sponsors2 from './assets/img/sponsors2.png';
import sponsors3 from './assets/img/sponsors3.png';
import sponsors4 from './assets/img/sponsors4.png';
import sponsors5 from './assets/img/sponsors5.png';

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
    // When we click on each nav__link, we remove the show-menu className
    navMenu.classList.remove('show-menu')
  }

  navLink.forEach(n => n.addEventListener('click', linkAction))

  /*==================== SHOW SCROLL UP ====================*/
  function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
  }
  window.addEventListener('scroll', scrollActive)


  return (
    <>
      <Header />

    <main  className="main">
      {/* //*<!--==================== HOME ====================--> */}
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

      {/* //*<!--==================== SUBSCRIBE ====================--> */}
      <section className="subscribe section">
        <div className="subscribe__bg">
          <div className="subscribe__container container">
            <h2 className="section__title subscribe__title">
              Subscribe Our <br/> Newsletter
            </h2>
            <p className="subscribe__description">Subscribe to our newsletter and get a
              special 30% discount.
            </p>

            <form action="" className="subscribe__form">
              <input type="text" placeholder="Enter email" className="subscribe__input" />

              <button className="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* //*<!--==================== SPONSORS ====================--> */}
      <section className="sponsor section">
        <div className="sponsor__container container grid">
          <div className="sponsor__content">
            <img src={sponsors1} alt="" className="sponsor__img" />
          </div>
          <div className="sponsor__content">
            <img src={sponsors2} alt="" className="sponsor__img" />
          </div>
          <div className="sponsor__content">
            <img src={sponsors3} alt="" className="sponsor__img" />
          </div>
          <div className="sponsor__content">
            <img src={sponsors4} alt="" className="sponsor__img" />
          </div>
          <div className="sponsor__content">
            <img src={sponsors5} alt="" className="sponsor__img" />
          </div>
        </div>
      </section>
    </main>

    {/* //*<!--==================== FOOTER ====================--> */}
    <footer class="footer section">
      <div class="footer__container container grid">
        <div class="footer__content grid">
          <div class="footer__data">
            <h3 class="footer__title">Travel</h3>
            <p class="footer__description">Travel you choose the <br /> destination,
              we offer you the <br /> experience.
            </p>
            <div>
              <a href="https://www.facebook.com/" target="_blank" class="footer__social">
                <i class="ri-facebook-box-fill"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" class="footer__social">
                <i class="ri-twitter-fill"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" class="footer__social">
                <i class="ri-instagram-fill"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" class="footer__social">
                <i class="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          <div class="footer__data">
            <h3 class="footer__subtitle">About</h3>
            <ul>
              <li class="footer__item">
                <a href="" class="footer__link">About Us</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Features</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">New & Blog</a>
              </li>
            </ul>
          </div>

          <div class="footer__data">
            <h3 class="footer__subtitle">Company</h3>
            <ul>
              <li class="footer__item">
                <a href="" class="footer__link">Team</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Plan y Pricing</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Become a member</a>
              </li>
            </ul>
          </div>

          <div class="footer__data">
            <h3 class="footer__subtitle">Support</h3>
            <ul>
              <li class="footer__item">
                <a href="" class="footer__link">FAQs</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Support Center</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__rights">
          <p class="footer__copy">&#169; 2021 Bedimcode. All rigths reserved.</p>
          <div class="footer__terms">
            <a href="#" class="footer__terms-link">Terms & Agreements</a>
            <a href="#" class="footer__terms-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>

    {/* //*<!--========== SCROLL UP ==========--> */}
    <a href="#" class="scrollup" id="scroll-up">
      <i class="ri-arrow-up-line scrollup__icon"></i>
    </a>

    </>
  );
}

export default App;
