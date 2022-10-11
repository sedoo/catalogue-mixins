---
home: true
heroText: Catalogue Mixins Documentation
tagline: A documentation for the common mixins in the catalogue projects
actionText: Documentation
actionLink: /mixins.html
---

### Quick start guide

**Install dependency**

```bash
npm i @sedoo/catalogue-mixins
```

In **main.js**

```javascript
import CatalogueMixins from "@sedoo/catalogue-mixins";
Vue.use(CatalogueMixins);
```

By default if there are no **options**, the plugin will register **all mixins**.

**Cherry-pick**

```javascript
import CatalogueMixins from "@sedoo/catalogue-mixins";
const options = {
  i18n: true,
  style: true,
  visibility: false,
};
Vue.use(CatalogueMixins, options);
```

In the example above, `visibilityMixin` won't be registered.

| Option     | Mixin associée                                          |
| ---------- | ------------------------------------------------------- |
| i18n       | [i18nMixin](/mixins.html#i18nmixin)                     |
| style      | [styleMixin](/mixins.html#stylemixin)                   |
| visibility | [visibilityModeMixin](/mixins.html#visibilitymodemixin) |

<Badge text="Warning" type="warn" /> The mixins will be available globally for all the components of the project.

<Content slot-key="footer"/>

:::slot footer
[@sedoo/catalogue-mixins](https://www.npmjs.com/package/@sedoo/catalogue-mixins)

Sedoo | 2022
:::
