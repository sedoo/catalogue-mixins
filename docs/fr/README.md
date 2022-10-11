---
home: true
heroText: Documentation des Mixins pour les projets de catalogue
tagline: Documentation pour les mixins communes aux différents projets de catalogue
actionText: Documentation
actionLink: /fr/mixins.html
---

### Démarrage rapide

**Installer la dépendance**

```bash
npm i @sedoo/catalogue-mixins
```

Dans **main.js**

```javascript
import CatalogueMixins from "@sedoo/catalogue-mixins";
Vue.use(CatalogueMixins);
```

Par défaut s'il n'y a pas d'**options**, le plugin instancie **toutes les mixins**.

**N'utiliser que certaines mixins**

```javascript
import CatalogueMixins from "@sedoo/catalogue-mixins";
const options = {
  i18n: true,
  style: true,
  visibility: false,
};
Vue.use(CatalogueMixins, options);
```

Dans l'exemple ci-dessus, la mixin `visibilityMixin` ne sera pas instanciée.

| Option     | Mixin associée                                             |
| ---------- | ---------------------------------------------------------- |
| i18n       | [i18nMixin](/fr/mixins.html#i18nmixin)                     |
| style      | [styleMixin](/fr/mixins.html#stylemixin)                   |
| visibility | [visibilityModeMixin](/fr/mixins.html#visibilitymodemixin) |

<Badge text="Attention" type="warn" /> Les mixins seront disponibles dans tous les composants du projet.

<Content slot-key="footer"/>

:::slot footer
[@sedoo/catalogue-mixins](https://www.npmjs.com/package/@sedoo/catalogue-mixins)

Sedoo | 2022
:::
