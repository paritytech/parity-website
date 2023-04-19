import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../../Button';
import TechCard from '../../TechCard';
import { useIntl } from 'react-intl';

export default function ParityTech() {
  const intl = useIntl();

  const images = useStaticQuery(graphql`
    {
      substrate: file(relativePath: { eq: "substrate-logo-light.svg" }) {
        id
        publicURL
      }
      polkadot: file(relativePath: { eq: "polkadot_token_polkadotToken_pink.svg" }) {
        id
        publicURL
      }
      signer: file(relativePath: { eq: "icon-parity-signer.png" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
      <div className="container flex flex-col items-center text-center ">
        <h2 className="text-2xl md:text-4xl font-normal px-8 mt-24 mb-16 md:w-3/4 lg:w-2/3">
          {intl.formatMessage({ id: 'homepage-parity-tech-section-title' })}
        </h2>
        <div className="md:flex">
          <TechCard
            title={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-title' })}
            description={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-description' })}
            logo={images.substrate.publicURL}
            link="/technologies/substrate"
            extraClass="pt-10"
            theme="light"
          />
          <TechCard
            title={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-title' })}
            description={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-description' })}
            logo={images.polkadot.publicURL}
            link="/technologies/polkadot"
            extraClass=" "
            theme="light"
          />
          <div className="bg-white m-4 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
            <a href="https://signer.parity.io" target="_blank" rel="noreferrer noopener" className="no-underline">
              <div className="px-4 pt-6 pb-6 flex flex-col items-center">
                <img className={`h-16 w-auto`} src={images.signer.publicURL} alt="Parity Technology Logo" />
                <h4 className="m-6">{intl.formatMessage({ id: 'homepage-parity-tech-section-signer-title' })}</h4>
                <p className="text-sm md:text-base text-textDark leading-7 2xl:w-2/3">
                  {intl.formatMessage({ id: 'homepage-parity-tech-section-signer-description' })}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="mb-24 mt-12">
          <Button extraClass="" link="/technologies">
            {intl.formatMessage({ id: 'homepage-parity-tech-section-cta' })}
          </Button>
        </div>
      </div>
    </section>
  );
}
