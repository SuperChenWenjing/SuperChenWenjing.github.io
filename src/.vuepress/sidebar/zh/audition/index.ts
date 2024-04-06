import { arraySidebar } from "vuepress-theme-hope";

import { java, python, javascript, typescript } from './language/index.js';
import { redis, mysql, mongodb } from './database/index.js';
import { elasticsearch } from './search/index.js';
import { vue, react, wechat, uniapp } from './website/index.js';
import { ios, android, harmonyos } from './mobile/index.js';
import { vite, webpack } from './package/index.js';
import { spring, mybatis, flask, django } from './frameworks/index.js';
import { linux } from './linux/index.js';
import { docker, kubernetes } from './container/index.js';

const audition = arraySidebar([
  "",
  {
    text: "语言",
    icon: "houtaiguanli",
    collapsible: false,
    children: ["java/", "python/", "javascript/", "typescript/"]
  },
  {
    text: "数据库",
    icon: "database-",
    collapsible: false,
    children: ["redis/", "mysql/", "mongodb/"]
  },
  {
    text: "搜索引擎",
    icon: "SEARCH",
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
    icon: "a-AppStore",
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
    text: "后端运维",
    icon: "programmer-smile-code-program",
    collapsible: false,
    children: ["linux/", "docker/", "kubernetes/"],
  },
]);

export const auditionSidebar = {
  "/audition/java/": java,
  "/audition/python/": python,
  "/audition/javascript/": javascript,
  "/audition/typescript/": typescript,
  "/audition/redis/": redis,
  "/audition/mysql/": mysql,
  "/audition/mongodb/": mongodb,
  "/audition/elasticsearch/": elasticsearch,
  "/audition/vue/": vue,
  "/audition/react/": react,
  "/audition/wechat/": wechat,
  "/audition/uni-app/": uniapp,
  "/audition/vite/": vite,
  "/audition/webpack/": webpack,
  "/audition/ios/": ios,
  "/audition/android/": android,
  "/audition/harmonyos/": harmonyos,
  "/audition/spring/": spring,
  "/audition/my-batis/": mybatis,
  "/audition/flask/": flask,
  "/audition/django/": django,
  "/audition/linux/": linux,
  "/audition/docker/": docker,
  "/audition/kubernetes/": kubernetes,

  "/audition": audition
};
