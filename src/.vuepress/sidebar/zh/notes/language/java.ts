import { arraySidebar } from "vuepress-theme-hope";

export const java = arraySidebar([
  "",
  {
    text: "基础知识",
    icon: "Code",
    link: "core/",
    prefix: "core/",
    children: [
      "overview",
      "variable",
      "workflows",
      "array"
    ]
  },
  {
    text: "面向对象",
    icon: "Code",
    link: "oop/",
    prefix: "oop/",
    children: [
      "base",
      "advanced",
      "highlevel",
    ]
  },
  "exception/"
]);
