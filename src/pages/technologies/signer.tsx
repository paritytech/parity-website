import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Layout from '../../components/layouts/Layout';
import SEO from '../../components/layouts/SEO';
import { StaticImage } from 'gatsby-plugin-image';
import Social from '../../components/Social';
import { LocalizedLink } from 'gatsby-theme-i18n';
import signerLogo from '../../images/signer/logo-parity-signer-light.svg';
import signerApple from '../../images/signer/button-app-store-light.svg';
import signerAppleDark from '../../images/signer/button-app-store.svg';
import signerAndroid from '../../images/signer/button-google-play-light.svg';
import signerAndroidDark from '../../images/signer/button-google-play.svg';

interface ParitySignerProps {
  data: any;
}

export default function ParitySigner({ data }: ParitySignerProps) {
  const intl = useIntl();
  const githubSigner = 'https://github.com/paritytech/parity-signer';

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'signer-page-seo' })} />
      <section className="bg-signerHeroBg -mt-24 xl:-mt-32 md:-mb-12">
        <div>
          <div className="container max-w-5xl pt-40 md:pt-24 pb-20 md:pb-24 grid md:grid-cols-5">
            <div className="hidden md:block pb-10 md:py-20 px-20 sm:px-40 md:px-0 md:col-span-2 md:order-2 w-full self-center">
              <StaticImage
                className="md:max-w-md mx-auto"
                src="../../images/signer/parity-signer-phone-0.png"
                alt="Parity Signer Phone Image"
                placeholder="none"
              />
            </div>
            <div className="md:col-span-3 md:order-1 pb-16 px-8 self-center">
              <img className="md:mx-0 w-64 h-auto py-4" src={signerLogo} alt="Parity Signer Logo" />
              <h3 className="text-white font-light md:text-left text-5xl lg:text-6xl py-4 max-w-2xl">
                {intl.formatMessage({ id: 'signer-page-title' })}
              </h3>
              <div className="flex md:flex-row gap-2 items-center pt-8">
                <a href="https://itunes.apple.com/us/app/parity-signer/id1218174838" target="_blank" rel="noreferrer">
                  <img
                    className="w-auto h-12 opacity-80 hover:opacity-100"
                    src={signerApple}
                    alt="Parity Signer Apple iTunes"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=io.parity.signer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-auto h-12 opacity-80 hover:opacity-100"
                    src={signerAndroid}
                    alt="Parity Signer Google Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityPink md:-mt-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:max-w-screen-md md:mx-auto py-4 md:py-10">
            <div className="flex flex-col items-center md:flex-row md:items-center py-4">
              <a className="mb-4 md:mb-0" href={githubSigner} target="_blank" rel="noreferrer">
                <svg
                  className="w-auto h-12"
                  fill="white"
                  role="img"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="7 7 20 20"
                >
                  <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
                </svg>
              </a>
              <p className="font-normal text-sm text-parityGray text-center md:text-left mx-8 mb-0">
                {intl.formatMessage({ id: 'signer-page-github-text' })}{' '}
                <a href={githubSigner} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'signer-page-github-link-text' })}
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center py-4 md:border-l md:pl-12">
              <a className="mb-4 md:mb-0" href={data.site.siteMetadata.element} target="_blank" rel="noreferrer">
                <svg className="h-12 w-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.28 10.88C25.28 9.28942 26.5694 8 28.16 8C38.7639 8 47.36 16.5961 47.36 27.2C47.36 28.7906 46.0706 30.08 44.48 30.08C42.8894 30.08 41.6 28.7906 41.6 27.2C41.6 19.7773 35.5827 13.76 28.16 13.76C26.5694 13.76 25.28 12.4706 25.28 10.88Z"
                    fill="white"
                  />
                  <path
                    d="M38.72 53.12C38.72 54.7106 37.4306 56 35.84 56C25.2361 56 16.64 47.4039 16.64 36.8C16.64 35.2094 17.9294 33.92 19.52 33.92C21.1105 33.92 22.4 35.2094 22.4 36.8C22.4 44.2227 28.4173 50.24 35.84 50.24C37.4306 50.24 38.72 51.5294 38.72 53.12Z"
                    fill="white"
                  />
                  <path
                    d="M10.88 38.72C9.28942 38.72 8 37.4306 8 35.84C8 25.2361 16.5961 16.64 27.2 16.64C28.7906 16.64 30.08 17.9294 30.08 19.52C30.08 21.1105 28.7906 22.4 27.2 22.4C19.7773 22.4 13.76 28.4173 13.76 35.84C13.76 37.4306 12.4706 38.72 10.88 38.72Z"
                    fill="white"
                  />
                  <path
                    d="M53.12 25.28C54.7106 25.28 56 26.5694 56 28.16C56 38.7639 47.4039 47.36 36.8 47.36C35.2094 47.36 33.92 46.0706 33.92 44.48C33.92 42.8895 35.2094 41.6 36.8 41.6C44.2227 41.6 50.24 35.5827 50.24 28.16C50.24 26.5694 51.5294 25.28 53.12 25.28Z"
                    fill="white"
                  />
                </svg>
              </a>
              <p className="font-normal text-sm text-parityGray text-center md:text-left mx-8 mb-0">
                {intl.formatMessage({ id: 'signer-page-element-text' })}{' '}
                <a href={data.site.siteMetadata.element} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'signer-page-element-link-text' })}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-textDark border-b border-parityBorder">
        <div className="md:py-10">
          <div className="text-gray-200 text-center mx-6 py-16">
            <img className="h-12 w-auto mx-auto mb-10" src={signerLogo} alt="Parity Signer Logo" />
            <h3 className="text-gray-200 font-normal md:text-5xl max-w-screen-lg mx-auto">
              {intl.formatMessage({ id: 'signer-page-into-title' })}
            </h3>
            <p className="text-base max-w-screen-md mx-auto md:text-lg py-4">
              {intl.formatMessage({ id: 'signer-page-into-description' })}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-textDark border-b border-parityBoder h-full">
        <div className="container">
          <div className="py-20 flex flex-col-reverse md:flex-row mx-auto items-center">
            <div className="px-5 w-full md:w-1/2 h-auto max-w-screen-sm mx-auto">
              <StaticImage
                className="md:max-w-md mx-auto"
                src="../../images/signer/parity-signer-phone-1.png"
                alt="Parity Signer Phone Image"
                placeholder="none"
              />
            </div>
            <div className="text-parityWhite mx-4 md:w-1/2 lg:pt-20">
              <h3 className="text-parityWhite font-normal max-w-md">
                {intl.formatMessage({ id: 'signer-page-section-one-title' })}
              </h3>
              <p className="text-parityWhite text-base md:text-lg max-w-md">
                {intl.formatMessage({ id: 'signer-page-section-one-description' })}
              </p>
              <hr className="border-1 border-parityPink w-12" />
              <ul className="list-none">
                <li className="text-parityWhite text-base md:text-lg max-w-md font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'signer-page-section-one-bullte-one' })}
                </li>
                <li className="text-parityWhite text-base md:text-lg max-w-md font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'signer-page-section-one-bullte-two' })}
                </li>
                <li className="text-parityWhite text-base md:text-lg max-w-md font-light">
                  <span>&mdash; </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({ id: 'signer-page-section-one-bullte-three' }),
                    }}
                  ></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityWhite h-full">
        <div className="container">
          <div className="pt-20 flex flex-col md:flex-row-reverse mx-auto">
            <div className="px-5 pb-10 md:pb-0 w-full md:w-1/2 h-auto max-w-screen-sm mx-auto">
              <StaticImage
                className="md:max-w-md mx-auto"
                src="../../images/signer/parity-signer-phone-2.png"
                alt="Parity Signer Phone Image"
                placeholder="none"
              />
            </div>
            <div className="text-textDark mx-4 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div>
                <h3 className="font-normal  max-w-lg">{intl.formatMessage({ id: 'signer-page-section-two-title' })}</h3>
                <p
                  className="text-base md:text-lg max-w-lg"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: 'signer-page-section-two-description' }),
                  }}
                ></p>
                <hr className="border-1 border-parityPink w-12" />
                <ul className="list-none">
                  <li className="text-base md:text-lg max-w-lg font-light">
                    <span>&mdash; </span>
                    {intl.formatMessage({ id: 'signer-page-section-two-bullte-one' })}
                  </li>
                  <li className="text-base md:text-lg max-w-md font-light">
                    <span>&mdash; </span>
                    {intl.formatMessage({ id: 'signer-page-section-two-bullte-two' })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityWhite h-full">
        <div className="container">
          <div className="pt-20 flex flex-col md:flex-row mx-auto">
            <div className="px-5 pb-10 md:pb-0 w-full md:w-1/2 h-auto max-w-screen-sm mx-auto">
              <StaticImage
                className="md:max-w-md mx-auto"
                src="../../images/signer/parity-signer-phone-3.png"
                alt="Parity Signer Phone Image"
                placeholder="none"
              />
            </div>
            <div className="text-textDark mx-4 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div>
                <h3 className="font-normal  max-w-lg">
                  {intl.formatMessage({ id: 'signer-page-section-three-title' })}
                </h3>
                <p className="text-base md:text-lg max-w-lg">
                  {intl.formatMessage({ id: 'signer-page-section-three-description' })}
                </p>
                <hr className="border-1 border-parityPink w-12" />
                <ul className="list-none">
                  <li className="md:text-lg max-w-lg font-light">
                    <span>&mdash; </span>
                    {intl.formatMessage({ id: 'signer-page-section-three-bullte-one' })}
                  </li>
                  <li className="md:text-lg max-w-md font-light">
                    <span>&mdash; </span>
                    {intl.formatMessage({ id: 'signer-page-section-three-bullte-two' })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityWhite h-full border-b border-parityBoder">
        <div className="container">
          <div className="py-20 flex flex-col md:flex-row-reverse mx-auto">
            <div className="px-10 pb-10 md:pb-0 w-full md:w-1/2 max-w-screen-sm mx-auto">
              <StaticImage
                className="md:max-w-md mx-auto"
                src="../../images/signer/parity-signer-phone-4.png"
                alt="Parity Signer Phone Image"
                placeholder="none"
              />
            </div>
            <div className="text-textDark mx-4 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div>
                <h3 className="font-normal  max-w-lg">
                  {intl.formatMessage({ id: 'signer-page-section-four-title' })}
                </h3>
                <p className="text-base md:text-lg max-w-lg">
                  {intl.formatMessage({ id: 'signer-page-section-four-description' })}
                </p>
                <hr className="border-1 border-parityPink w-12" />
                <ul className="list-none">
                  <li className="text-base md:text-lg max-w-lg font-light">
                    <span>&mdash; </span>
                    {intl.formatMessage({ id: 'signer-page-section-four-bullte-one' })}
                  </li>
                  <li className="text-base md:text-lg max-w-md font-light">
                    <span>&mdash; </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({ id: 'signer-page-section-four-bullte-two' }),
                      }}
                    ></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-hero-pattern-dark bg-cover bg-center h-full">
        <div className="container">
          <div className="flex flex-col items-center pt-24 pb-16 text-center">
            <h4 className="font-normal text-2xl md:text-3xl mb-8">
              {intl.formatMessage({ id: 'signer-page-dowbload-section-title' })}
            </h4>
            <p
              className="text-base md:text-lg max-w-lg mx-4"
              dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'signer-page-dowbload-section-warning' }) }}
            ></p>
            <div className="flex flex-col sm:flex-row items-center pt-8">
              <a href="https://itunes.apple.com/us/app/parity-signer/id1218174838" target="_blank" rel="noreferrer">
                <img
                  className="w-auto h-16 mx-1 opacity-80 hover:opacity-100"
                  src={signerAppleDark}
                  alt="Parity Signer Apple iTunes"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=io.parity.signer" target="_blank" rel="noreferrer">
                <img
                  className="w-auto h-16 mx-1 opacity-80 hover:opacity-100 md:pl-8"
                  src={signerAndroidDark}
                  alt="Parity Signer Google Play"
                />
              </a>
            </div>
            <p className="font-normal text-xs py-6">
              {intl.formatMessage({ id: 'signer-page-dowbload-section-small-text-one' })}{' '}
              <LocalizedLink className="text-parityPink" to="/signer-eula">
                {intl.formatMessage({ id: 'signer-page-dowbload-section-small-text-two' })}
              </LocalizedLink>
            </p>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        element
        github
      }
    }
  }
`;
