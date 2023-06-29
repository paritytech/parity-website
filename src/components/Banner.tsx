import React, { useState, useEffect } from 'react';
import bannerData from '../../content/banner/banner.json';

export default function Banner() {
  const [currentPath, setCurrentPath] = useState(' ');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [currentPath]);

  return (
    <>
      {bannerData.active && bannerData.pages.includes(currentPath) && (
        <div className="bg-textDark text-parityWhite tracking-wide text-center text-sm px-6 py-3">
          <p className="mb-0">
            {bannerData.text}
            {` `}
            <a href={bannerData.url} target="_blank" rel="noreferrer">
              {bannerData['link-text']}
            </a>{' '}
            {bannerData.emoji}
          </p>
        </div>
      )}
    </>
  );
}
