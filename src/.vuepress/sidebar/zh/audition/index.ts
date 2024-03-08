import { arraySidebar } from "vuepress-theme-hope";

import { java, javascript, typescript } from './language/index.js';
import { redis, mysql, mongodb } from './database/index.js';
import { elasticsearch } from './search/index.js';
import { vue } from './website/index.js';
import { spring, springboot, springcloud, mybatis, mybatisplus } from './back-end/index.js';
import { linux } from './linux/index.js';
import { docker, kubernetes } from './container/index.js';

const audition = arraySidebar([
  "",
  {
    text: "语言",
    icon: "houtaiguanli",
    collapsible: false,
    children: ["java/", "javascript/", "typescript/"]
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
    children: ["vue/"]
  },
  {
    text: "后端框架",
    icon: "api",
    collapsible: false,
    children: ["spring/", "spring-boot/", "spring-cloud/", "my-batis/", "my-batis-plus/"]
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
  "/audition/javascript/": javascript,
  "/audition/typescript/": typescript,
  "/audition/redis/": redis,
  "/audition/mysql/": mysql,
  "/audition/mongodb/": mongodb,
  "/audition/elasticsearch/": elasticsearch,
  "/audition/vue/": vue,
  "/audition/spring/": spring,
  "/audition/spring-boot/": springboot,
  "/audition/spring-cloud/": springcloud,
  "/audition/my-batis/": mybatis,
  "/audition/my-batis-plus/": mybatisplus,
  "/audition/linux/": linux,
  "/audition/docker/": docker,
  "/audition/kubernetes/": kubernetes,

  "/audition": audition
};
