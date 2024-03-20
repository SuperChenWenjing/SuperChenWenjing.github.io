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
        children: ["/casual/design/"],
      },
      {
        text: "后端运维",
        children: ["/casual/linux/"],
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
        children: ["/notes/java/", "/notes/python/", "/notes/javascript/", "/notes/typescript/"],
      },
      {
        text: "数据库",
        children: ["/notes/redis/", "/notes/mysql/", "/notes/mongodb/"],
      },
      {
        text: "搜索引擎",
        children: ["/notes/elasticsearch/"],
      },
      {
        text: "前端框架",
        children: ["/notes/vue/", "/audition/weixin/"],
      },
      {
        text: "后端框架",
        children: ["/notes/spring/", "/notes/spring-boot/", "/notes/spring-cloud/", "/notes/my-batis/", "/notes/my-batis-plus/"],
      },
      {
        text: "后端运维",
        children: ["/notes/linux/", "/notes/docker/", "/notes/kubernetes/"],
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
        children: ["/audition/java/", "/audition/python/", "/audition/javascript/", "/audition/typescript/"],
      },
      {
        text: "数据库",
        children: ["/audition/redis/", "/audition/mysql/", "/audition/mongodb/"],
      },
      {
        text: "搜索引擎",
        children: ["/audition/elasticsearch/"],
      },
      {
        text: "前端框架",
        children: ["/audition/vue/", "/audition/weixin/"],
      },
      {
        text: "后端框架",
        children: ["/audition/spring/", "/audition/spring-boot/", "/audition/spring-cloud/", "/audition/my-batis/", "/audition/my-batis-plus/"],
      },
      {
        text: "后端运维",
        children: ["/audition/linux/", "/audition/docker/", "/audition/kubernetes/"],
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
