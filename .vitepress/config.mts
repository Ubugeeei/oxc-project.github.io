import { defineConfig } from "vitepress";
import blogSidebar from "./sidebar.blog.json";

export default defineConfig({
  srcDir: "src",
  srcExclude: [],
  outDir: "build",
  base: "/",
  title: "The JavaScript Oxidation Compiler",
  titleTemplate: ":title | The JavaScript Oxidation Compiler",
  description:
    "A collection of high-performance JavaScript tools written in Rust",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png",
      },
    ],
    [
      "meta",
      {
        property: "description",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],

    // og
    [
      "meta",
      {
        property: "og:title",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "A collection of high-performance JavaScript tools written in Rust",
      },
    ],
    ["meta", { property: "og:site_name", content: "OXC" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://github.com/oxc-project",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://github.com/oxc-project/oxc-assets/blob/main/preview-white.png?raw=true",
      },
    ],
    // Twitter (X)
    ["meta", { name: "twitter:site", content: "OXC" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "A collection of high-performance JavaScript tools written in Rust",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content:
          "https://github.com/oxc-project/oxc-assets/blob/main/preview-white.png?raw=true",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image:alt",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],
  ],

  lastUpdated: true,
  themeConfig: {
    siteTitle: "OXC",
    logo: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png",
    logoLink: "/",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Getting Started", link: "/docs/guide/introduction" },
      { text: "Contribute", link: "/docs/contribute/intro" },
      { text: "Learn", link: "/docs/learn/ecosystem" },
      { text: "Blog", link: "/blog/2022-02-10-js-tooling-research" },
      {
        text: "Playground",
        target: "_blank",
        link: "https://oxc-project.github.io/oxc/playground/",
      },
    ],
    socialLinks: [
      { icon: "twitter", link: "https://x.com/boshen_c" },
      { icon: "discord", link: "https://discord.gg/9uXCAwqQZW" },
      { icon: "github", link: "https://github.com/oxc-project" },
    ],
    editLink: {
      pattern: "https://github.com/oxc-project/oxc/edit/main/src/:path",
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
      },
    },
    footer: {
      copyright: "© 2023 OXC Project",
    },
    sidebar: {
      "/docs/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/docs/guide/introduction" },
            { text: "Benchmarks", link: "/docs/guide/benchmarks" },
          ],
        },
        {
          text: "Usage",
          items: [
            { text: "Linter", link: "/docs/guide/usage/linter" },
            { text: "Parser", link: "/docs/guide/usage/parser" },
            { text: "Resolver", link: "/docs/guide/usage/resolver" },
          ],
        },
      ],
      "/docs/contribute/": [
        { text: "Intro", link: "/docs/contribute/intro" },
        { text: "Rules", link: "/docs/contribute/rules" },
        {
          items: [
            { text: "Parser", link: "/docs/contribute/parser" },
            { text: "Linter", link: "/docs/contribute/linter" },
            { text: "Prettier", link: "/docs/contribute/prettier" },
            { text: "Resolver", link: "/docs/contribute/resolver" },
            {
              text: "Transformer",
              link: "/docs/contribute/transformer",
            },
            { text: "Formatter", link: "/docs/contribute/formatter" },
            { text: "Codegen", link: "/docs/contribute/codegen" },
            { text: "Minifier", link: "/docs/contribute/minifier" },
            { text: "VSCode", link: "/docs/contribute/vscode" },
          ],
        },
        { text: "Performance", link: "/docs/contribute/performance" },
        { text: "Showcase", link: "/docs/contribute/showcase" },
      ],
      "/docs/learn/": [
        {
          text: "Architecture",
          items: [
            { text: "Intro", link: "/docs/learn/architecture/intro" },
            {
              text: "Parser",
              link: "/docs/learn/architecture/parser",
            },
            {
              text: "Linter",
              link: "/docs/learn/architecture/linter",
            },
            {
              text: "Resolver",
              link: "/docs/learn/architecture/resolver",
            },
            {
              text: "Transformer",
              link: "/docs/learn/architecture/transformer",
            },
            {
              text: "Formatter",
              link: "/docs/learn/architecture/formatter",
            },
            {
              text: "Minifier",
              link: "/docs/learn/architecture/minifier",
            },
          ],
        },
        {
          text: "ECMAScript",
          items: [
            { text: "Spec", link: "/docs/learn/ecmascript/spec" },
            {
              text: "Grammar",
              link: "/docs/learn/ecmascript/grammar",
            },
          ],
        },
        { text: "Performance", link: "/docs/learn/performance" },
        { text: "Ecosystem", link: "/docs/learn/ecosystem" },
        { text: "References", link: "/docs/learn/references" },
      ],
      "/blog/": blogSidebar,
    },
  },
});
