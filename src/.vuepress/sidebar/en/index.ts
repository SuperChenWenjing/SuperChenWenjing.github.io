import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/casual/": [""],
  "/en/notes/": [""],
  "/en/audition/": [""],
  "/en/software/": [""],

  // fallback
  "/en/": ["", "casual/", "notes/", "audition/", "software/"],
});
