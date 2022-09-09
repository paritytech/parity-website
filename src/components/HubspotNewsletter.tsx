import React from 'react';
import HubspotForm from 'react-hubspot-form';

import LoadingAnimation from './LoadingAnimation';

export default function HubspotNewsletter() {
  return (
    <>
      <div id="hubspotForm">
        <HubspotForm
          portalId="7592558"
          formId="5ef203d8-38ac-4a13-8b02-d737c6f69ec7"
          onSubmit={() => console.log('Submit!')}
          loading={
            <div className="py-40 md:py-40 md:px-10 px-mb-10">
              <LoadingAnimation />
              <p className="mt-20 text-xs text-center text-gray-400 font-sans">
                If the content does not appear correctly, <br />
                follow this{' '}
                <a
                  href="https://share.hsforms.com/1XvID2DisShOLAtc3xvaexw4iqge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  link
                </a>
                .
              </p>
            </div>
          }
        />
      </div>
    </>
  );
}
