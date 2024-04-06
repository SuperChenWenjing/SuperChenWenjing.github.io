import { arraySidebar } from "vuepress-theme-hope";

import { java, python, javascript, typescript } from './language/index.js';
import { redis, mysql, mongodb } from './database/index.js';
import { elasticsearch } from './search/index.js';
import { vue, wechat } from './website/index.js';
import { vite, webpack } from './package/index.js';
import { spring, springmvc, springboot, springcloud, mybatis, mybatisplus, flask, django } from './frameworks/index.js';
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
    children: ["vue/", "wechat/"]
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
  "/audition/wechat/": wechat,
  "/audition/vite/": vite,
  "/audition/webpack/": webpack,
  "/audition/spring/": spring,
  "/audition/spring-mvc/": springmvc,
  "/audition/spring-boot/": springboot,
  "/audition/spring-cloud/": springcloud,
  "/audition/my-batis/": mybatis,
  "/audition/my-batis-plus/": mybatisplus,
  "/audition/flask/": flask,
  "/audition/django/": django,
  "/audition/linux/": linux,
  "/audition/docker/": docker,
  "/audition/kubernetes/": kubernetes,

  "/audition": audition
};
