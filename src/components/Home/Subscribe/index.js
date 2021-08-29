import React from 'react';

export default function Sybscribe() {
  return (
    <section className="subscribe" id='subscribe'>
      <div className="subscribe__bg section section__shadow-bottom">
        <div className="subscribe__container container">
          <h2 className="section__title subscribe__title">
            Subscribe Our <br/> Newsletter
          </h2>
          <p className="subscribe__description">Subscribe to our newsletter and receive the latest news from our company.
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
  )
};
