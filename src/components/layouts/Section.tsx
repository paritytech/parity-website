import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  page?: string;
  sectionTitle?: string;
  hero?: boolean;
  background?: boolean;
}

export default function Section({ children, page, sectionTitle, hero, background }: SectionProps) {
  return (
    <>
      {page === 'events' && (
        <EventSection sectionTitle={sectionTitle} background={background} hero={hero}>
          {children}
        </EventSection>
      )}
    </>
  );
}

function EventSection({ children, sectionTitle, hero, background }: SectionProps) {
  return (
    <section
      className={`bg-parityGray px-4 ${hero && `-mt-24 `} ${
        background && 'bg-hero-pattern-dark bg-cover bg-center bg-no-repeat'
      } `}
    >
      <div className={`container ${hero && `pt-24`}`}>
        <div className="text-center py-8 md:py-16 md:flex md:flex-col md:justify-center">
          <h3 className="text-textDark text-center font-normal md:text-5xl mb-0 md:mb-8">{sectionTitle}</h3>
        </div>
        {children}
      </div>
    </section>
  );
}
