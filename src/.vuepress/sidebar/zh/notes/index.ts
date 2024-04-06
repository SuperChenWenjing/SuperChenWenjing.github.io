import { arraySidebar } from "vuepress-theme-hope";

import { java, python, javascript, typescript } from './language/index.js';
import { mysql, redis, mongodb } from './database/index.js';
import { elasticsearch } from './search/index.js';
import { spring, springmvc, springboot, springcloud, mybatis, mybatisplus, flask, django } from './frameworks/index.js';
import { vue, wechat, uniapp } from './website/index.js';
import { vite, webpack } from './package/index.js';
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
    children: ["vue/", "wechat/", "uni-app/"]
  },
  {
    text: "打包工具",
    icon: "SERVICESPACKAGES",
    collapsible: false,
    children: ["vite/", "webpack/"]
  },
  {
    text: "后端框架",
    icon: "api",
    collapsible: false,
    children: ["spring/", "spring-mvc/", "spring-boot/", "spring-cloud/", "my-batis/", "my-batis-plus/", "flask/", "django/"]
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
  "/notes/spring-mvc/": springmvc,
  "/notes/spring-boot/": springboot,
  "/notes/spring-cloud/": springcloud,
  "/notes/redis/": redis,
  "/notes/mysql/": mysql,
  "/notes/mongodb/": mongodb,
  "/notes/my-batis/": mybatis,
  "/notes/my-batis-plus/": mybatisplus,
  "/notes/flask/": flask,
  "/notes/django/": django,
  "/notes/vue/": vue,
  "/notes/wechat/": wechat,
  "/notes/uni-app/": uniapp,
  "/notes/vite/": vite,
  "/notes/webpack/": webpack,
  "/notes/linux/": linux,

  "/notes/": notes,
};
