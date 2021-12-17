import React from 'react';

import EventCard from '../../EventCard';
import eventsData from '../../../../content/events/events.json';

interface EventRowProps {
  isPast?: boolean;
}

export default function EventsList({ isPast }: EventRowProps) {
  const { events } = eventsData;
  return (
    <>
      {events
        .filter(event => {
          if (isPast) {
            return new Date(event.expiration_date).getTime() - new Date().getTime() < 0;
          }
          return new Date(event.expiration_date).getTime() - new Date().getTime() > 0;
        })
        .map((event: any, index) => {
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
    </>
  );
}
