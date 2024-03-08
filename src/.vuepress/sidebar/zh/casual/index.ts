import { arraySidebar } from "vuepress-theme-hope";

import { design } from "./design.js";
import { dart, javascript, language, markdown, python, typescript, } from "./language/index.js";
import { linux } from "./linux.js";
import { jquery, website } from "./website/index.js";

export const casual = arraySidebar([
  "",
  {
    text: "基础介绍",
    icon: "Code",
    children: ["code/basic/", "code/windows/", "code/github/"],
  },
  {
    text: "前端开发",
    icon: "HTML",
    children: [
      "code/website/",
      "code/node-js/",
      "code/angular/",
      "code/react/",
    ],
  },
  {
    text: "语言",
    icon: "houtaiguanli",
    prefix: "code/language/",
    link: "code/language/",
    children: [
      "learning",
      "js/",
      "typescript/",
      "python/",
      "json/",
      "yaml/",
      "linter/",
    ],
  },
  "code/android/",
  "code/back-end/",
]);

export const casualSidebar = {
  "/casual/linux/": linux,
  "/casual/design/": design,
  "/casual/code/website/jquery/": jquery,
  "/casual/code/website/": website,
  "/casual/code/language/typescript/": typescript,
  "/casual/code/language/python/": python,
  "/casual/code/language/markdown/": markdown,
  "/casual/code/language/js/": javascript,
  "/casual/code/language/dart/": dart,
  "/casual/code/language/": language,

  "/casual/": casual,
};
