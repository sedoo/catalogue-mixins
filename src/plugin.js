import { i18nMixin, styleMixin, visibilityModeMixin } from "./mixins";

function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;
  if (options === undefined || options.visibility === true) {
    Vue.mixin(visibilityModeMixin);
  }
  if (options === undefined || options.i18n === true) {
    Vue.mixin(i18nMixin);
  }
  if (options === undefined || options.style === true) {
    Vue.mixin(styleMixin);
  }
}

const plugin = {
  install,
};

export default plugin;
