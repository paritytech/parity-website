import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Button from '../../Button';
import TechCard from '../../TechCard';
import { useIntl } from 'react-intl';

export default function HeroPattern() {
  const intl = useIntl();
  const images = useStaticQuery(graphql`
    {
      substrate: file(relativePath: { eq: "substrate-logo-dark.svg" }) {
        id
        publicURL
      }
      polkadot: file(relativePath: { eq: "polkadot_token_polkadot_token_white.svg" }) {
        id
        publicURL
      }
      signer: file(relativePath: { eq: "icon-parity-signer-light.png" }) {
        id
        publicURL
      }
      github: file(relativePath: { eq: "github-red.png" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern-2 bg-cover bg-center -mt-32 md:mt-0">
      <div className="h-full">
        <div className="container h-full text-center pt-40 md:pt-24 md:pb-0 pb-4 px-2 md:flex md:flex-col md:justify-center md:w-3/4">
          <h1 className="leading-snug font-normal pt-12 pb-4 md:p-0 md:mb-10 md:mx-auto md:max-w-3xl">
            {intl.formatMessage({ id: 'technology-page-title' })}
          </h1>
          <h3 className="font-normal text-xl leading-9 mb-12 text-textDark md:text-2xl md:px-12">
            {intl.formatMessage({ id: 'technology-page-sub-title-1' })}
          </h3>
          <div className="md:flex md:flex-col">
            <div className="md:flex md:justify-center">
              <TechCard
                title={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-title' })}
                description={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-description' })}
                logo={images.polkadot.publicURL}
                link="/technologies/polkadot"
                extraClass=" "
                theme="dark"
              />
              <TechCard
                title={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-title' })}
                description={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-description' })}
                logo={images.substrate.publicURL}
                link="/technologies/substrate"
                extraClass="pt-10"
                theme="dark"
              />
            </div>
            <div className="md:flex md:justify-center">
              <div className="bg-textDark text-gray-200 m-4 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
                <a href="https://signer.parity.io" target="_blank" rel="noreferrer noopener" className="no-underline">
                  <div className="px-4 pt-6 pb-6 md:pb-16 flex flex-col items-center">
                    <img className={`h-16 w-auto`} src={images.signer.publicURL} alt="Parity Technology Logo" />
                    <h6 className="m-3 text-lg md:text-xl text-gray-200">
                      {intl.formatMessage({ id: 'homepage-parity-tech-section-signer-title' })}
                    </h6>
                    <p className="text-sm md:text-base leading-7 2xl:w-2/3">
                      {intl.formatMessage({ id: 'homepage-parity-tech-section-signer-description' })}
                    </p>
                  </div>
                </a>
              </div>

              <TechCard
                title={intl.formatMessage({ id: 'technology-page-github-title' })}
                description={intl.formatMessage({ id: 'technology-page-github-text' })}
                logo={images.github.publicURL}
                link="https://github.com/paritytech/"
                extraClass="bg-gray-200 rounded-full opacity-60"
                theme="red"
              />
            </div>
          </div>
          <div className="my-20 md:my-28">
            <h4 className="leading-9 font-normal text-2xl mb-8 text-textDark md:text-4xl md:px-12">
              {intl.formatMessage({ id: 'technology-page-sub-title-2' })}
            </h4>
            <Button extraClass=" " link="/solutions">
              {intl.formatMessage({ id: 'technology-page-cta' })}
            </Button>
            <p className="leading-9 mt-4 text-textDark text-xs">
              {intl.formatMessage({ id: 'technology-page-sub-cta-1' })}&nbsp;
              <LocalizedLink className="text-parityPink" to="/contact">
                {intl.formatMessage({ id: 'technology-page-sub-cta-2' })}
              </LocalizedLink>
              &nbsp;{intl.formatMessage({ id: 'technology-page-sub-cta-3' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
