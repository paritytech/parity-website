import React from 'react';

interface EventCardProps {
  dateTime: string;
  location: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  image: string;
}

export default function BlogCard(props: EventCardProps) {
  const { dateTime, location, title, description, cta, link, image } = props;
  const buttonStyles =
    'bg-whitefont-title text-base text-textDark opacity-90 px-20 py-2 border border-gray-300 focus:outline-none uppercase';
  const hoverStyles = 'hover:border-gray-600 transition-transform transform hover:-translate-y-0.5';

  return (
    <article className="bg-white md:mx-4 my-8 rounded-lg shadow">
      <div className="object-cover">
        <a href={link}>
          <img className="rounded-t-lg" src={image} alt="Parity Event Main Image" />
        </a>
      </div>
      <div className="px-4 pb-3">
        <div className="flex justify-between text-textLight mb-0 uppercase">
          <p className="text-xs text-parityPink mb-0">{dateTime}</p>
          <p className="text-xs mb-0">{location}</p>
        </div>
        <div className="pt-3 pb-6 h-36 md:h-40">
          <p className="font-normal my-0">{title}</p>
          <p className="text-sm font-light my-0">{description}</p>
        </div>
        <div className="flex">
          <a href={link} target="_blank" rel="noreferrer" className="mx-auto">
            <button type="button" className={`${buttonStyles} ${hoverStyles}`}>
              {cta}
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}
