module.exports = {
  serviceWorker: true,
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
    logo: "https://www4.obs-mip.fr/wp-content-omp/uploads/sites/21/2017/07/sedoo-full.png",
    displayAllHeaders: true,
    locales: {
      "/": {
        label: "English",
        nav: [
          { text: 'Mixins', link: '/mixins.html' },
          { text: 'Utils', link: '/utils.html' }
        ],
        sidebar: ["mixins", "utils"],
      },
      "/fr/": {
        label: "Français",
        nav: [
          { text: 'Mixins', link: '/fr/mixins.html' },
          { text: 'Utils', link: '/fr/utils.html' },
        ],
        sidebar: ["mixins", "utils"],
      },
    },
  },
  base: "/",
};
