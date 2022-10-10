export default {
  props: {
    language: { type: String, default: "en" },
  },
  watch: {
    language: {
      handler(value) {
        this.$i18n.locale = value;
      },
      immediate: true,
    },
  },
};
