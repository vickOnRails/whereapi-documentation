const { docs } = require("./sidebars");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "WhereAPI Documentation",
  tagline: "Documentation site for the WhereAPI product",
  url: "https://docs.whereapi.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "vickOnRails", // Usually your GitHub org/user name.
  projectName: "whereapi-documentation", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "WhereAPI Docs",
      logo: {
        alt: "Where API Documentation",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "https://whereapi.xyz",
          activeBasePath: "/",
          label: "WhereAPI",
          position: "right",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/vickOnRails/whereapi-documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/vickOnRails/whereapi-documentation",
        //     },
        //   ],
        // },
      ],
      copyright: `Built with Coffee, Afrobeats and Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            "https://github.com/vickOnRails/whereapi-documentation/edit/master",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [],
};
