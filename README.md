<p align="center">
  <a href="https://www.parity.io">
    <img alt="Parity Logo" src="https://www.parity.io/images/parity_logo_light.png" width="160" />
  </a>
</p>
<h1 align="center">
  Parity Technologies Website
</h1>
<h3 align="center">
  https://www.parity.io
</h3>

### Production [Live Site](https://www.parity.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/18555313-f0d7-4189-8176-b27ed50e17fa/deploy-status)](https://app.netlify.com/sites/parity-prod/deploys)

## 🚀 Quick start

1.  **Clone this Repo**

2.  **Get Setup**

    Navigate into your new site’s directory and install all dependencies.

    ```shell
    cd parity-website/
    yarn install
    ```

3.  **Development Server**

    Navigate into your new site’s directory and use the following command to start the development server locally, once the dependencies have been installed.

    ```shell
    cd parity-website/
    yarn develop
    ```

4.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!
    And your GraphiQL data layer is running at http://localhost:8000/\_\_graphql

    Edit to see your site update in real-time!

## 🧰 Troubleshooting

Make sure to follow the following steps in order to troubleshoot any development issues:

1. Version
   `NodeJS`: 14 (v14.19.3, use `.nvmrc`)
   `GatsbyCLI`: 2.26.1
   Before installing new plugins (especially for gatsby), make sure which version of CLI is supported.

2. Clear Cache (for runtime errors)
   use `yarn clean` if the server is stale or having issues reloading in your browser of choice.

## 📝 Content Contribution

- Content Team uses Forestry CMS to make changes directly to `forestry-cms` branch. Once finished, Content team requests a review and push to production that is handled by @paritytech/webops, by merging branch to `main`.

## 🎋 Forestry CMS Setup

- **Content Team:** Forestry taps into `/content/` folder, sub-folder, & files for any content that needs to be exposed to Forestry CMS.
- **Blog Setup:** Blog content is located under `/blog/{blog-name}/` and directly editable through Forestry CMS.

## 🌍 i18n Setup (currently only English in use)

This website uses two gatsby themes in-order to provide internationalization.

- [gatsby-theme-i18n](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/)
  - configured through `gatsby-config`. Currently only set to english.
- [gatsby-theme-i18n-react-intl](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n-react-intl/?=gatsby-theme-i18n-react-intl)
  - All the transaltion strings are stored under `content/react-intl/`
  - In order to activate another language, update configuration in `gatsby-config` and add `new-lang.json` under `content/react-intl/`
