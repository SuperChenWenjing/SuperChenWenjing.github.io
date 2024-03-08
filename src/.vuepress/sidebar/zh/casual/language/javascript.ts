import { arraySidebar } from "vuepress-theme-hope";

export const javascript = arraySidebar([
  "",
  {
    text: "JS 介绍",
    icon: "INFO",
    prefix: "intro/",
    children: ["", "history"],
  },
  {
    text: "快速上手",
    icon: "creative",
    link: "guide/",
    prefix: "guide/",
    children: [
      "get-started",
      "grammar",
      "data-structure",
      "variable",
      "boolean",
      "condition",
      "loop",
      "string",
      "array",
      "object",
      "exercise",
      "function",
      "map-and-set",
      "iterable",
    ],
  },
  {
    text: "数据类型",
    icon: "type",
    link: "types/",
    prefix: "types/",
    children: [
      "general",
      "boolean",
      "number",
      "string",
      "null-undefined",
      "object",
      "function",
      "array",
    ],
  },
  {
    text: "运算符",
    icon: "symbol",
    link: "operators/",
    prefix: "operators/",
    children: ["arithmetic", "comparison", "boolean", "bit", "priority"],
  },
  {
    text: "函数",
    icon: "function",
    link: "function/",
    prefix: "function/",
    children: [
      "intro",
      "declare",
      "call",
      "method",
      "scope",
      "destructuring",
      "this",
      "arrow-function",
      "higher-order-function",
      "map-and-reduce",
      "closure",
      "generator",
    ],
  },
  {
    text: "对象",
    icon: "object",
    link: "object/",
    prefix: "object/",
    children: [
      "intro",
      "create",
      "extend",
      "class",
      "wrap",
      "date",
      "regExp",
      "JSON",
    ],
  },
  {
    text: "浏览器",
    icon: "chrome",
    link: "browser/",
    prefix: "browser/",
    children: [
      "intro",
      "browser-object",
      "dom",
      "form",
      "file",
      "ajax",
      "promise",
      "canvas",
    ],
  },
  {
    text: "ES6",
    icon: "es6",
    link: "es6/",
    prefix: "es6/",
    children: [
      "intro",
      "let",
      "destructuring",
      "string",
      "regex",
      "number",
      "function",
      "array",
      "object",
      "symbol",
      "set-map",
      "proxy",
      "reflect",
      "promise",
      "iterator",
      "generator",
      "generator-async",
      "async",
      "class",
      "class-extends",
      "decorator",
      "module",
      "module-loader",
      "style",
      "spec",
      "arraybuffer",
    ],
  },
  "error",
]);
