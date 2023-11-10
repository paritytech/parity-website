import React from 'react';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition, Switch } from '@headlessui/react';

import { useLocalStorage } from '../hooks/useLocalStorage.js';

import cx from 'classnames';

const toggles = [
  {
    required: true,
    label: 'Necessary',
    description: 'Essential for the basic functionality of a website.',
    key: 'necessary',
  },
  {
    required: false,
    label: 'Functional',
    description: 'Helps to enhance user experience by remembering user preferences and choices.',
    key: 'functional',
  },
  {
    required: false,
    label: 'Performance',
    description: 'Collects data on how users interact with a website to improve its performance and usability.',
    key: 'performance',
  },
  {
    required: false,
    label: 'Marketing',
    description:
      'Used for tracking user behavior and providing personalized content and advertisements based on their interests and browsing habits.',
    key: 'marketing',
  },
];

const Toggle = ({ label, description, onChange, checked, disabled = false }) => {
  return (
    <div className="flex align-middle">
      <Switch
        tabIndex={0}
        role="switch"
        aria-label="Enable/Disable"
        disabled={disabled}
        checked={checked}
        onClick={onChange}
        className={cx(
          'relative mt-1 mr-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer  border-2 border-transparent rounded transition-colors duration-200 ease-in-out  focus:ring-2 focus:ring-purple-100/80 focus:ring-offset-2',
          checked === true && !disabled ? 'bg-textDark' : 'bg-gray-200',
          { 'cursor-default': disabled }
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={cx(
            checked === true ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform  bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <div>
        <span className="font-bold">{label}</span>
        <p className="mb-1 text-xs">{description}</p>
      </div>
    </div>
  );
};

const CookieModal = ({ isOpen, closeModal }) => {
  const [cookieSettings, setCookieSettings] = useLocalStorage('cookie-settings');

  const defaultSettings = {
    necessary: true,
    functional: false,
    performance: false,
    marketing: false,
  };

  const [toggleValues, setToggleValues] = useState(cookieSettings === null ? defaultSettings : cookieSettings);

  useEffect(() => {
    cookieSettings === null
      ? setToggleValues({
          necessary: true,
          functional: false,
          performance: false,
          marketing: false,
        })
      : setToggleValues(cookieSettings);
  }, [isOpen, cookieSettings]);

  const handleToggleChange = toggleName => {
    setToggleValues(prevValues => ({
      ...prevValues,
      [toggleName]: !prevValues[toggleName],
    }));
  };

  const handleSave = () => {
    setCookieSettings(toggleValues);
    closeModal();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog onClose={closeModal}>
        <div className="bg-opacity-80 bg-black fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                  className="z-20 flex items-center justify-end absolute top-2 right-2"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.2426 6.34311L6.34309 16.2426C5.95257 16.6331 5.95257 17.2663 6.34309 17.6568C6.73362 18.0473 7.36678 18.0473 7.75731 17.6568L17.6568 7.75732C18.0473 7.36679 18.0473 6.73363 17.6568 6.34311C17.2663 5.95258 16.6331 5.95258 16.2426 6.34311Z"
                      fill="#666"
                    />
                    <path
                      d="M17.6568 16.2426L7.75734 6.34309C7.36681 5.95257 6.73365 5.95257 6.34313 6.34309C5.9526 6.73362 5.9526 7.36678 6.34313 7.75731L16.2426 17.6568C16.6331 18.0473 17.2663 18.0473 17.6568 17.6568C18.0474 17.2663 18.0474 16.6331 17.6568 16.2426Z"
                      fill="#666"
                    />
                  </svg>
                </button>
                <div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="mr-6 text-3xl mb-3 sm:mb-5 text-center text-base font-semibold text-textDark"
                    >
                      Cookie Settings
                    </Dialog.Title>
                    <div className="mt-2">
                      {toggles.map(({ label, description, required, key }) => {
                        return (
                          <div key={label}>
                            <Toggle
                              required={required}
                              description={description}
                              label={label}
                              onChange={() => handleToggleChange(key)}
                              checked={toggleValues[key]}
                              disabled={required === true}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={handleSave}
                    type="button"
                    className="transition-transform transform hover:-translate-y-0.5 hover:cursor-pointer inline-flex w-full justify-center rounded bg-parityPink text-parityGray px-3 py-2 text-sm  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    SAVE
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { CookieModal };
