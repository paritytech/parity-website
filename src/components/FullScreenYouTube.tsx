import React, { useState } from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

import { YoutubeEmbed } from './YoutubeEmbed';

interface FullScreenYouTubeProps {
  image: string;
  name?: string;
  title?: string;
  link?: string;
  videoId: string;
}

export default function FullScreenYouTube(props: FullScreenYouTubeProps) {
  const { image, name, title, link, videoId } = props;
  const [showModal, setShowModal] = useState(false);
  const sectionBackground = {
    backgroundImage: `url('${image}')`,
    backgrdounRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <div className="p-2">
      <div style={sectionBackground}>
        <div className="flex justify-center items-center h-64 md:w-84">
          <div
            className="bg-white h-12 w-12 rounded-full flex justify-center items-center cursor-pointer transition-all transform duration-500 hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => setShowModal(!showModal)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
              <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#000000" />
            </svg>
          </div>
        </div>
      </div>
      <div className="my-4">
        {link === 'none' ? (
          <p className="text-textLight font-bold mb-0">{name}</p>
        ) : (
          <LocalizedLink
            to={link}
            className="font-normal text-textDark text-lg mb-0 no-underline hover:text-parityPink hover:underline"
          >
            {name}
          </LocalizedLink>
        )}
        <p className="text-sm text-textDark mt-1">{title}</p>
      </div>
      {showModal && <YoutubeEmbed fullScreen closeModal={() => setShowModal(false)} id={videoId} />}
    </div>
  );
}
