import { arraySidebar } from "vuepress-theme-hope";

import { vscode } from './vscode.js';

const software = arraySidebar([
  "",
  "editor",
  "vscode/",
  "chrome",
  "git/",
  {
    text: "工具软件",
    icon: "tool",
    prefix: "tool/",
    children: [
      "",
      "power-toys",
      "powershell",
      {
        text: "Terminal",
        icon: "shell",
        link: "terminal/",
        prefix: "terminal/",
        children: ["get-started", "settings"],
      },
    ],
  },
  "apache",
  "nginx",
  "mysql/",
]);

export const softwareSidebar = {
  "/software/vscode/": vscode,
  "/software/": software,
};
