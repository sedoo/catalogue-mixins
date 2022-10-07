import { i18nMixin, styleMixin, visibilityModeMixin } from "./mixins";

const CatalogueMixins = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    if (this.$i18n !== undefined) {
      Vue.mixin(i18nMixin);
    }
    Vue.mixin(styleMixin);
    Vue.mixin(visibilityModeMixin);
  },
};

export default CatalogueMixins;
