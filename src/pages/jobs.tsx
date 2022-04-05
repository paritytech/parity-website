import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Button from '../components/Button';
import Social from '../components/Social';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import TransparentButton from '../components/TransparentButton';
import JobBoard from '../components/JobBoard';
import GavQoute from '../components/sections/TechnologyPage/GavQoute';

export default function JobsPage() {
  const intl = useIntl();

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'jobs-page-seo' })} />
      <section className="block h-hero min-h-heroMin">
        <div className="absolute h-hero min-h-heroMin z-0 w-full top-0 left-0 bg-hero-rustJobs bg-cover bg-center"></div>
        <div className="container relative text-center text-white h-5/6 flex flex-col justify-center">
          <h3 className="text-white font-normal md:text-5xl md:mb-8">
            {intl.formatMessage({ id: 'jobs-page-hero-title' })}
          </h3>
          <h4 className="text-white font-normal leading-relaxed px-4 mx-auto mb-8 text-lg md:text-2xl md:px-24 max-w-3xl">
            {intl.formatMessage({ id: 'jobs-page-hero-sub-title' })}
          </h4>
          <TransparentButton extraClass="mb-10 md:mb-4" link="/jobs/#jobboard">
            {intl.formatMessage({ id: 'jobs-page-hero-cta' })}
          </TransparentButton>
          <p className="font-normal text-xs">
            {intl.formatMessage({ id: 'about-page-hero-sub-cta-1' })}&nbsp;
            <LocalizedLink className="font-bold" to="/contact/">
              {intl.formatMessage({ id: 'about-page-hero-sub-cta-2' })}
            </LocalizedLink>
            &nbsp;{intl.formatMessage({ id: 'about-page-hero-sub-cta-3' })}
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="px-4 pb-20 md:flex md:justify-between">
            <div className="md:w-2/3 md:max-w-xl text-textDark">
              <h3 className="font-normal text-2xl md:text-4xl">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-title' })}
              </h3>
              <p className="font-light text-lg md:text-xl">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-description' })}
              </p>
              <hr className="border-1 border-parityPink w-12" />
              <h5 className="font-semibold tracking-normal text-xl mb-3">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-one-title' })}
              </h5>
              <p className="text-sm tracking-wide text-textLight">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-one-description' })}
              </p>
              <h5 className="font-semibold tracking-normal text-xl mb-3">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-two-title' })}
              </h5>
              <p className="text-sm tracking-wide text-textLight">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-two-description' })}
              </p>
              <h5 className="font-semibold tracking-normal text-xl mb-3">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-three-title' })}
              </h5>
              <p className="text-sm tracking-wide text-textLight">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-three-description' })}
              </p>
              <p className="py-4">
                <LocalizedLink
                  className="no-underline text-parityPink hover:underline text-sm font-normal"
                  to="/jobs/#jobboard"
                >
                  {intl.formatMessage({ id: 'rust-jobs-page-developers-cta' })}
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
      <GavQoute page="jobs" />
      <section id="jobboard" className="pb-8">
        <div className="container">
          <div className="text-center py-16">
            <h3 className="md:text-5xl">{intl.formatMessage({ id: 'jobs-page-board-title' })}</h3>
          </div>
          <p className="text-gray-400 mx-4">* We are based in Berlin but remote work is possible</p>
          <JobBoard />
        </div>
      </section>
      <section className="border-t h-full">
        <div className="container">
          <div className="flex flex-col items-center pt-12 md:pt-28 md:pb-16 text-center">
            <h4 className="text-2xl md:text-4xl font-normal mb-10">
              {intl.formatMessage({ id: 'jobs-page-footer-cta-title' })}
            </h4>
            <Button link="/blog" extraClass="">
              {intl.formatMessage({ id: 'jobs-page-footer-cta-button-text' })}
            </Button>
            <p className="text-xs text-textDark py-10 md:py-4">
              {intl.formatMessage({ id: 'jobs-page-footer-cta-text-one' })}{' '}
              <LocalizedLink className="text-parityPink" to="/contact">
                {intl.formatMessage({ id: 'jobs-page-footer-cta-text-two' })}
              </LocalizedLink>
            </p>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
