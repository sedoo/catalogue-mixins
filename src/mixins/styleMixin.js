export default {
  props: {
    theme: {
      type: Object,
      default: () => ({
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12",
      }),
    },
  },
  computed: {
    applyTheme() {
      return this.applyPrimaryAndSecondaryColors(this.theme);
    },
  },
  methods: {
    applyPrimaryAndSecondaryColors(theme) {
      return theme
        ? Object.keys(theme).reduce((a, b) => {
            a["--" + b] = theme[b];
            return a;
          }, {})
        : "";
    },
  },
};
