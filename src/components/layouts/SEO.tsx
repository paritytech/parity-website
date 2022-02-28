import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { websiteData } from './seoData';

interface SEOProps {
  title: string;
  description?: string;
  author?: string;
  image?: string;
  keywords?: string;
  url?: string;
  children?: React.ReactNode;
}

export default function SEO(props: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
            keywords
          }
        }
      }
    `
  );
  const metaDescription = props.description || site.siteMetadata.description;
  const metaTitle = props.title || site.siteMetadata.title;
  const metaAuthor = props.author || site.siteMetadata.author;
  const metaUrl = props.url || site.siteMetadata.siteUrl;
  const metaImage = props.image || site.siteMetadata.image;
  const metaKeywords = props.keywords || site.siteMetadata.keywords;

  return (
    <Helmet
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `title`,
          property: `og:title`,
          content: metaTitle,
        },
        {
          name: `description`,
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `type`,
          property: `og:type`,
          content: `website`,
        },
        {
          name: `image`,
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `url`,
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    >
      <script type="application/ld+json">{JSON.stringify(websiteData)}</script>
    </Helmet>
  );
}
