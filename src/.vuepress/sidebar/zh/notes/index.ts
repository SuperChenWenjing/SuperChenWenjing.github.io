import { arraySidebar } from "vuepress-theme-hope";

import { java, python, javascript, typescript } from './language/index.js';
import { mysql, redis, mongodb } from './database/index.js';
import { elasticsearch } from './search/index.js';
import { spring, springboot, springcloud, mybatis, mybatisplus } from './back-end/index.js';
import { vue } from './website/index.js';
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
  "/notes/spring-boot/": springboot,
  "/notes/spring-cloud/": springcloud,
  "/notes/redis/": redis,
  "/notes/mysql/": mysql,
  "/notes/mongodb/": mongodb,
  "/notes/my-batis/": mybatis,
  "/notes/my-batis-plus/": mybatisplus,
  "/notes/vue/": vue,
  "/notes/linux/": linux,

  "/notes/": notes,
};
