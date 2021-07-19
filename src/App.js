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
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';

// eslint-disable-next-line
const App = () => {

  /*==================== SHOW SCROLL UP ====================*/
  function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll className to the a tag with the scroll-top className
    if (this.scrollY >= 200) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll')
    }
  };
  window.addEventListener('scroll', scrollUp);

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]');

  function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
  };
  window.addEventListener('scroll', scrollActive);

  /*==================== TYPE EFFECT ====================*/

  const discoverText = [
    'Discover your interier'
  ];
  const exploreText = [
    'Explore The',
    'Best Beautiful',
    'Design'
  ];

  function typeText(array, classname, time) {
    setTimeout(() =>{
      let line = 0;
      let count = 0;
      let out = '';
      let htmlOut = document.querySelector(`.${classname}`);

      if (htmlOut === null) {
        setTimeout(() => {
          typeText(array, classname);
        }, 500)
      } else {
        function typeLine() {
          // draw sroke
          let interval = setTimeout(function () {
            out += array[line][count];
            htmlOut.innerHTML = out;
            count++;
            /** //* Проверки! Не закончило=ась ли строка */
            if (count >= array[line].length) {
              count = 0;
              out += '</br>';
              htmlOut.innerHTML = out;
              line++;
              if (line == array.length) {
                clearTimeout(interval);
                return true;
              }
            }
            typeLine();
          }, 200);
        }

        typeLine();
      }
    }, time)
  }

  return (
    <>
      <Header />

    <main  className="main">
      {/* //*<!--==================== HOME ====================--> */}
      <section className="home" id="home">
        <div className="home__img" ></div>

        <div className="home__container container grid">
          <div className="home__data">
            <span
              className="home__data-subtitle discover-text"
              onLoad={typeText(discoverText, 'discover-text', 200)}
            >
              {/* Discover your interier */}
            </span>
            <h2
              className="home__data-title explore-text"
              onLoad={typeText(exploreText, 'explore-text', 5000)}
            >
              {/* Explore The <br /> Best <b>Beautiful <br /> Design</b> */}
            </h2>
            {/* <a href="#" className="home__data-button button">Explore</a> */}
            {/* <span className='home__data-subtitle out' onLoad={typeText(t, 'out')}></span> */}
          </div>
          <div>
            <a href="#" className="home__data-button button">Explore</a>
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

      {/* //*<!--==================== ABOUT ====================--> */}
      <section className="about section">
        <div className="about__bg">
          <Pricing />
        </div>
      </section>

      {/* //*<!--==================== Gallery ====================--> */}
      <section className="album section">
        <div className="album__bg">
          <Gallery />
        </div>
      </section>

      {/* //*<!--==================== Pricing ====================--> */}
      <section className="pricing section">
        <div className="pricing__bg">
          <Pricing />
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
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div className="footer__data">
            <h3 className="footer__title">Travel</h3>
            <p className="footer__description">Travel you choose the <br /> destination,
              we offer you the <br /> experience.
            </p>
            <div>
              <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" className="footer__social">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" className="footer__social">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">About</h3>
            <ul>
              <li className="footer__item">
                <a href="" className="footer__link">About Us</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Features</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">New & Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">Company</h3>
            <ul>
              <li className="footer__item">
                <a href="" className="footer__link">Team</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Plan y Pricing</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">Support</h3>
            <ul>
              <li className="footer__item">
                <a href="" className="footer__link">FAQs</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Support Center</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__rights">
          <p className="footer__copy">&#169; 2021 Bedimcode. All rigths reserved.</p>
          <div className="footer__terms">
            <a href="#" className="footer__terms-link">Terms & Agreements</a>
            <a href="#" className="footer__terms-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>

    {/* //*<!--========== SCROLL UP ==========--> */}
    <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line scrollup__icon"></i>
    </a>

    </>
  );
}

export default App;
