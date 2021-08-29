import React from 'react';

import sponsors1 from '../../../assets/img/sponsors1.png';
import sponsors2 from '../../../assets/img/sponsors2.png';
import sponsors3 from '../../../assets/img/sponsors3.png';
import sponsors4 from '../../../assets/img/sponsors4.png';
import sponsors5 from '../../../assets/img/sponsors5.png';

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners__bg section">
        <h2 className="partners__title">Our Partners</h2>

        <div className="partners__container container grid">
          <div className="partners__content">
            <img src={sponsors1} alt="" className="partners__img" />
          </div>
          <div className="partners__content">
            <img src={sponsors2} alt="" className="partners__img" />
          </div>
          <div className="partners__content">
            <img src={sponsors3} alt="" className="partners__img" />
          </div>
          <div className="partners__content">
            <img src={sponsors4} alt="" className="partners__img" />
          </div>
          <div className="partners__content">
            <img src={sponsors5} alt="" className="partners__img" />
          </div>
        </div>
      </div>
    </section>
  )
};

