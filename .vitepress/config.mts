import { defineConfig } from "vitepress";
import { withSharedManualReferences } from "./shared-manual-references.mts";
import manualSidebar from "./sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: "pgagroal",
   description: "Documentation website for pgagroal",
   ignoreDeadLinks: [
      /^https?:\/\/localhost/,
      /\/doc\/manual\/README/
   ],
   srcExclude: [
      "vendor/**",
      "node_modules/**",
      "_site/**",
   ],
   markdown: {
      config(md) {
         withSharedManualReferences(md, process.cwd());
      }
   },
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
         { text: "Home", link: "/" },
         { text: "Documentation", link: "/doc/GETTING_STARTED" },
         { text: "Configuration", link: "/doc/CONFIGURATION" },
         { text: "Metrics", link: "/doc/PROMETHEUS" },
         { text: "News", link: "/news" },
         { text: "Developers", link: "/doc/DEVELOPERS" },
         { text: "About", link: "/about" },
      ],

      footer: {
         message:
            "<span class='vp-doc'><a href='https://pgagroal.github.io/'>High-performance connection pool for</a></span> for <span class='vp-doc'><a href='https://www.postgresql.org/'>PostgreSQL</a></span>",
         copyright:
            "© 2026 <span class='vp-doc'><a href='https://pgagroal.github.io/'>The pgagroal community</a></span> (<span class='vp-doc'><a href='http://creativecommons.org/licenses/by/4.0/'>CC BY 4.0</a></span>)",
      },

      sidebar: [
         {
            text: "Home",
            link: "/"
         },
         {
            text: "Getting Started",
            link: "/doc/GETTING_STARTED"
         },
         {
            text: "Configuration",
            link: "/doc/CONFIGURATION"
         },
         {
            text: "Releases",
            link: "/releases"
         },
         {
            text: "PDF Manual",
            link: "/manuals"
         },
         {
            text: "User Manual",
            collapsed: false,
            items: manualSidebar
         },
         {
            text: "Code of Conduct",
            link: "/CODE_OF_CONDUCT"
         },
         {
            text: "GitHub Issues",
            link: "https://github.com/pgagroal/pgagroal/issues",
         },
         {
            text: "GitHub Discussions",
            link: "https://github.com/pgagroal/pgagroal/discussions",
         },
         {
            text: "LICENSE",
            link: "https://opensource.org/licenses/BSD-3-Clause",
         },
      ],

      socialLinks: [{ icon: "github", link: "https://github.com/pgagroal" }],
   },
});
