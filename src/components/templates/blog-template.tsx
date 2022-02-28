import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';
import Social from '../Social';
import AuthorCard from '../AuthorCard';
import BlogSocial from '../BlogSocial';
import BlogCard from '../BlogCard';
import { LocalizedLink } from 'gatsby-theme-i18n';
import authorsData from '../../../content/blog/authors.json';

interface BlogTemplateProps {
  data: any;
  pageContext: any;
}

export default function BlogTemplate(props: BlogTemplateProps) {
  const { authors } = authorsData;
  const authorName = props.data.mdx.frontmatter.author;
  const authorsFiltered = authors.filter((author: any) => {
    if (author.name === authorName) {
      return true;
    }
  });
  const [authorInfo] = authorsFiltered;

  return (
    <Layout>
      <SEO
        title={props.data.mdx.frontmatter.blogTitle}
        image={`https://www.parity.io${props.data.mdx.frontmatter.image}`}
        description={props.data.mdx.excerpt}
        author={props.data.mdx.frontmatter.author}
        keywords={props.data.mdx.frontmatter.tags}
        url={`https://www.parity.io/${props.data.mdx.frontmatter.slug}/`}
      />
      <section className="md:bg-hero-pattern bg-top bg-no-repeat bg-contain">
        <div className="md:flex md:justify-center">
          <article className="mx-4 font-normal md:text-lg xl:text-xl max-w-screen-md">
            <div className="">
              <div className="container h-full text-center pt-6 md:pt-12 pb-6 px-2 md:flex md:flex-col md:justify-center md:max-w-screen-md">
                <h3 className="text-textDark text-center pt-8 font-normal md:text-5xl md:mb-8 md:leading-tight">
                  {props.data.mdx.frontmatter.blogTitle}
                </h3>{' '}
              </div>
            </div>
            <AuthorCard
              image={authorInfo.avatar}
              name={props.data.mdx.frontmatter.author}
              authorPage={authorInfo.link}
              title={authorInfo.title}
              company={authorInfo.company}
              date={props.data.mdx.frontmatter.date_published}
              mdTags={props.data.mdx.frontmatter.tags}
              timeToRead={props.data.mdx.timeToRead}
            />
            {props.data.mdx.frontmatter.image ? (
              <div className="mb-12 ring-1 ring-black ring-opacity-5 shadow-xl rounded">
                <img
                  className="rounded  h-full w-full"
                  src={props.data.mdx.frontmatter.image}
                  alt={props.data.mdx.frontmatter.title}
                />
              </div>
            ) : (
              <div className="my-12"></div>
            )}
            <div>
              {props.data.mdx ? (
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
              ) : (
                <div>This page hasn&apos;t been translated yet</div>
              )}
            </div>
            <div>
              <div className="text-center border my-8">
                <h3 className="text-2xl md:text-3xl font-normal mt-6">
                  Want to build the future of the web?{' '}
                  <LocalizedLink className="text-parityPink" to="/jobs">
                    We&apos;re hiring
                  </LocalizedLink>
                </h3>
              </div>
            </div>
            <BlogSocial />
          </article>
        </div>
      </section>
      <section className="bg-parityWhite h-full">
        <div className="container pb-16">
          <h4 className="md:text-2xl font-medium pt-20 mt-0 mx-4 md:mb-0">More recent stories</h4>
          <div className="md:flex">
            {props.data.allMdx.edges.map((post: any, index: number) => (
              <BlogCard
                image={post.node.frontmatter.image}
                date={post.node.frontmatter.date_published}
                title={post.node.frontmatter.blogTitle}
                link={post.node.frontmatter.slug}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(fields: { locale: { eq: $locale } }, frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date_published(formatString: "MMMM DD, YYYY")
        image
        slug
        tags
        blogTitle
      }
      body
      timeToRead
      excerpt
    }
    allMdx(sort: { fields: frontmatter___date_published, order: DESC }, limit: 3) {
      edges {
        node {
          frontmatter {
            blogTitle
            date_published(formatString: "MMMM DD, YYYY")
            image
            slug
          }
        }
      }
    }
  }
`;
