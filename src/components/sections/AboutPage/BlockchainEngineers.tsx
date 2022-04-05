import React from 'react';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';

export default function BlockchainEngineers() {
  const intl = useIntl();

  return (
    <section>
      <div className="container">
        <div className="px-4 py-20 md:py-28 md:flex md:justify-between">
          <div className="md:w-2/3 md:max-w-xl text-textDark">
            <h3 className="font-normal text-2xl md:text-4xl">
              {intl.formatMessage({ id: 'about-page-team-stats-title' })}
            </h3>
            <p className="font-light text-base md:text-lg">
              {intl.formatMessage({ id: 'about-page-team-stats-description-one' })}
            </p>
            <p className="font-light text-base md:text-lg">
              {intl.formatMessage({ id: 'about-page-team-stats-description-two' })}
            </p>
            <p>
              <LocalizedLink className="no-underline text-parityPink hover:underline text-sm font-normal" to="/jobs/">
                {intl.formatMessage({ id: 'about-page-team-stats-description-cta' })}
              </LocalizedLink>
            </p>
          </div>
          <div className="md:w-1/3 text-textDark">
            <ul className="list-none text-sm pt-6 md:pt-0 pb-6">
              <li className="font-medium pb-1">{intl.formatMessage({ id: 'about-page-team-stats-office' })}</li>
              <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-office-berlin' })}</li>
              <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-office-london' })}</li>
              <li className="font-light pb-1">
                {intl.formatMessage({ id: 'about-page-team-stats-office-cambridge' })}
              </li>
              <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-office-lisbon' })}</li>
            </ul>
            <ul className="list-none text-sm">
              <li className="font-medium pb-1">{intl.formatMessage({ id: 'about-page-team-stats-facts' })}</li>
              <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-facts-one' })}</li>
              <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-facts-two' })}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
