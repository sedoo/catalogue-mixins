import { i18nMixin, styleMixin, visibilityModeMixin } from "./mixins";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  registerI18nMixin(Vue);
  registerVisibilityMixin(Vue);
  Vue.mixin(styleMixin);
}

function registerI18nMixin(Vue) {
  let i18n;
  try {
    i18n = require("vue-i18n");
  } catch (er) {
    i18n = null;
    if (process.env.NODE_ENV === "development") {
      console.warn("Vue-i18n is required to use i18nMixin : npm i vue-i18n");
    }
  }

  if (i18n) {
    Vue.mixin(i18nMixin);
  }
}

function registerVisibilityMixin(Vue) {
  let visibility;
  try {
    visibility = require("vuex");
  } catch (er) {
    visibility = null;
    if (process.env.NODE_ENV === "development") {
      console.warn("Vuex is required to use visibilityMixin : npm i vuex");
    }
  }

  if (visibility) {
    Vue.mixin(visibilityModeMixin);
  }
}

const plugin = {
  install,
};

export default plugin;
