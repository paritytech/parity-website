<p align="center">
  <a href="https://www.parity.io">
    <img alt="Parity Logo" src="https://www.parity.io/images/parity_logo_light.png" width="60" />
  </a>
</p>
<h1 align="center">
  Parity Technologies Website
</h1>
<h3 align="center">
  https://www.parity.io 
</h3>

### Status [Staging](https://staging.parity.io/) 
(Password protected; ask Parity Web-Guild for details)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a37b450c-3e18-4676-8ec3-e2d370366d43/deploy-status)](https://app.netlify.com/sites/parity-staging/deploys)

### Production [Live Site](https://www.parity.io)
[![Netlify Status](https://api.netlify.com/api/v1/badges/18555313-f0d7-4189-8176-b27ed50e17fa/deploy-status)](https://app.netlify.com/sites/parity-prod/deploys)


## 🚀 Quick start

1.  **Clone the Repo**

    ```shell
    # create a new folder to get going
    git clone https://github.com/paritytechmarcomms/parity-website-gatsby.git
    ```

2.  **Get Setup**

    Navigate into your new site’s directory and install all dependencies.

    ```shell
    cd parity-website-gatsby/
    yarn install
    ```
    
2.  **Development Server**

    Navigate into your new site’s directory and use the following command to start the development server locally, once the dependencies have been installed. 

    ```shell
    cd parity-website-gatsby/
    yarn develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!
    And your GraphiQL data layer is running at http://localhost:8000/__graphql

    Edit to see your site update in real-time!

## 🧰 Troubleshooting
Make sure to follow the following steps in order to troubleshoot any development issues: 

1. Version
  `NodeJS`: 14+ 
  `GatsbyCLI`: 2.26.1 
Before installing new plugins (especially for gatsby), make sure which version of CLI is supported. 

2. Clear Cache (for runtime errors) 
use `yarn clean` if the server is stale or having issues reloading in your browser of choice. 

## 📝 Content Contribution, PRs and merging flow

  - PR providing new features: open PR against `develop` branch
  - PR providing hotfixes open only against `main` (fixes will be merged into develop with next features)
  - Content Team uses Forestry CMS to make changes directly to `frstry-cms` branch.  Once finished, Content team requests a review and push to production that is handled by Web Guild, by merging branch to `main` and/or `develop` if needed.  

### Deploying new features
  - `develop` <- `main`: update content and fixes 
  - `develop` <- `feature/branch`: merging feature PRs
  - `main` <- `develop`: deploying new release to production

## 🎋 Forestry CMS Setup
  - **WebDev:** Configured directly through [Forestry CMS](https://app.forestry.io/) - Ask Web Guild for access.
  - **Content Team:** Forestry taps into `/content/` folder, sub-folder, & files for any content that needs to be exposed to Forestry CMS.
  - **Blog Setup:**  Blog content is located under `/blog/{blog-name}/` and directly editable through Forestry CMS.

## 🌍 i18n Setup (currently only English in use)
  This website uses two gatsby themes in-order to provide internationalization. 
  - [gatsby-theme-i18n](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/)
    - configured through `gatsby-config`. Currently only set to english.
  - [gatsby-theme-i18n-react-intl](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n-react-intl/?=gatsby-theme-i18n-react-intl)
    - All the transaltion strings are stored under `content/react-intl/` 
    - In order to activate another language, update configuration in `gatsby-config` and add `new-lang.json` under `content/react-intl/`
