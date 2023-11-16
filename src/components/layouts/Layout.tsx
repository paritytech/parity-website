import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLink } from 'gatsby-theme-i18n';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

import Header from './Header';
import HeaderLight from './HeaderLight';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';
import Banner from '../Banner';
import CookieBanner from '../CookieBanner';
import MDXButton from '../MDXButton';

interface LayoutProps {
  children: React.ReactNode;
  theme?: string;
}

const components = {
  a: MdxLink,
  MDXButton,
};

export default function Layout(props: LayoutProps) {
  const [cookieSettings] = useLocalStorage('cookie-settings');
  return (
    <>
      <Banner />
      {!cookieSettings && <CookieBanner />}
      {props.theme === 'light' ? <HeaderLight /> : <Header />}
      <main className="">
        <ScrollToTop />
        <MDXProvider components={components}>{props.children}</MDXProvider>
      </main>
      <Footer />
    </>
  );
}
