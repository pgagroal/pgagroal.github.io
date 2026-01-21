import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: "pgagroal",
   description: "Documentation website for pgagroal",
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
         { text: "Home", link: "/" },
         { text: "Documentation", link: "/documentation" },
         { text: "Configuration", link: "/configuration" },
         { text: "Metrics", link: "/metrics" },
         { text: "News", link: "/news" },
         { text: "Developers", link: "/developers" },
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
            link: "/gettingstarted"
         },
         {
            text: "Releases",
            link: "/releases"
         },
         {
            text: "Manuals",
            link: "/manuals"
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

