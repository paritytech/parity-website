import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

import cx from 'classnames';

const YoutubeEmbed = ({ id, title, thumbnail, fullScreen = false, closeModal }) => {
  const [value, setValue] = useLocalStorage('cookie-settings');

  const [isThumbnailVisible, setIsThumbnailVisible] = useState(fullScreen ? false : true);

  const isValueInit = Boolean(value);
  const cookiesEnabled = isValueInit && Object.values(value).every(option => option === true);

  return (
    <div
      onClick={fullScreen && closeModal}
      className={cx([
        'h-96 w-full',
        {
          'fixed top-0 bottom-0 left-0 right-0 z-10 bg-opacity-80 h-full bg-black text-textDark flex justify-center items-center':
            fullScreen,
        },
      ])}
    >
      {isThumbnailVisible && (
        <CustomThumbnail id={id} title={title} thumbnail={thumbnail} onClick={() => setIsThumbnailVisible(false)} />
      )}

      {!isThumbnailVisible && (
        <div
          className={cx([
            'border-1 rounded-sm',
            { 'h-full': !fullScreen },
            {
              'w-full md:w-2/3 h-1/3 md:h-2/3 bg-black text-textDark flex justify-center items-center': fullScreen,
            },
          ])}
        >
          {cookiesEnabled && (
            <iframe
              className="h-full w-full border-1 border-currrent rounded-sm"
              title={title}
              allow="fullscreen; encrypted-media accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              frameBorder="0"
              src={`https://www.youtube-nocookie.com/embed/${id}?&mute=1&autoplay=1&autopause=0`}
            ></iframe>
          )}

          {!cookiesEnabled && (
            <CookieOverlay
              id={id}
              title={title}
              acceptAll={() =>
                setValue({
                  necessary: true,
                  functional: true,
                  performance: true,
                  marketing: true,
                })
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

const CustomThumbnail = ({ title, thumbnail, onClick }) => {
  return (
    <div onClick={onClick} className="relative h-full hover:cursor-pointer">
      <img className="h-full w-full object-cover" src={thumbnail} alt={title} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="bg-white rounded-full flex justify-center items-center cursor-pointer transition-all transform duration-500 hover:-translate-y-0.5 hover:shadow-lg h-16 w-16"
          role="button"
          alt={title}
          onClick={onClick}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
            <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" stroke="#444" fill="#666666" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const CookieOverlay = ({ id, acceptAll, fullScreen = false }) => {
  return (
    <div
      onClick={e => e.stopPropagation()}
      className={cx([
        'rounded-sm w-full bg-textDark',
        {
          'h-full': !fullScreen,
        },
        {
          'md:w-2/3 h-1/3 md:h-2/3': fullScreen,
        },
      ])}
    >
      <h5 className="text-2xl md:text-3xl mt-8 mb-4 text-center font-heading text-white sm:mt-4 relative top-1/4 md:top-1/3">
        You must enable all cookie types to play this video
      </h5>
      <div className="text-white mt-4 flex justify-center items-center flex-row space-x-4 relative top-1/4 md:top-1/3">
        <button
          className="transition-transform transform hover:-translate-y-0.5 font-bold border-1 rounded bg-parityPink mt-4 !mb-1 py-2 px-4 md:px-24"
          onClick={acceptAll}
        >
          ACCEPT ALL
        </button>
        <button className="transition-transform transform hover:-translate-y-0.5 font-bold border-1 rounded bg-parityPink mt-4 py-2 px-4 md:px-16">
          <a className="no-underline" target="_blank no-referrer nofollow" href={`https://youtube.com/watch?v=${id}`}>
            WATCH ON YOUTUBE
          </a>
        </button>
      </div>
    </div>
  );
};

export { YoutubeEmbed };
