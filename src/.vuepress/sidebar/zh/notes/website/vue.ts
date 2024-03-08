import { arraySidebar } from "vuepress-theme-hope";

export const vue = arraySidebar([
  "",
  "core/install",
  "core/get-started",
  "core/app",
  "core/template",
  "core/sfc",
  "compare",
  {
    text: "Vue Router",
    icon: "Vue",
    prefix: "router/",
    children: ["", "get-started"],
  },
]);
