module.exports = {
  serviceWorker: true,
  base: "/catalogue-mixins/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Catalogue Mixins",
      description: "Global mixins to be used in the catalogue projects",
    },
    "/fr/": {
      lang: "fr-FR",
      title: "Catalogue Mixins",
      description: "Mixins globales à utiliser dans les projets du catalogue",
    },
  },
  themeConfig: {
    repo: "sedoo/catalogue-mixins",
    logo: "https://www4.obs-mip.fr/wp-content-omp/uploads/sites/21/2017/07/sedoo-full.png",
    displayAllHeaders: true,
    locales: {
      "/": {
        label: "English",
        nav: [
          { text: "Mixins", link: "/mixins.html" },
          { text: "Test", link: "/test.html" },
        ],
        sidebar: ["mixins", "test"],
      },
      "/fr/": {
        label: "Français",
        nav: [
          { text: "Mixins", link: "/fr/mixins.html" },
          { text: "Test", link: "/fr/test.html" },
        ],
        sidebar: ["/fr/mixins", "/fr/test"],
      },
    },
  },
};
