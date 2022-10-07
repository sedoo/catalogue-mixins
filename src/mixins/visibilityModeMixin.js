export default {
  props: {
    visibleOnlyOn: {
      type: String,
      default: "",
    },
  },
  computed: {
    editing: {
      get() {
        return this.$store.getters.getIsUserEditingSheet;
      },
      set(value) {
        this.$store.commit("setUserIsEditingSheet", value);
      },
    },
    onlyEditionMode() {
      return this.visibleOnlyOn === "edition" && this.editing;
    },
    onlyOnConsultationMode() {
      return this.visibleOnlyOn === "consultation" && !this.editing;
    },
  },
};
