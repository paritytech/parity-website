import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocalizedLink } from 'gatsby-theme-i18n';
import FullScreenYouTube from '../../FullScreenYouTube';
import Button from '../../Button';
import { useIntl } from 'react-intl';

export default function ParityTeam() {
  const intl = useIntl();

  const images = useStaticQuery(graphql`
    {
      jutta: file(relativePath: { eq: "jutta-steiner-1.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      gavin: file(relativePath: { eq: "gavin-wood-1.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern bg-cover bg-center h-full">
      <div className="container text-center mb-20">
        <div className="flex flex-col justify-center items-center py-20 px-2">
          <h4 className="text-2xl font-normal md:text-4xl lg:w-2/3 mb-6">
            {intl.formatMessage({ id: 'homepage-team-title' })}
          </h4>
          <p className="text-lg md:text-xl text-textDark font-light">
            {intl.formatMessage({ id: 'homepage-team-subtitle' })}
          </p>
          <LocalizedLink className="text-parityPink no-underline text-lg  md:text-xl font-light" to="/jobs">
            {intl.formatMessage({ id: 'homepage-team-join-cta' })}
          </LocalizedLink>
        </div>
        <div className="md:flex md:justify-center mb-10">
          <FullScreenYouTube
            image={images.gavin.childImageSharp.fluid.src}
            name={intl.formatMessage({ id: 'homepage-team-gavin' })}
            title={intl.formatMessage({ id: 'homepage-team-gavin-title' })}
            videoId="UIBR99gOLOQ"
            link="/about/gavin-wood/"
          />
        </div>
        <Button extraClass="" link="/about">
          {intl.formatMessage({ id: 'homepage-team-cta' })}
        </Button>
      </div>
    </section>
  );
}
