import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";
import { appendDatePlugin } from "vuepress-plugin-append-date";

import theme from "./theme.js";

export default <UserConfig>defineUserConfig({
  base: "/",

  dest: "dist",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "陈文景",
      description: "陈文景的个人博客。",
    },
    "/en/": {
      lang: "en-US",
      title: "Mr.Chen",
      description: "ChenWenjing's personal blog",
    },
  },

  markdown: {
    code: {
      lineNumbers: 10,
    },
  },

  theme,

  plugins: [appendDatePlugin()],

  // Enable it with pwa
  // shouldPrefetch: false,
});
