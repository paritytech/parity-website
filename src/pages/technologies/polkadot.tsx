import React from 'react';
import Layout from '../../components/layouts/Layout';
import Button from '../../components/Button';
import { useIntl } from 'react-intl';
import polkadotLogo from '../../images/polkadot_logo_horizontal_pink_black.svg';
import Social from '../../components/Social';
import SEO from '../../components/layouts/SEO';

export default function PolkadotPage() {
  const intl = useIntl();

  return (
    <Layout theme="">
      <SEO title={intl.formatMessage({ id: 'polkadot-page-seo' })} />
      <section className="md:bg-hero-pattern bg-cover bg-center bg-fixed -mt-24 xl:-mt-36 md:-mb-32">
        <div className="md:h-screen md:min-h-heroMinLg">
          <div className="container h-full text-center max-w-4xl pt-52 md:pt-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:items-center md:w-2/3">
            <img className="mx-auto w-44 h-auto py-4" src={polkadotLogo} alt="Polkadot Logo" />
            <h3 className="font-light md:text-5xl lg:text-6xl py-4">
              {intl.formatMessage({ id: 'polkadot-page-hero-title' })}
            </h3>
            <Button extraClass=" " link="https://polkadot.network/">
              {intl.formatMessage({ id: 'polkadot-page-hero-cta' })}
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-textDark">
        <div className="container">
          <div className="text-gray-300 px-8 lg:px-0 py-24 lg:py-32 lg:flex lg:justify-between">
            <div className="lg:w-1/2">
              <h4 className="text-gray-300 font-normal text-3xl md:text-5xl leading-snug mb-6 lg:max-w-lg">
                {intl.formatMessage({ id: 'polkadot-page-intro-title' })}
              </h4>
            </div>
            <div className="text-lg lg:w-1/2 lg:text-xl tracking-wide">
              <p className="lg:pb-4">{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-one' })}</p>
              <p className="lg:pb-4">{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-two' })}</p>
              <p className="lg:pb-4">{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-three' })}</p>
              <p className="lg:pb-4">{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-four' })}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
        <div className="container pt-8 pb-16 md:pt-16 md:pb-20 flex flex-col items-center text-center ">
          <div className="px-4 max-w-3xl py-8">
            <h3 className="font-normal text-3xl md:text-5xl md:mb-10 ">
              {intl.formatMessage({ id: 'polkadot-page-cta-title' })}
            </h3>
            <Button extraClass="" link="https://polkadot.network/">
              {intl.formatMessage({ id: 'polkadot-page-cta' })}
            </Button>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
