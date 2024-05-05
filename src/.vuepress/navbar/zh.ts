import { navbar } from "vuepress-theme-hope";

// 导航栏配置（中文）
export const zhNavbar = navbar([
  "/",
  {
    text: "临时笔记",
    icon: "Time",
    prefix: "/casual/",
    children: [
      {
        text: "临时笔记",
        icon: "Time",
        link: "/casual/",
        activeMatch: "^/casual/$",
      },
      {
        text: "产品设计",
        children: ["design/"],
      },
      {
        text: "后端运维",
        children: ["linux/"],
      },
    ],
  },
  {
    text: "学习笔记",
    icon: "notes",
    prefix: "/notes/",
    children: [
      {
        text: "学习笔记",
        icon: "notes",
        link: "/notes/",
        activeMatch: "^/notes/$",
      },
      {
        text: "语言",
        children: ["java/", "python/", "javascript/", "typescript/"],
      },
      {
        text: "数据库",
        children: ["redis/", "mysql/", "mongodb/"],
      },
      {
        text: "搜索引擎",
        children: ["elasticsearch/"],
      },
      {
        text: "前端框架",
        children: ["vue/", "react/", "wechat/", "uni-app/"],
      },
      {
        text: "打包工具",
        children: ["vite/", "webpack/"],
      },
      {
        text: "移动开发",
        children: ["ios/", "android/", 'harmonyos/'],
      },
      {
        text: "后端框架",
        children: ["spring/", "my-batis/", "flask/", "django/"],
      },
      {
        text: "消息队列",
        children: ["rabbitmq/"],
      },
      {
        text: "后端运维",
        children: ["linux/", "docker/", "kubernetes/"],
      },
    ],
  },
  {
    text: "面试专题",
    icon: "yaoqingmianshi",
    prefix: "/audition/",
    children: [
      {
        text: "面试专题",
        icon: "yaoqingmianshi",
        link: "/audition/",
        activeMatch: "^/audition/$",
      },
      {
        text: "语言",
        children: ["java/", "python/", "javascript/", "typescript/"],
      },
      {
        text: "数据库",
        children: ["redis/", "mysql/", "mongodb/"],
      },
      {
        text: "搜索引擎",
        children: ["elasticsearch/"],
      },
      {
        text: "前端框架",
        children: ["vue/", "react/", "wechat/", "uni-app/"],
      },
      {
        text: "打包工具",
        children: ["vite/", "webpack/"],
      },
      {
        text: "移动开发",
        children: ["ios/", "android/", 'harmonyos/'],
      },
      {
        text: "后端框架",
        children: ["spring/", "my-batis/", "flask/", "django/"],
      },
      {
        text: "消息队列",
        children: ["rabbitmq/"],
      },
      {
        text: "后端运维",
        children: ["linux/", "docker/", "kubernetes/"],
      },
    ]
  },
  {
    text: "软件教程",
    icon: "details_example_software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "details_example_software",
        link: "/software/",
        activeMatch: "^/software/$",
      },
      "vscode/",
      "git/",
    ]
  },
]);
