import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import NewsletterModal from '../components/NewsletterModal';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import EventCard from '../components/EventCard';
import eventsData from '../../content/events/events.json';

interface IEvents {
  title: string;
  description: string;
  dateTime: string;
  location: string;
  cta: string;
  link: string;
  image: string;
  expiration_date: string;
}

export default function EventsPage() {
  const intl = useIntl();
  const { events } = eventsData;
  const [upcomingEvents, SetUpcomingEvents] = useState<IEvents[]>([]);
  const [pastEvents, SetPastEvents] = useState<IEvents[]>([]);

  useEffect(() => {
    events.forEach(event => {
      if (new Date(event.expiration_date).getTime() - new Date().getTime() > 0) {
        SetUpcomingEvents(prevState => [...prevState, event]);
      } else {
        SetPastEvents(prevState => [...prevState, event]);
      }
    });
  }, []);

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'events-page-seo' })} />
      <section className="bg-parityGray bg-hero-pattern-dark bg-cover bg-center bg-no-repeat -mt-32 px-4">
        <div className="container pt-32">
          <div className="text-center py-8 md:py-16 md:flex md:flex-col md:justify-center">
            <h3 className="text-textDark text-center font-normal md:text-5xl mb-0 md:mb-8">
              Join the Next Parity Events
            </h3>
          </div>
          <div className="flex flex-wrap">
            {upcomingEvents.map((event: any, index) => {
              return (
                <div key={index} className="w-1/1 md:w-1/2 xl:w-1/3">
                  <EventCard
                    dateTime={event.dateTime}
                    location={event.location}
                    title={event.title}
                    description={event.description}
                    cta={'LEARN MORE'}
                    link={event.link}
                    image={event.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-parityGray px-4">
        <div className="container">
          <div className="text-center py-8 md:py-16 md:flex md:flex-col md:justify-center">
            <h3 className="text-textDark text-center font-normal md:text-5xl mb-0 md:mb-8">Previous Events</h3>
          </div>
          <div className="flex flex-wrap">
            {pastEvents.map((event: any, index) => {
              return (
                <div key={index} className="w-1/1 md:w-1/2 xl:w-1/3">
                  <EventCard
                    dateTime={event.dateTime}
                    location={event.location}
                    title={event.title}
                    description={event.description}
                    cta={'LEARN MORE'}
                    link={event.link}
                    image={event.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-parityGray px-4">
        <div className="container">
          <div className="flex flex-col justify-center text-center py-16 md:py-24">
            <h3 className="font-normal mb-4 md:text-4xl">{intl.formatMessage({ id: 'contact-page-footer-title' })}</h3>
            <div className="mb-4">
              <NewsletterModal sourcePage="contact" />
            </div>
            <p className="text-sm text-textLight">
              {intl.formatMessage({ id: 'contact-page-footer-subcta-one' })}{' '}
              <LocalizedLink className="text-parityPink" to="/blog">
                {intl.formatMessage({ id: 'contact-page-footer-subcta-two' })}
              </LocalizedLink>
            </p>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
