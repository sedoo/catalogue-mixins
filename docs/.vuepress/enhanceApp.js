import CatalogueMixins from "../../src/plugin";

export default ({ Vue }) => {
  Vue.use(CatalogueMixins, {
    i18n: false, // leave this for the docs:build to pass
  });
};
