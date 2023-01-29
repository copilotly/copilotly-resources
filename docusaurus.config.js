// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Copilotly | Resources",
  tagline: "",
  url: "https://resources.copilotly.com",
  baseUrl: "/",
  // Allow broken links to be ignored.
  onBrokenLinks: "ignore",
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
          path: "resources",
          routeBasePath: "resources",
        },
        blog: {
          path: "copilots",
          routeBasePath: "copilots",
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
            href: "/resources/quick-start",
            label: "Resources",
            position: "left",
          },
          {
            href: "/copilots",
            label: "Copilots",
            position: "left",
          },
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
          {
            href: "https://www.copilotly.com/?utm_source=resources&utm_medium=referral&utm_campaign=resources",
            label: "Home",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Shortcuts",
            items: [
              {
                label: "Quick Start",
                to: "/resources/quick-start",
              },
              {
                label: "Installation",
                href: "/resources/category/installation",
              },
              {
                label: "User Guide",
                href: "/resources/category/user-guide",
              },
              {
                label: "Copilots",
                href: "/copilots",
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
