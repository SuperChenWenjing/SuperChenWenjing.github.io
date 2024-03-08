import { sidebar } from "vuepress-theme-hope";

// 临时笔记
import { casualSidebar } from './casual/index.js';

// 学习笔记
import { notesSidebar } from "./notes/index.js";

// 面试专题
import { auditionSidebar } from "./audition/index.js";

// 软件教程
import { softwareSidebar } from './software/index.js';

export const zhSidebar = sidebar({
  ...casualSidebar,
  "/casual/code/windows/": "structure",
  "/casual/code/website/html/": "structure",
  "/casual/code/website/css/": "structure",
  "/casual/code/node-js/": "structure",
  "/casual/code/github/": "structure",
  "/casual/code/basic/": "structure",
  "/casual/code/android/": "structure",

  ...notesSidebar,

  ...auditionSidebar,

  ...softwareSidebar,
  "/software/git/": "structure",

  // fallback
  "/": ["", "casual/", "notes/", "audition/", "software/"],
});
