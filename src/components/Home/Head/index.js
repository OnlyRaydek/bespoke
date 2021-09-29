import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

import greenLivingRoom from '../../../assets/img/green-living-room-ideas.jpg';

export default function Head({ hidePreload }) {
  console.log(hidePreload);

  return (
    <section className="home section__shadow-bottom" id="home">
      <div className="home__img" ></div>

      <div className="home__container container grid">
        <div className="home__data">
          {/* <div className="home__data-subtitle">
            {hidePreload
              ? <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(2000)
                      .changeDelay(75)
                      .typeString('Discover your interier!')
                      .start();
                  }}
                />
              : null
            }
          </div> */}

          <h2
            className="home__data-title"
          >
            {hidePreload
              ? <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(2500)
                      .changeDelay(75)
                      .typeString('Explore The \nBest Beautiful \nDesign')
                      .start();
                  }}
                />
              : null
            }
          </h2>

        </div>

        <div className="home__data-button">
          <Link to="/works/" className="button">Explore</Link>
        </div>

        <div className="home__social">
          <a
            href="https://www.facebook.com/Bespoke.home.textile"
            target="_blank"
            className="home__social-link"
          >
            <i className="ri-facebook-box-fill"></i>
          </a>

          <a
            href="https://www.instagram.com/bespoke_home_textile"
            target="_blank"
            className="home__social-link"
          >
            <i className="ri-instagram-fill"></i>
          </a>
        </div>

        <Link to="/works/" className="home__info">
          <div>
            <span className="home__info-title">Explore works</span>
            <div className="button button--flex button--link home__info-button">
                More <i className="ri-arrow-right-line"></i>
            </div>
          </div>

          <div className="home__info-overlay">
            <img src={greenLivingRoom} alt="" className="home__info-img" />
          </div>
        </Link>
      </div>
    </section>
  )
};
