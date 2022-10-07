# Mixins

## Get started

Apply to the `app` element or to root element of the parent if it's a module : 

```vue
<div id="app" :style="applyTheme">` 
```

## Introduction

It is not necessary to declare a props / function / computed / etc. if it is already in a mixin that you use.

The main goal being that if we decide to handle colors differently, we'll only need to modify the mixin.

<br/>

**<Badge text="important" type="warning"/>**

**TL;DR**

- All the components that need the language of the catalogue must use `i18nMixin`.
- All the components that need the colors of the catalogue must use `styleMixin`.
- All the components that need to handle their visibility depending on the edition/consultation mode must use `visibilityModeMixin`.

## i18nMixin

Applies the language of the catalogue to the component.

### props

| name     | type   | default | description          |
| -------- | ------ | ------- | -------------------- |
| language | String | "en"    | language ("en"/"fr") |

### watch

Updates the `language` props depending on the **i18n locale**.

## styleMixin

Applies the colors of the catalogue to the component.

### props

| name  | type   | default                                                  | description                                   |
| ----- | ------ | -------------------------------------------------------- | --------------------------------------------- |
| theme | Object | `{ primaryColor: "#0b6bb3", secondaryColor: "#f39c12" }` | primary and secondary colors of the catalogue |

### computed

`applyTheme` allows you to use the catalogue colors in the `<style>` of the SFC.

```css
color: var(--primaryColor);
```

## visibilityModeMixin

Handles the component's visibility depending on the mode (edition or consultation).

If nothing is specified on the [metadata template](https://services.sedoo.fr/metadatatemplate/swagger-ui.html), the component is either always visible or its visibility is handled directly within the component.

Cf. example below :

- `aeris-metadata-parameters` is displayed on **"edition"** mode only,
- `opse-parameter-treeview-block` is displayed on **"consultation"** mode only.

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

| name          | type   | default | description                                                                                               |
| ------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------- |
| visibleOnlyOn | String | ""      | visibility mode ("edition" / "consultation" / or both (if `visibleOnlyOn` isn't specified or is `null` )) |

### computed

| name                   | type    | default                                     | description                                                                                                              |
| ---------------------- | ------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| editing                | Boolean | `this.$store.getters.getIsUserEditingSheet` | Retrieved from the catalogue store. `true` if the user is in edition mode ; `false` if the user is in consultation mode. |
| onlyEditionMode        | Boolean | `false`                                     | `true` if the prop `visibleOnlyOn: "edition"` is specified in the template and if `editing` is `true`                    |
| onlyOnConsultationMode | Boolean | `false`                                     | `true` if the prop `visibleOnlyOn: "consultation"` is specified in the template and if `editing` is `false`              |

## index.js

Allows to import all mixins at once : 

```js
import { i18nMixin, styleMixin, visibilityMixin } from "../../../mixins";
```

**<Badge text="Shortcut in Codium" type="success"/>**

Start typing `mixins: []`, then the name of the mixin to import. And hit "Enter".

The line `import {...} from ...` adds itself at the top.