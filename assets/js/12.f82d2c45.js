(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mixins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mixins"}},[t._v("#")]),t._v(" Mixins")]),t._v(" "),e("h2",{attrs:{id:"how-to-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),e("p",[e("strong",[t._v("Install dependency")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @sedoo/catalogue-mixins\n")])])]),e("p",[t._v("In "),e("strong",[t._v("main.js")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CatalogueMixins "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@sedoo/catalogue-mixins"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CatalogueMixins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("Badge",{attrs:{text:"Warning",type:"warn"}}),t._v(" The mixins will be available globally for all the components of the project. This means you won't need to redeclare props, computed properties, and functions listed below.\n"),e("h2",{attrs:{id:"i18nmixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i18nmixin"}},[t._v("#")]),t._v(" i18nMixin")]),t._v(" "),e("p",[t._v("Applies the language of the catalogue to the component.")]),t._v(" "),e("h3",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("language")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v('"en"')]),t._v(" "),e("td",[t._v('language ("en"/"fr")')])])])]),t._v(" "),e("h3",{attrs:{id:"watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),e("p",[t._v("Updates the "),e("code",[t._v("language")]),t._v(" props depending on the "),e("strong",[t._v("i18n locale")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"stylemixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stylemixin"}},[t._v("#")]),t._v(" styleMixin")]),t._v(" "),e("p",[t._v("Applies the colors of the catalogue to the component.")]),t._v(" "),e("h3",{attrs:{id:"props-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props-2"}},[t._v("#")]),t._v(" props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("theme")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[e("code",[t._v('{ primaryColor: "#0b6bb3", secondaryColor: "#f39c12" }')])]),t._v(" "),e("td",[t._v("primary and secondary colors of the catalogue")])])])]),t._v(" "),e("h3",{attrs:{id:"computed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),e("p",[e("code",[t._v("applyTheme")]),t._v(" allows you to use the catalogue colors in the "),e("code",[t._v("<style>")]),t._v(" of the SFC.")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--primaryColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"how-to-use-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-2"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),e("p",[t._v("Apply to the "),e("code",[t._v("app")]),t._v(" element or to root element of the parent if it's a module :")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":style")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("applyTheme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("`\n")])])]),e("p",[e("RouterLink",{attrs:{to:"/test.html"}},[t._v("See example here")])],1),t._v(" "),e("h2",{attrs:{id:"visibilitymodemixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visibilitymodemixin"}},[t._v("#")]),t._v(" visibilityModeMixin")]),t._v(" "),e("p",[t._v("Handles the component's visibility depending on the mode (edition or consultation).")]),t._v(" "),e("p",[t._v("If nothing is specified on the "),e("a",{attrs:{href:"https://api.sedoo.fr/aeris-metadata-template-rest/swagger-ui/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("metadata template"),e("OutboundLink")],1),t._v(", the component is either always visible or its visibility is handled directly within the component.")]),t._v(" "),e("p",[t._v("Cf. example below :")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("aeris-metadata-parameters")]),t._v(" is displayed on "),e("strong",[t._v('"edition"')]),t._v(" mode only,")]),t._v(" "),e("li",[e("code",[t._v("opse-parameter-treeview-block")]),t._v(" is displayed on "),e("strong",[t._v('"consultation"')]),t._v(" mode only.")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aeris-metadata-parameters"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"props"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"visibleOnlyOn"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"edition"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"opse-parameter-treeview-block"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"props"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"visibleOnlyOn"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consultation"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"props-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props-3"}},[t._v("#")]),t._v(" props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("visibleOnlyOn")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v('""')]),t._v(" "),e("td",[t._v('visibility mode ("edition" / "consultation" / or both (if '),e("code",[t._v("visibleOnlyOn")]),t._v(" isn't specified or is "),e("code",[t._v("null")]),t._v(" ))")])])])]),t._v(" "),e("h3",{attrs:{id:"computed-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#computed-2"}},[t._v("#")]),t._v(" computed")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("editing")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",[t._v("this.$store.getters.getIsUserEditingSheet")])]),t._v(" "),e("td",[t._v("Retrieved from the catalogue store. "),e("code",[t._v("true")]),t._v(" if the user is in edition mode ; "),e("code",[t._v("false")]),t._v(" if the user is in consultation mode.")])]),t._v(" "),e("tr",[e("td",[t._v("onlyEditionMode")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[e("code",[t._v("true")]),t._v(" if the prop "),e("code",[t._v('visibleOnlyOn: "edition"')]),t._v(" is specified in the template and if "),e("code",[t._v("editing")]),t._v(" is "),e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[t._v("onlyOnConsultationMode")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[e("code",[t._v("true")]),t._v(" if the prop "),e("code",[t._v('visibleOnlyOn: "consultation"')]),t._v(" is specified in the template and if "),e("code",[t._v("editing")]),t._v(" is "),e("code",[t._v("false")])])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);