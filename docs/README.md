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

<Badge text="Warning" type="warn" /> The mixins will be available globally for all the components of the project.

<Content slot-key="footer"/>

:::slot footer
[@sedoo/catalogue-mixins](https://www.npmjs.com/package/@sedoo/catalogue-mixins)

Sedoo | 2022
:::
