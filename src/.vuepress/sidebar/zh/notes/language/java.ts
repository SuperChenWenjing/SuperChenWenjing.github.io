import { arraySidebar } from "vuepress-theme-hope";

export const java = arraySidebar([
  "",
  "base/",
  "oop/",
  "collection/",
  "exception/",
  "thread/",
  "jvm/",
  {
    text: "新特性",
    icon: "Code",
    link: "new/",
    prefix: "new/",
    children: [
      "jdk8",
      "jdk9",
      "jdk10",
      "jdk11",
      "jdk12",
      "jdk13",
      "jdk14",
      "jdk15",
      "jdk16",
      "jdk17",
      "jdk18",
      "jdk19",
      "jdk20",
      "jdk21"
    ]
  }
]);
