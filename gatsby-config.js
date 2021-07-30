const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.parity.io',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'Parity Technologies',
    siteUrl: siteUrl,
    blogUrl: `${siteUrl}/blog`,
    defaultLang: `en-US`,
    image: '/static/images/parity-og-image.jpeg',
    description:
      'Parity Technologies builds core blockchain infrastructure. From Parity Ethereum, the most advanced Ethereum client, to Polkadot, the next-generation interoperable blockchain network.',
    keywords: ['Blockchain', 'Polkadot', 'Substrate', 'Web3.0', 'Parity Technologies'],
    author: 'Parity WebDev Team',
    pressEmail: 'press@parity.io',
    email: 'info@parity.io',
    twitter: 'https://twitter.com/ParityTech',
    linkedIn: 'https://www.linkedin.com/company/paritytech',
    element: 'https://app.element.io/#/room/#watercooler:matrix.parity.io',
    github: 'https://github.com/paritytech/',
    telegram: 'https://t.me/parity_technologies',
    gitter: 'https://gitter.im/paritytech/parity',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-klaro',
      options: {
        includeInDevelopment: true,
        klaroVersion: 'v0.7.11',
        config: {
          storageMethod: 'localStorage',
          cookieName: 'parityCookie',
          cookieExpiresAfterDays: 120,
          disablePoweredBy: true,
          translations: {
            en: {
              consentModal: {
                title: 'Information that we collect',
                description: `We use necessary cookies to make our site work. We'd also like to set optional tracking mechanisms to help us improve it by collecting and reporting information on how you use it. Here you can customise the information we collect about you by giving or revoking your consent to our use of optional tracking mechanisms.`,
              },
              consentNotice: {
                description: `We use necessary cookies to make our site work. We'd also like to set optional tracking mechanisms to help us improve it by collecting and reporting information on how you use it.`,
                learnMore: 'Learn more',
              },
              googleAnalytics: {
                description: 'Collection of information about how visitors use our website',
              },
              cloudflare: {
                description: 'Protection against DDoS attacks',
              },
              decline: 'Deactivate all',
              ok: 'Accept',
              acceptAll: 'Accept all',
              acceptSelected: 'Accept selected',
            },
          },
          privacyPolicy: '/privacy/',
          default: false,
          mustConsent: false,
          services: [
            {
              name: 'googleAnalytics',
              default: true,
              title: 'Google Analytics',
              purposes: ['analytics'],
              cookies: [],
              onAccept: `
              function createCookie(name, value, days) {
                var expires
                if (days) {
                  var date = new Date()
                  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
                  expires = '; expires=' + date.toGMTString()
                } else {
                  expires = ''
                }
                document.cookie = name + '=' + value + expires + '; path=/'
              }
              createCookie('parityCookie', 'true', 120);
              window['ga-disable-UA-145158313-1'] = false;
              `,
              onDecline: `
              function eraseCookie(name) {   
                document.cookie = name+'=; Max-Age=-99999999;';  
              }
              eraseCookie('parityCookie');
              eraseCookie('_ga');
              eraseCookie('_gid');
              eraseCookie('_ga_145158313-1');
              window['ga-disable-UA-145158313-1'] = true;
              `,
              required: false,
              optOut: false,
              onlyOnce: false,
            },
            {
              name: 'cloudflare',
              title: 'Cloudflare',
              purposes: ['security'],
              required: true,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-145158313-1',
          cookieName: 'parityCookie',
          anonymize: true,
          allowAdFeatures: false,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        domain: 'api-sa.substrate.io',
        eventsGlobal: 'sa',
        events: true,
        trackPageViews: true,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.blogTitle,
                  description: edge.node.excerpt,
                  image: edge.node.frontmatter.image,
                  category: edge.node.frontmatter.tags,
                  ttl: edge.node.timeToRead,
                  date: edge.node.frontmatter.date_published,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: [frontmatter___date_published]}) {
                  edges {
                    node {
                      excerpt
                      html
                      timeToRead
                      frontmatter {
                        tags
                        slug
                        image
                        date_published(formatString: "MMMM DD, YYYY")
                        author
                        blogTitle
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Parity Technologies Blog Feed',
            link: 'https://www.parity.io',
            language: `en-US`,
            webMaster: 'Imad Arain',
            managingEditor: 'Zach Cavanaugh',
            categories: [
              'Community',
              'Polkadot',
              'Releases',
              'Parity Substrate',
              'People of Parity',
              'Rust',
              'Wasm',
              'Partnerships',
              'Custom Solutions',
              'Security',
              'Ink!',
              'Parity Ethereum',
              'Parity Fether',
              'Light.js',
              'Company and Culture',
              'Parity Signer',
              'Zcash',
              'PICOPS',
              'Parity Bridge',
            ],
            copyright: 'Copyright 2021 Parity Technologies',
            feed_url: 'http://www.parity.io/rss.xml',
            ttl: '60',
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        locales: `en`,
        configPath: `${__dirname}/content/config.json`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./content/react-intl/en.json`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Parity Technologies`,
        short_name: `Parity Technologies`,
        start_url: `/`,
        background_color: `#F1F3F2`,
        theme_color: `#FF1864`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layouts/Layout.tsx`),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-twitter',
  ],
};
