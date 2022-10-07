# Mixins

## Généralités

Il n'est pas nécessaire de redéclarer une props / fonction / computed / etc. qui est déjà présente dans une mixin.

Le but étant que si un jour on change de façon de gérer la couleur ou une valeur par défaut, on n'aura qu'à la changer dans la mixin.

<br/>

**<Badge text="important" type="warning"/>**

**En résumé**

- Tous les composants qui ont besoin de la langue du catalogue doivent utiliser `i18nMixin`.
- Tous les composants qui ont besoin de la couleur du catalogue doivent utiliser `styleMixin`.
- Tous les composants qui ont besoin de gérer leur visibilité en fonction du mode edition/consultation doivent utiliser `visibilityModeMixin`.

## i18nMixin

Permet d'appliquer la langue du catalogue au composant.

### props

| nom      | type   | défaut | description        |
| -------- | ------ | ------ | ------------------ |
| language | String | "en"   | langue ("en"/"fr") |

### watch

Met à jour la propriété `language` en fonction de la **locale i18n**.

## styleMixin

Permet d'appliquer les couleurs du catalogue au composant.

### props

| nom   | type   | défaut                                                   | description                      |
| ----- | ------ | -------------------------------------------------------- | -------------------------------- |
| theme | Object | `{ primaryColor: "#0b6bb3", secondaryColor: "#f39c12" }` | couleur principale et secondaire |

### computed

`applyTheme` permet d'utiliser les couleurs dans la partie `<style>` du SFC.

```css
color: var(--primaryColor);
```

## visibilityModeMixin

Permet de gérer la visibilité du composant en fonction du mode (edition ou consultation).

Si rien n'est précisé [côté template](https://services.sedoo.fr/metadatatemplate/swagger-ui.html), le composant est toujours visible par défaut ou suivant les conditions définies dans le composant.

Ci-dessous, on dit que :

- `aeris-metadata-parameters` ne s'affiche qu'en mode **"edition"**,
- `opse-parameter-treeview-block` ne s'affiche qu'en mode **"consultation"**.

```json
{
    "name": "aeris-metadata-parameters",
    "editable": true,
    "props": {
        "visibleOnlyOn": "edition"
    }
},
{
    "name": "opse-parameter-treeview-block",
    "editable": true,
    "props": {
        "visibleOnlyOn": "consultation"
    }
},
```

### props

| nom           | type   | défaut | description                                                                                                          |
| ------------- | ------ | ------ | -------------------------------------------------------------------------------------------------------------------- |
| visibleOnlyOn | String | ""     | mode de visibilité ("edition" / "consultation" / ou les deux (si `visibleOnlyOn` n'est pas spécifié ou est `null` )) |

### computed

| nom                    | type    | défaut                                      | description                                                                                                      |
| ---------------------- | ------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| editing                | Boolean | `this.$store.getters.getIsUserEditingSheet` | Récupéré depuis le store du catalogue. Vaut `true` si on est en édition et `false` si on est en consultation.    |
| onlyEditionMode        | Boolean | `false`                                     | `true` si la propriété `visibleOnlyOn: "edition"` est présente dans le template et si `editing` est `true`       |
| onlyOnConsultationMode | Boolean | `false`                                     | `true` si la propriété `visibleOnlyOn: "consultation"` est présente dans le template et si `editing` est `false` |

## index.js

Permet d'importer toutes les mixins en une seule ligne :

```js
import { i18nMixin, styleMixin, visibilityMixin } from "../../../mixins";
```

**<Badge text="Raccourci dans Codium" type="success"/>**

Commencer à taper `mixins: []` puis le nom de la mixin à importer. Et sélectionner avec "Entrée".

La ligne `import {...} from ...` s'ajoute automatiquement.
