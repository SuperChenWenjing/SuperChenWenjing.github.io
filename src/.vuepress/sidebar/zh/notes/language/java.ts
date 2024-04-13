import { arraySidebar } from "vuepress-theme-hope";

export const java = arraySidebar([
  "",
  "base/",
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
  "collection/",
  "exception/",
  "thread/"
]);
