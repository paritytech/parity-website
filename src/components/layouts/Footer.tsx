import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';
import NewsletterModal from '../NewsletterModal';
import KusamaAddresses from '../KusamaAddresses';
import elementLogo from '../../images/logo-element.svg';

const navItemsFooter = 'no-underline text-left text-sm opacity-50 hover:opacity-90 my-1 w-auto';
const navItemsSubFooter = 'no-underline text-xs my-1 hover:underline mx-6 xl:ml-0 text-textLight';
const socialIcons = 'w-5 mx-4 h-auto fill-current';

export default function Footer() {
  const intl = useIntl();
  const socialLinks = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          element
          github
          linkedIn
          telegram
          title
          twitter
          gitter
          relayChain
        }
      }
    }
  `);

  return (
    <footer className="flex flex-col justify-center bg-footerDark text-white m-0">
      <div className="bg-footerLight w-full flex justify-center">
        <div className="container flex justify-center flex-wrap mt-12 mb-8 mx-6">
          <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6">
            <p className="uppercase font-title tracking-nav text-xs opacity-90 font-bold">
              {intl.formatMessage({ id: 'nav-company' })}
            </p>
            <div className="flex flex-col mt-8 mb-8">
              <LocalizedLink to="/about" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-about' })}
              </LocalizedLink>
              <LocalizedLink to="/blog" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-blog' })}
              </LocalizedLink>
              <LocalizedLink to="/contact" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-contact' })}
              </LocalizedLink>
              <LocalizedLink to="/bug-bounty" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-bug-bounty' })}
              </LocalizedLink>
              <LocalizedLink to="/rust-jobs" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-rust-jobs' })}
              </LocalizedLink>
              <LocalizedLink to="/jobs" className={`${navItemsFooter} flex items-center`}>
                {intl.formatMessage({ id: 'nav-jobs' })}
                <span className="bg-parityPink text-xxs font-bold uppercase rounded-md py-1 px-1 ml-2">Hiring</span>
              </LocalizedLink>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6">
            <p className="uppercase font-title text-xs opacity-90 tracking-nav  font-bold">
              {intl.formatMessage({ id: 'nav-technologies' })}
            </p>
            <div className="flex flex-col mt-8">
              <LocalizedLink to="/technologies/substrate" className={navItemsFooter}>
                {intl.formatMessage({ id: 'substrate' })}
              </LocalizedLink>
              <LocalizedLink to="/technologies/polkadot" className={navItemsFooter}>
                {intl.formatMessage({ id: 'polkadot' })}
              </LocalizedLink>
              <a href="https://signer.parity.io/" className={navItemsFooter} target="_blank" rel="noreferrer noopener">
                {intl.formatMessage({ id: 'parity-signer' })}
              </a>
              <LocalizedLink to="/technologies" className={navItemsFooter}>
                {intl.formatMessage({ id: 'all-technologies' })}
              </LocalizedLink>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6">
            <p className="uppercase font-title text-xs opacity-90 tracking-nav  font-bold">
              {intl.formatMessage({ id: 'nav-solutions' })}
            </p>
            <div className="flex flex-col mt-8 mb-8">
              <LocalizedLink to="/solutions" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-solutions-startups' })}
              </LocalizedLink>
              <LocalizedLink to="/solutions" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-solutions-organizations' })}
              </LocalizedLink>
              <LocalizedLink to="/solutions" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-solutions-custom' })}
              </LocalizedLink>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6">
            <p className="uppercase font-title text-xs opacity-90 tracking-nav  font-bold">
              {intl.formatMessage({ id: 'nav-community' })}
            </p>
            <div className="flex flex-col mt-8">
              <LocalizedLink to="/events" className={navItemsFooter}>
                {intl.formatMessage({ id: 'nav-events' })}
              </LocalizedLink>
              <a
                href={socialLinks.site.siteMetadata.relayChain}
                target="_blank"
                rel="noreferrer"
                className={navItemsFooter}
              >
                Relay Chain Podcast
              </a>
              <a
                href={socialLinks.site.siteMetadata.github}
                target="_blank"
                rel="noreferrer"
                className={navItemsFooter}
              >
                {intl.formatMessage({ id: 'nav-github' })}
              </a>
              <a
                href={socialLinks.site.siteMetadata.element}
                target="_blank"
                rel="noreferrer"
                className={navItemsFooter}
              >
                {intl.formatMessage({ id: 'nav-element' })}
              </a>
            </div>
          </div>
          <div className="w-full sm:w-2/3 lg:w-full xl:w-2/6">
            <p className="uppercase font-title text-xs opacity-90 tracking-nav font-bold">
              {intl.formatMessage({ id: 'nav-newsletter' })}
            </p>
            <p className={`${navItemsFooter} mt-8 opacity-90`}>{intl.formatMessage({ id: 'nav-newsletter-text' })}</p>
            <NewsletterModal sourcePage="footer" />
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="container flex flex-wrap justify-center xl:justify-between">
          <div className="flex flex-wrap justify-center items-center mb-8 xl:justify-start">
            <div className={navItemsSubFooter}>
              <span className="text-textLight">© {new Date().getFullYear()}</span>
              <LocalizedLink to="/" className="no-underline text-textLight">
                &nbsp;
                {intl.formatMessage({ id: 'nav-parity-technologies' })}
              </LocalizedLink>
              &nbsp;<span className="text-textLight">-- {intl.formatMessage({ id: 'nav-rights-reserved' })}</span>
            </div>
            <KusamaAddresses />
            <LocalizedLink to="/terms" className={navItemsSubFooter}>
              {intl.formatMessage({ id: 'nav-terms-of-use' })}
            </LocalizedLink>
            <LocalizedLink to="/privacy" className={navItemsSubFooter}>
              {intl.formatMessage({ id: 'nav-privacy-policy' })}
            </LocalizedLink>
            <LocalizedLink to="/applicant-notice" className={navItemsSubFooter}>
              {intl.formatMessage({ id: 'nav-applicant' })}
            </LocalizedLink>
          </div>
          <div className="flex justify-center mb-8 xl:justify-end">
            <a href={socialLinks.site.siteMetadata.twitter} target="_blank" rel="noreferrer">
              <svg className={socialIcons} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Twitter icon</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
              </svg>
            </a>
            <a href={socialLinks.site.siteMetadata.github} target="_blank" rel="noreferrer">
              <svg className={socialIcons} role="img" xmlns="http://www.w3.org/1999/xlink" viewBox="5 5 24 24">
                <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
              </svg>
            </a>
            <a href={socialLinks.site.siteMetadata.linkedIn} target="_blank" rel="noreferrer">
              <svg className={socialIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>LinkedIn icon</title>
                <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path>
              </svg>
            </a>
            <a href={socialLinks.site.siteMetadata.telegram} target="_blank" rel="noreferrer">
              <svg className={socialIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Telegram icon</title>
                <path d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"></path>
              </svg>
            </a>
            <a href={socialLinks.site.siteMetadata.element} target="_blank" rel="noreferrer">
              <img className={`${socialIcons} rounded-full`} src={elementLogo} alt="Element Logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
