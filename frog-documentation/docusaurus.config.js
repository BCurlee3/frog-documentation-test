// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FROG INC.',
  tagline: 'Furniture Retail Operations Group',
  url: 'https://www.furnguy.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/frog_icon.png',
  //**************************************** */
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*******fix****************** */
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*******fix****************** */
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Customer Portal',
        logo: {
          alt: 'frog_icon',
          src: 'img/frog_icon.png',
        },
        items: [
          {
            /*
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Dashboard',
            */
            
              href: 'https://www.furnguy.com/portal',
              label: 'Dashboard',
              position: 'left',
           
          },
         /*{to: '/blog', label: 'Blog', position: 'left'},*/

          {
            href: 'https://www.furnguy.com/portal/account',
            label: 'Account',
            position: 'left',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/

          {
            href: 'https://www.furnguy.com/portal/messages',
            label: 'Messages',
            position: 'left',
        },
        /*{to: '/blog', label: 'Blog', position: 'left'},*/

        {
          type: 'doc',
          docId: 'DocOverview',
          position: 'left',
          label: 'Documentation',
        },
        ],
      },
      /*************added */
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Current Documentation',
                to: 'https://www.furnguy.com/portal',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin or maybe Facebook',
                href: 'https://www.furnguy.com/portal',
              },
              {
                label: 'Discord might be a good idea for us',
                href: 'https://www.furnguy.com/portal',
              },
              {
                label: 'Twitter',
                href: 'https://www.furnguy.com/portal',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            /*  {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              }, */
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Furniture Retail Operations Group, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
