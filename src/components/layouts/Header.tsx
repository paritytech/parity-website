import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';

import parityLogo from '../../images/parity_logo_dark.png';

const navItemsDiv = 'px-2 pt-2 pb-4 h-screen flex flex-col lg:h-auto lg:flex lg:flex-row lg:items-center lg:mt-8';
const navItemStyles =
  'block mt-1 px-4 py-1 font-title font-semibold  text-navItemColor tracking-nav no-underline uppercase  hover:text-textLight text-center animate-fade-in';
const socialIcons = 'w-6 h-auto fill-current text-navItemColor hover:text-textLight mx-4 animate-fade-in';

export default function Header() {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const socialLinks = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          github
          twitter
        }
      }
    }
  `);
  useEffect(() => {
    isOpen ? (document.body.style.overflow = `hidden`) : (document.body.style.overflow = `unset`);
  }, [isOpen]);

  return (
    <header className="container relative z-20 lg:flex lg:justify-between lg:px-4">
      <div className="flex items-center justify-between px-4 py-3 lg:p-0">
        <div>
          <LocalizedLink to="/">
            <img className="h-14" src={parityLogo} alt="Parity Logo" />
          </LocalizedLink>
        </div>
        <div className="lg:hidden">
          <button type="button" className="block border-0 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
              <path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
              <path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block animate__animated animate__slideInRight animate__faster' : 'hidden'
        } ${navItemsDiv}`}
      >
        <LocalizedLink to="/technologies" className={navItemStyles}>
          {intl.formatMessage({ id: 'nav-technologies' })}
        </LocalizedLink>
        <LocalizedLink to="/solutions" className={navItemStyles}>
          {intl.formatMessage({ id: 'nav-solutions' })}
        </LocalizedLink>
        <LocalizedLink to="/about" className={navItemStyles}>
          {intl.formatMessage({ id: 'nav-about' })}
        </LocalizedLink>
        <LocalizedLink to="/jobs" className={navItemStyles}>
          {intl.formatMessage({ id: 'nav-jobs' })}
        </LocalizedLink>
        <LocalizedLink to="/blog" className={navItemStyles}>
          {intl.formatMessage({ id: 'nav-blog' })}
        </LocalizedLink>
        <div className="flex justify-center items-center px-2 py-1 my-4 lg:my-0">
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
        </div>
      </div>
    </header>
  );
}
