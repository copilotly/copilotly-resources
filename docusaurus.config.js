// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Resources",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "copilotly", // Usually your GitHub org/user name.
  projectName: "resources", // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://resources.copilotly.com",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Copilotly Logo",
          src: "img/logo-text.png",
        },
        items: [
          {
            href: "https://discord.gg/tS8qddMhXa",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/copilotly/resources",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Our Blog",
                href: "https://www.copilotly.com/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/copilotly/resources",
              },
              {
                label: "Discord",
                href: "https://discord.gg/tS8qddMhXa",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/copilotlyai",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                href: "https://app.copilotly.com/privacy",
              },
              {
                label: "Terms of Service",
                href: "https://app.copilotly.com/terms",
              },
              {
                label: "Ethics & Responsibility",
                href: "https://app.copilotly.com/ethics",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Copilotly.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
