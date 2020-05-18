module.exports = {
  title: 'Trakas',
  tagline: 'Utilities for JavaScript and TypeScript',
  url: 'https://trakas.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'trakas', // Usually your GitHub org/user name.
  projectName: 'trakas.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Trakas',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        // {
        //   to: 'docs/getting-started/installation',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/trakas/trakas',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: true
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/doc1',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/trakas',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/trakas',
            // },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/trakasjs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/trakas/trakas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trakas Community. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/trakas/trakas-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/trakas/trakas-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
