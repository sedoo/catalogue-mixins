import { applyPrimaryAndSecondaryColors } from "../utils";

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
      return applyPrimaryAndSecondaryColors(this.theme);
    }
  },
};
