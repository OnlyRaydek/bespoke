import React, { useState, useEffect } from 'react'
import classnames from 'classnames';

import logoSvgBlack from '../../assets/img/logo_svg_black.svg';

export default function Preloader({ preloadState }) {
  const [ loading, setLoading ] = useState(false);
  const [ loadingRemove, setLoadingRemove ] = useState(false);

  console.log(preloadState);
  console.log(loadingRemove);

  useEffect(() => {
    if (preloadState === true) {
      setTimeout(() => setLoading(true), 2000)
    }
  }, [preloadState]);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => setLoadingRemove(true), 2500)
    }
  }, [loading]);

  return (
    <div className={classnames(
      'preloader',
      {'preloader__hide': loading},
      {'preloader__remove': loadingRemove}
      )}
    >
      <img
        className={classnames(
          'preloader__image',
          'preloader__image-in',
        )}
        src={logoSvgBlack}
        alt='Preloading page logo'
      />
    </div>
  );
}