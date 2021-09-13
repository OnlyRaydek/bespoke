import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import greenLivingRoom from '../../../assets/img/green-living-room-ideas.jpg';


export default function Head({ hidePreload }) {

  /*==================== TYPE EFFECT ====================*/
  const [ typeState, setTypeState ] = useState(true);

  // useEffect(() => {

  // }, []);

  const discoverText = [
    'Discover your interier'
  ];

  const exploreText = [
    'Explore The',
    'Best Beautiful',
    'Design'
  ];

  function typeText(array, classname, time) {
    if (typeState === true) {
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
  // console.log(textState);

  // const srcString = `That's the text I'm going to print out`;

  // const [{content,carriage}, setContent] = useState({content:'',carriage:0});

  // useEffect(() => {
  //   if(carriage == srcString.length) return
  //   const delay = setTimeout(() => {
  //     setContent({content:content+srcString[carriage], carriage: carriage+1})
  //     clearTimeout(delay)
  //   }, 0|(Math.random()*200+50))
  // }, [content]);

  return (
    <section className="home section__shadow-bottom" id="home">
      <div className="home__img" ></div>

      <div className="home__container container grid">
        <div className="home__data">
          <span
            className="home__data-subtitle discover-text"
            onLoad={hidePreload ? typeText(discoverText, 'discover-text', 1800) : null}
          >
          </span>

          {/* <span>{content}<span className="cursor">|</span></span> */}
          <h2
            className="home__data-title explore-text"
            onLoad={hidePreload ? typeText(exploreText, 'explore-text', 3000) : null}
          >
          </h2>
        </div>

        <div className="home__data-button">
          <Link to="/works/" className="button">Explore</Link>
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
            <Link to="/works/" className="button button--flex button--link home__info-button">
                More <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="home__info-overlay">
            <img src={greenLivingRoom} alt="" className="home__info-img" />
          </div>
        </div>
      </div>
    </section>
  )
};
