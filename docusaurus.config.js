// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkCodeSnippets from 'nil-remark-code-snippets';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '[[alloc] init] Documentation Portal',
  tagline: '',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://docs.allocin.it/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alloc-init', // Usually your GitHub org/user name.
  projectName: 'docs.allocin.it', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'log',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "@khannanov-nil/openrpc-docusaurus/dist/preset",
      /** @type {import('@khannanov-nil/openrpc-docusaurus/dist/preset').Options} */
      ({
        docs: {
          path: "alloc_init",
          routeBasePath: "alloc_init",
          remarkPlugins: [remarkMath, remarkCodeSnippets],
          rehypePlugins: [rehypeKatex],
          openrpc: {
            openrpcDocument: process.env.OPENRPC_JSON,
            path: "references",
            sidebarLabel: "JSON-RPC API",
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ]
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    'docusaurus-plugin-goatcounter' // We might need to generate a new api frr this.
    ,
    [
      'nil-docusaurus-plugin-typedoc',
      {
        out: "./nil/reference/client",
        outputFileStrategy: "members",
        fileExtension: ".mdx",
        useCodeBlocks: true,
        parametersFormat: "htmlTable",
        tsconfig: `tsconfig.json`,
        skipErrorChecking: true,
        sidebar: {
          "autoConfiguration": true,
          "pretty": false
        },
        readme: "none",
        indexFormat: "Table",
        sanitizeComments: "true",
        excludePrivate: "true",
        exclude: [
          "**/*refiners.ts*",
          "**/*assert.ts*",
        ],
      }

    ]
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        algolia: {
          appId: 'KDQGY81FVN',
          apiKey: '8ad8d801f2775ff3cf8c4433dfe290e4',
          indexName: 'nil',
          contextualSearch: true,
          searchParameters: {},
          searchPagePath: 'search',
          insights: false,
        },
        goatcounter: {
          code: 'docs-nil-foundation',
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,

        },
        navbar: {
          title: '[[alloc] init]',
          logo: {
            src: 'img/logoshort.png',
          },
          items: [
            {
              position: 'left',
              label: 'Theory & Concepts',
              to: '/alloc_init/'
            },
            {
              label: 'Manifesto',
              position: 'left',
              to: '/alloc_init/manifesto'
            },
            {
              label: 'Architecture',
              position: 'left',
              to: '/alloc_init/architecture'
            },
            {
              type: 'dropdown',
              label: 'Research & Papers',
              position: 'right',
              items: [
                {
                  label: 'Architecture',
                  href: 'https://www.notion.so/allocinit/PIPEs-Architecture-16636974087f80afa92fe3fe7bcc0eb1'
                },
                {
                  label: 'Bitcoin PIPEs',
                  href: 'https://www.allocin.it/uploads/placeholder-bitcoin.pdf'
                },
              ]
            }
          ],
        },
        footer: {
          links: [
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  to: 'https://discord.gg/KmTAEjbmM3'
                },
                {
                  label: 'GitHub',
                  to: 'https://github.com/alloc-init'
                },
                {
                  label: 'Telegram',
                  to: 'https://t.me/alloc-init'
                }
              ],
            }
          ],
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} [[alloc] init]`,
        },
        prism: {
          defaultLanguage: 'clike',
          theme: prismThemes.vsDark,
          darkTheme: prismThemes.vsDark,
          additionalLanguages: ['bash', 'solidity']
        },
      }),
};

export default config;
