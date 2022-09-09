import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import HubspotNewsletter from './HubspotNewsletter';

///////////////---STYLES---///////////////////
const modalDiv = 'fixed top-0 bottom-0 left-0 right-0 bg-opacity-80 h-full w-full bg-black text-textDark flex justify-center items-center overflow-auto';
const whiteContainer = 'absolute rounded-md bg-white flex flex-col justify-center items-center w-full sm:w-3/4 md:w-3/5 lg:w-3/4 xl:w-1/2 2xl:w-2/5 max-w-xl';
const closeX = 'absolute top-0 right-0 pt-2 pr-3 opacity-40 hover:opacity-100 cursor-pointe text-xl cursor-pointer';
///////////////---END STYLES---////////////////

interface NewsletterModalProps {
  sourcePage?: string;
}

///////////////---COMPONENT---////////////////
const NewsletterModal = (props: NewsletterModalProps) => {
  const { sourcePage } = props;
  const intl = useIntl();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal ? (document.body.style.overflow = `hidden`) : (document.body.style.overflow = `unset`);
  }, [showModal]);

  return (
    <>
      {sourcePage === 'footer' ? (
        <button
          className="mt-6 bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-wider  px-24 py-2 rounded-sm focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5"
          onClick={() => setShowModal(!showModal)}
        >
          {intl.formatMessage({ id: 'newsletter-cta' })}
        </button>
      ) : sourcePage === 'blog-template' ? (
        <button
          className={`bg-parityPink font-title text-lg md:text-xl text-white font-semibold opacity-90 py-1 mb-4 focus:outline-none hover:opacity-80 transition-transform transform hover:-translate-y-0.5 focus:bg-buttonRed sm:w-1/2 sm:ml-4`}
          onClick={() => setShowModal(!showModal)}
        >
          <div className="flex flex-row justify-between items-center">
            <div className="bg-black bg-opacity-10 py-1 px-3">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -5 24 24"
                width="24"
                height="24"
                preserveAspectRatio="xMinYMin"
              >
                <path d="M18.572.083L10.676 7.12a1 1 0 0 1-1.331 0L1.416.087A2 2 0 0 1 2 0h16a2 2 0 0 1 .572.083zm1.356 1.385c.047.17.072.348.072.532v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2c0-.185.025-.364.072-.534l7.942 7.148a3 3 0 0 0 3.992 0l7.922-7.146z"></path>
              </svg>
            </div>
            <div className="w-full">Subscribe to the newsletter</div>
          </div>
        </button>
      ) : sourcePage === 'about' ? (
        <p className="text-xs text-textDark py-10 md:py-4">
          or{' '}
          <a className="text-parityPink" onClick={() => setShowModal(!showModal)}>
            subscribe
          </a>{' '}
          to the newsletter
        </p>
      ) : sourcePage === 'contact' ? (
        <button
          className="bg-parityPink font-title text-lg text-white font-semibold opacity-90 tracking-wider mx-4 px-12 py-2 rounded-sm focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5 focus:bg-buttonRed"
          onClick={() => setShowModal(!showModal)}
        >
          {intl.formatMessage({ id: 'contact-page-footer-button' })}
        </button>
      ) : sourcePage === 'newsletter' ? (
        <button
          className="bg-parityPink font-title text-lg text-white font-semibold opacity-90 tracking-wider mx-4 px-12 py-2 rounded-sm focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5 focus:bg-buttonRed"
          onClick={() => setShowModal(!showModal)}
        >
          {intl.formatMessage({ id: 'newsletter-page-cta' })}
        </button>
      ) : null}

      {showModal ? (
        <div
          id="modal"
          className={modalDiv}
          onClick={(event: any) => {
            if (event.target.id === 'modal') {
              setShowModal(!showModal);
            }
          }}
        >
          <div className={whiteContainer}>
            <div
              className={closeX}
              onClick={event => {
                event.stopPropagation();
                setShowModal(!showModal);
              }}
            >
              x
            </div>
              <div className="w-full p-6 md:p-10">
                <HubspotNewsletter />
              </div>
          
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewsletterModal;
////////////---END-CONPONENT---///////////////
