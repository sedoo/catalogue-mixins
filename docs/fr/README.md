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

<Badge text="Attention" type="warn" /> Les mixins seront disponibles dans tous les composants du projet.

<Content slot-key="footer"/>

:::slot footer
@sedoo/catalogue-mixins v0.0.1

Sedoo | 2022
:::
