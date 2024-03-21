import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({

  darkmode: "switch", // 在深色模式、浅色模式和自动之间切换 (默认)

  hostname: "https://SuperChenWenjing.github.io", // 当前网站部署到的域名

  // 全局默认作者
  author: {
    name: "陈文景",
    email: "2646530197@qq.com",
    url: "https://superchenwenjing.github.io",
  },

  favicon: "/favicon.ico",

  // 图标库：https://www.iconfont.cn
  iconAssets: [
    "//at.alicdn.com/t/c/font_3538491_0lwx6vcdi6uh.css",
    "//at.alicdn.com/t/c/font_4451850_4j5pyb6ipvn.css", // 拓展图标
  ],

  logo: "/logo.svg", // 导航栏图标

  fullscreen: true, // 是否显示全屏按钮

  repo: "SuperChenWenjing/SuperChenWenjing.github.io", // 导航栏中的仓库链接（会默认添加上：https://github.com/）

  repoDisplay: false, // 是否在导航栏显示仓库链接

  docsDir: "src",

  // 多语言配置
  locales: {
    /**
     * 中文配置
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: '<a href="/about/site.html">关于网站</a>',

      copyright: "基于 MIT 协议 Copyright © 2019-至今 陈文景",

      displayFooter: true, // 是否显示页脚

      blog: {
        name: "陈文景",
        avatar: "/avatar.jpeg",
        roundAvatar: true,
        description: "一个全栈开发工程师",
        timeline: "持续更新中...", // 时间线顶部配置：https://theme-hope.vuejs.press/zh/guide/blog/timeline.html
        intro: "/about/", // 个人介绍页地址
        medias: {
          GitHub: "https://superchenwenjing.github.io",
          BiliBili: "https://superchenwenjing.github.io",
          QQ: "https://superchenwenjing.github.io",
          Qzone: "https://superchenwenjing.github.io",
          Gmail: "https://superchenwenjing.github.io",
          Zhihu: "https://superchenwenjing.github.io",
          Steam: "https://superchenwenjing.github.io",
          Weibo: "https://superchenwenjing.github.io",
          Gitee: "https://superchenwenjing.github.io",
          Twitter: "https://superchenwenjing.github.io",
          Telegram: "https://superchenwenjing.github.io",
        },
      },

      // 页面元信息
      metaLocales: {
        editLink: "编辑此页", // 默认值就是“编辑此页”
      },
    },

    /**
     * 英文配置
     */
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: '<a href="/en/about/site.html">About the website</a>',

      copyright: "MIT Licensed Copyright © 2019-present ChenWenjing",

      displayFooter: true,

      blog: {
        name: "ChenWenjing",
        avatar: "/avatar.jpeg",
        roundAvatar: true,
        description: "A full-stack development engineer",
        timeline: "Continuously updated...",
        intro: "/en/about/",
        medias: {
          Gmail: "https://superchenwenjing.github.io",
          Steam: "https://superchenwenjing.github.io",
          GitHub: "https://superchenwenjing.github.io",
          Twitter: "https://superchenwenjing.github.io",
          Telegram: "https://superchenwenjing.github.io",
        },
      },

      metaLocales: {
        editLink: "Edit this page",
      },
    },
  },

  // 文章底部的最后更新时间：https://theme-hope.vuejs.press/zh/guide/feature/meta.html
  // hotReload: true, // 开发模式不建议开启（生产模式默认打开）

  plugins: {
    blog: {
      excerptLength: 0,
    },

    searchPro: true, // 搜索功能：https://theme-hope.vuejs.press/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepress-plugin-search-pro

    // 配置文档：https://theme-hope.vuejs.press/zh/guide/feature/comment.html
    comment: {
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press", // TODO 注意：待替换为自己的评论服务器地址！
    },

    components: {
      // 添加需要用到的组件
      components: ["Badge", "VPCard"],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true, // 是否支持代码案例
      figure: false, // 是否在图片下方以当前图片名称作为图片的描述显示
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      revealJs: true,
      sub: true, // 是否启用下角标功能
      sup: true, // 是否启用上角标
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 使用 KaTeX 启用 TeX 支持（KaTeX 与 mathjax 只能启用其中一个，并且 katex 具有更高的优先级）
      // install katex before enabling it
      // katex: true,

      // 使用 mathjax 启用 TeX 支持（KaTeX 与 mathjax 只能启用其中一个，并且 katex 具有更高的优先级）
      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // Vue 交互演示
      // install @vue/repl before enabling it
      // vuePlayground: true,

      // 是否启用 Sandpack 交互演示
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
