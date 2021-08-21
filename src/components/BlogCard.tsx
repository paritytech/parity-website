import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  link: string;
}

export default function BlogCard(props: BlogCardProps) {
  const { image, date, title, link } = props;
  const trimmedTitle = title.replace(/^(.{60}[^\s]*).*/, '$1');

  return (
    <div className="bg-white mx-4 my-8 rounded-lg shadow h-full md:w-1/3">
      <div className="object-cover h-2/3 md:h-3/4">
        <LocalizedLink to={`/${link}`}>
          <img className="rounded-t-lg" src={image} alt={title} />
        </LocalizedLink>
      </div>
      <div className="p-4 md:py-6 h-1/3 md:h-1/4">
        <p className="font-normal text-xs md:text-sm text-textDark mb-0">{date}</p>
        <p className="md:text-lg font-normal text-textDark my-1 h-14 md:overflow-hidden">
          {trimmedTitle} {title.length === trimmedTitle.length ? null : `...`}
        </p>
        <LocalizedLink
          className="text-xs md:text-sm text-parityPink no-underline hover:underline font-normal md:font-bold"
          to={`/${link}`}
        >
          Read More
        </LocalizedLink>
      </div>
    </div>
  );
}
