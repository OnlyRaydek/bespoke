import React, { useEffect, useState } from 'react';

import greenLivingRoom from '../../../assets/img/green-living-room-ideas.jpg';


export default function Head({ hidePreload }) {

  /*==================== TYPE EFFECT ====================*/
  const [ typeState, setTypeState ] = useState(false);

  const discoverText = [
    'Discover your interier'
  ];
  const exploreText = [
    'Explore The',
    'Best Beautiful',
    'Design'
  ];

  function typeText(array, classname, time) {
    if (typeState !== true) {
      setTypeState(true);
      setTimeout(() => {
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
            }, 50);
          }

          typeLine();
        }
      }, time)
    }
  }

  return (
    <section className="home section__shadow-bottom" id="home">
      <div className="home__img" ></div>

      <div className="home__container container grid">
        <div className="home__data">
          <span
            className="home__data-subtitle discover-text"
            onLoad={hidePreload ? typeText(discoverText, 'discover-text', 1900) : null}
          >
          </span>
          <h2
            className="home__data-title explore-text"
            onLoad={hidePreload ? typeText(exploreText, 'explore-text', 3000) : null}
          >
          </h2>
          {/* <a href="#" className="home__data-button button">Explore</a> */}
        </div>
        <div className="home__data-button">
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
  )
};
