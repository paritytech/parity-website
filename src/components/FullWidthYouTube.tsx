import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

import { YoutubeEmbed } from './YoutubeEmbed';

interface FullWidthYouTubeProps {
  image: string;
  videoId: string;
}

export default function FullWidthYouTube(props: FullWidthYouTubeProps) {
  const { image, videoId } = props;
  const [showModal, setShowModal] = useState(false);
  const sectionBackground = {
    backgroundImage: `url('${image}')`,
    backgrdounRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <div>
      <div style={sectionBackground}>
        <div className="h-64 xl:h-96 w-auto flex justify-center items-center">
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
      {showModal && <YoutubeEmbed fullScreen closeModal={() => setShowModal(false)} id={videoId} />}
    </div>
  );
}
