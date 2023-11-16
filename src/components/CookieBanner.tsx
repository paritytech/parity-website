import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { useModal } from '../hooks/useModal.js';
import { CookieModal } from './CookieModal';

export default function CookieBanner() {
  const [, setCookieSettings] = useLocalStorage('cookie-settings');
  const { isOpen: isCookieModalOpen, openModal: openCookieModal, closeModal: closeCookieModal } = useModal();

  return (
    <div className="z-10 fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-4 ring-1 ring-parityGray md:flex-row md:items-center lg:px-8">
      <p className="lg:max-w-6xl text-sm text-textDark mt-4">
        We use cookies on this site to enhance your user experience. By clicking Accept all, you agree to the use of all
        cookies. If you do not want to allow all types of cookies, click on Manage. If you only want to allow the
        technically necessary cookies, click on Reject all. For further information, please refer to our{' '}
        <a href="/privacy" className="transition-transform transform hover:-translate-y-0.5 font-semibold textDark">
          privacy policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          onClick={() =>
            setCookieSettings({
              necessary: true,
              functional: true,
              performance: true,
              marketing: true,
            })
          }
          type="button"
          className="transition-transform transform hover:-translate-y-0.5 rounded-sm bg-textDark px-8 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Accept all
        </button>
        <button
          onClick={() =>
            setCookieSettings({ necessary: true, functional: false, performance: false, marketing: false })
          }
          type="button"
          className="transition-transform transform hover:-translate-y-0.5 rounded-sm bg-textDark px-8 py-2 text-sm font-semibold text-white"
        >
          Reject all
        </button>
        <button
          className="transition-transform transform hover:-translate-y-0.5 text-sm font-semibold text-textDark "
          onClick={openCookieModal}
        >
          Manage
        </button>
      </div>
      <CookieModal isOpen={isCookieModalOpen} closeModal={closeCookieModal} />
    </div>
  );
}
