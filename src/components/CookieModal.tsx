import React from 'react';

import { useState, useEffect } from 'react';
import { Dialog, Switch } from '@headlessui/react';

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
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="bg-opacity-80 bg-black fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded bg-white px-12 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
              className="absolute top-0 right-0 pt-2 pr-3 opacity-40 hover:opacity-100 cursor-pointe text-xl cursor-pointer"
            >
              x
            </button>
            <div className="max-w-sm mx-auto">
              <div className="">
                <Dialog.Title
                  as="h3"
                  className="text-3xl mt-4 mb-6 sm:mb-9 text-center text-base font-semibold text-textDark"
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

              <div className="mt-4 mb-4 sm:mt-6">
                <button
                  onClick={handleSave}
                  type="button"
                  className="font-semibold transition-transform transform hover:-translate-y-0.5 hover:cursor-pointer inline-flex w-full justify-center rounded bg-parityPink text-parityGray px-3 py-2 text-sm  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  SAVE
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export { CookieModal };
