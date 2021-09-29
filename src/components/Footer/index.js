import React from 'react';

const Footer  = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <div className="footer__data">
              <h3 className="footer__title">Social networks</h3>
              <p className="footer__description">
                Subscribe to us on facebook <br /> and instagram to keep abreast <br /> of the latest news
              </p>
              <div>
                <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                  <i className="ri-facebook-box-fill"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                  <i className="ri-instagram-fill"></i>
                </a>
                {/* <a href="https://www.youtube.com/" target="_blank" className="footer__social">
                  <i className="ri-youtube-fill"></i>
                </a> */}
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

            {/* <div className="footer__data">
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
            </div> */}

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
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
