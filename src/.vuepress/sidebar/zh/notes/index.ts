import { arraySidebar } from "vuepress-theme-hope";

import { java, python, javascript, typescript } from './language/index.js';
import { mysql, redis, mongodb } from './database/index.js';
import { elasticsearch } from './search/index.js';
import { spring, mybatis, flask, django } from './frameworks/index.js';
import { vue, react, wechat, uniapp } from './website/index.js';
import { ios, android, harmonyos } from './mobile/index.js';
import { vite, webpack } from './package/index.js';
import { rabbitmq } from './mq/index.js';
import { linux } from './linux/index.js';
import { docker, kubernetes } from './container/index.js';

const notes = arraySidebar([
  "",
  {
    text: "语言",
    icon: "houtaiguanli",
    collapsible: false,
    children: ["java/", "python/", "javascript/", "typescript/"]
  },
  {
    text: "数据库",
    icon: "database",
    collapsible: false,
    children: ["redis/", "mysql/", "mongodb/"]
  },
  {
    text: "搜索引擎",
    icon: "search",
    collapsible: false,
    children: ["elasticsearch/"]
  },
  {
    text: "前端框架",
    icon: "HTML",
    collapsible: false,
    children: ["vue/", "react/", "wechat/", "uni-app/"]
  },
  {
    text: "打包工具",
    icon: "SERVICESPACKAGES",
    collapsible: false,
    children: ["vite/", "webpack/"]
  },
  {
    text: "移动开发",
    icon: "AppStore",
    collapsible: false,
    children: ["ios/", "android/", "harmonyos/"]
  },
  {
    text: "后端框架",
    icon: "api",
    collapsible: false,
    children: ["spring/", "my-batis/", "flask/", "django/"]
  },
  {
    text: "消息队列",
    icon: "message",
    collapsible: false,
    children: ["rabbitmq/"]
  },
  {
    text: "后端运维",
    icon: "programmer-smile-code-program",
    collapsible: false,
    children: ["linux/", "docker/", "kubernetes/"],
  }
]);

export const notesSidebar = {
  "/notes/docker/": docker,
  "/notes/kubernetes/": kubernetes,
  "/notes/elasticsearch/": elasticsearch,
  "/notes/java/": java,
  "/notes/python/": python,
  "/notes/javascript/": javascript,
  "/notes/typescript/": typescript,
  "/notes/spring/": spring,
  "/notes/rabbitmq/": rabbitmq,
  "/notes/redis/": redis,
  "/notes/mysql/": mysql,
  "/notes/mongodb/": mongodb,
  "/notes/my-batis/": mybatis,
  "/notes/flask/": flask,
  "/notes/django/": django,
  "/notes/vue/": vue,
  "/notes/react/": react,
  "/notes/wechat/": wechat,
  "/notes/uni-app/": uniapp,
  "/notes/vite/": vite,
  "/notes/webpack/": webpack,
  "/notes/ios/": ios,
  "/notes/android/": android,
  "/notes/harmonyos/": harmonyos,
  "/notes/linux/": linux,

  "/notes/": notes,
};
