import React from 'react';

import Head from './Head';
import About from './About';
import Discover from './Discover';
import Gallery from './Gallery';
import Subscribe from './Subscribe';
import Partners from './Partners';
import Preloader from '../Preloader';

const Home = ({ hideFunction, hidePreload, preloadState }) => {

  return (
    <>
      {/* <Preloader preloadState={preloadState} /> */}

      <main  className="main" onLoad={hideFunction}>
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
    </>
  )
}

export default Home;
