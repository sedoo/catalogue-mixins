import { i18nMixin, styleMixin, visibilityModeMixin } from "./mixins";

const CatalogueMixins = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.mixin({ i18nMixin, styleMixin, visibilityModeMixin });
  },
};

export default CatalogueMixins;
