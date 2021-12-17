import React from 'react';
import { useIntl } from 'react-intl';

import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import Section from '../components/layouts/Section';
import EventsList from '../components/sections/EventPage/EventsList';
import FooterCTA from '../components/FooterCTA';

export default function EventsPage() {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'events-page-seo' })} />
      <Section page="events" sectionTitle="Join the Next Parity Events" background hero>
        <div className="flex flex-wrap">
          <EventsList />
        </div>
      </Section>
      <Section page="events" sectionTitle="Previous Events">
        <div className="flex flex-wrap">
          <EventsList isPast />
        </div>
      </Section>
      <FooterCTA
        title={`${intl.formatMessage({ id: 'contact-page-footer-title' })}`}
        newsletterButton={true}
        subCTATextOne={`${intl.formatMessage({ id: 'contact-page-footer-subcta-one' })}`}
        subCTATextTwo={`${intl.formatMessage({ id: 'contact-page-footer-subcta-two' })}`}
        subCTATextLink={`/blog`}
      />
      <Social />
    </Layout>
  );
}
