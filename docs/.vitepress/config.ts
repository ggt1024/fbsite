import { defineConfig } from "vitepress";

const base = "/";

export default defineConfig({
  base: base,

  lang: "en-US",
  title: "FilmBudd",
  description: "The best or nothing.",

  head: [
    ["meta", { name: "theme-color", content: "#ff9900" }],

    ["script", { type: "text/javascript", src: base + "libs/use51la.js" }],

    // google analysis
    //   ref: https://github.com/vuejs/vitepress/issues/1131
    ["script", { type: "text/javascript", src: "//www.googletagmanager.com/gtag/js?id=G-PQ22PRMQR8", async: "true" }],
    ["script", { type: "text/javascript", src: base + "libs/usega.js" }],

    // google adsense
    [
      "script",
      {
        type: "text/javascript",
        src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2173571332281531",
        async: "true",
        crossorigin: "anonymous",
      },
    ],
  ],

  themeConfig: {
    logo: "/assets/logo.png",
    docFooter: {
      prev: "Prev",
      next: "Next",
    },
    footer: {
      copyright: "Copyright © 2021~present Guangzhou GamMaan Tech LLC",
    },

    nav: nav(),

    sidebar: {
      "/faqs/": sitebarFaqs(),
    },
  },
});

function nav() {
  return [
    {
      text: "FAQs",
      link: "/faqs/index",
      activeMatch: "/faqs/",
    },

    {
      text: "伽马官网",
      link: "https://ggt1024.com/",
    },
  ];
}

function sitebarFaqs() {
  return [
    {
      text: "Title1",
      collapsible: true,
      items: [{ text: "TBD", link: "/faqs/index" }],
    },
  ];
}
