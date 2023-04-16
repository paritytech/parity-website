// eslint-disable-next-line @typescript-eslint/no-var-requires
const { slugify } = require('./src/utils/url');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const blogTemplate = require.resolve(`./src/components/templates/blog-template.tsx`);

  const result = await graphql(`
    {
      blog: allFile(filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "mdx" } }) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      authors: allMdx {
        group(field: frontmatter___author) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query for blogs', result.errors);
    return;
  }

  // Create Redirects for signer
  createRedirect({
    fromPath: '/technologies/signer',
    toPath: 'https://signer.parity.io/',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/signer',
    toPath: 'https://signer.parity.io/',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/technologies/signer/',
    toPath: 'https://signer.parity.io/',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/signer/',
    toPath: 'https://signer.parity.io/',
    isPermanent: true,
    redirectInBrowser: true,
  });

  //Creating Blog Posts based on slugs
  const blogPosts = result.data.blog.nodes;
  blogPosts.forEach(({ childMdx: node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  //Creating Tag Pages based on tags mentioned in each mdx file
  const tags = result.data.tags.group;
  tags.forEach(({ fieldValue }) => {
    let customSlug = slugify(fieldValue);
    console.log(fieldValue);
    createPage({
      path: `blog/tag/${customSlug}`,
      component: require.resolve(`./src/components/templates/tag-template.tsx`),
      context: {
        tag: fieldValue,
      },
    });
  });

  //Creating Author Pages based on author mentioned in Forestry MDX files
  const authors = result.data.authors.group;
  authors.forEach(({ fieldValue }) => {
    let customSlug = slugify(fieldValue);
    createPage({
      path: `blog/author/${customSlug}`,
      component: require.resolve(`./src/components/templates/author-template.tsx`),
      context: {
        author: fieldValue,
      },
    });
  });
};
