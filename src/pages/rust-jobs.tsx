import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import FeaturedBlogs from '../components/FeaturedBlogs';
import Social from '../components/Social';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Button from '../components/Button';
import parityRustImage from '../images/parity-heart-rust.svg';

export default function RustJobsPage() {
  const intl = useIntl();
  const backgroundImg = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "parity-office.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2048, quality: 90) {
            src
          }
        }
      }
    }
  `);
  const bgStyles = {
    backgroundImage: `url(${backgroundImg.file.childImageSharp.fluid.src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'rust-jobs-page-seo' })} />
      <section className="bg-hero-rustJobs bg-cover bg-center bg-fixed -mt-24 xl:-mt-36 md:-mb-32">
        <div className="md:h-screen md:min-h-heroMinLg">
          <div className="container h-full text-center pt-40 md:pt-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:items-center md:w-2/3">
            <img className="mx-auto w-96 md:w-4/6 h-auto py-10" src={parityRustImage} alt="Parity Loves Rust Image" />
            <h4 className="text-white font-normal text-2xl md:text-4xl mb-2">
              {intl.formatMessage({ id: 'rust-jobs-page-title-one' })}
            </h4>
            <h4 className="text-white font-normal text-2xl md:text-4xl">
              {intl.formatMessage({ id: 'rust-jobs-page-title-two' })}
            </h4>
          </div>
        </div>
      </section>
      <section className="bg-white text-textDark">
        <div className="container">
          <div className="flex justify-center mx-4 md:mx-auto py-12 max-w-screen-lg">
            <div className="max-w-screen-md">
              <h2 className="font-normal text-center py-10 md:text-5xl">
                {intl.formatMessage({ id: 'rust-jobs-page-intro-title' })}
              </h2>
              <p className="text-lg md:text-xl">{intl.formatMessage({ id: 'rust-jobs-page-intro-paragraph-one' })}</p>
              <p className="text-lg md:text-xl">{intl.formatMessage({ id: 'rust-jobs-page-intro-paragraph-two' })}</p>
              <p className="text-lg md:text-xl">{intl.formatMessage({ id: 'rust-jobs-page-intro-paragraph-three' })}</p>
              <h4 className="text-2xl md:text-3xl mb-4">
                {intl.formatMessage({ id: 'rust-jobs-page-intro-requirements' })}
              </h4>
              <ul className="list-inside">
                <li className="font-normal text-lg md:text-xl">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-requirements-bullet-one' })}
                </li>
                <li className="font-normal text-lg md:text-xl">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-requirements-bullet-two' })}
                </li>
              </ul>
              <h4 className="text-2xl md:text-3xl mb-4">
                {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits' })}
              </h4>
              <ul className="list-inside">
                <li className="font-normal text-lg md:text-xl">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-one' })}
                </li>
                <li className="font-normal text-lg md:text-xl">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-two' })}
                </li>
                <li className="font-normal text-lg md:text-xl">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-three' })}
                </li>
                <li className="font-normal text-lg md:text-xl">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-four' })}
                </li>
                <li className="font-normal text-lg md:text-xl">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-five' })}
                </li>
              </ul>
              <p
                className="text-lg md:text-xl"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-privacy-policy' }),
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="h-full bg-black">
        <div style={bgStyles}>
          <div className="container py-28 max-w-3xl">
            <div className="text-center text-parityWhite">
              <blockquote className="mb-8 leading-8 text-parityWhite">
                {`"${intl.formatMessage({ id: 'rust-jobs-page-fred-quote' })}"`}
              </blockquote>
              <h4 className="font-semibold mb-2 text-parityWhite">
                {intl.formatMessage({ id: 'rust-jobs-page-fred' })}
              </h4>
              <span className="text-sm">{intl.formatMessage({ id: 'rust-jobs-page-fred-title' })}</span>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="container">
          <div className="px-4 py-20 md:py-28 md:flex md:justify-between">
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
                <LocalizedLink className="no-underline text-parityPink hover:underline text-sm font-normal" to="/jobs/">
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
      <section className="h-full border-t">
        <div className="container">
          <div className="flex flex-col items-center text-center py-16 md:py-28">
            <h3 className="font-normal text-2xl md:text-3xl mb-4">
              {intl.formatMessage({ id: 'rust-jobs-page-footer-cta-title' })}
            </h3>
            <Button link="/jobs/" extraClass="">
              {intl.formatMessage({ id: 'rust-jobs-page-footer-cta' })}
            </Button>
          </div>
        </div>
      </section>
      <FeaturedBlogs />
      <Social />
    </Layout>
  );
}
