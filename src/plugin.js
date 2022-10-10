import { i18nMixin, styleMixin, visibilityModeMixin } from "./mixins";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  if (this.$i18n !== undefined) {
    Vue.mixin(i18nMixin);
  }
  Vue.mixin(styleMixin);
  if (this.$store !== undefined) {
    Vue.mixin(visibilityModeMixin);
  }
}

const plugin = {
  install
}

export default plugin;
