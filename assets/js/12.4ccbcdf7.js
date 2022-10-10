(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins"}},[t._v("#")]),t._v(" Mixins")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("It is not necessary to declare a props / function / computed / etc. if it is already in a mixin that you use.")]),t._v(" "),a("p",[t._v("The main goal being that if we decide to handle colors differently, we'll only need to modify the mixin.")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[a("Badge",{attrs:{text:"important",type:"warning"}})],1)]),t._v(" "),a("p",[a("strong",[t._v("TL;DR")])]),t._v(" "),a("ul",[a("li",[t._v("All the components that need the language of the catalogue must use "),a("code",[t._v("i18nMixin")]),t._v(".")]),t._v(" "),a("li",[t._v("All the components that need the colors of the catalogue must use "),a("code",[t._v("styleMixin")]),t._v(".")]),t._v(" "),a("li",[t._v("All the components that need to handle their visibility depending on the edition/consultation mode must use "),a("code",[t._v("visibilityModeMixin")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"i18nmixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i18nmixin"}},[t._v("#")]),t._v(" i18nMixin")]),t._v(" "),a("p",[t._v("Applies the language of the catalogue to the component.")]),t._v(" "),a("h3",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("language")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('"en"')]),t._v(" "),a("td",[t._v('language ("en"/"fr")')])])])]),t._v(" "),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),a("p",[t._v("Updates the "),a("code",[t._v("language")]),t._v(" props depending on the "),a("strong",[t._v("i18n locale")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"stylemixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylemixin"}},[t._v("#")]),t._v(" styleMixin")]),t._v(" "),a("p",[t._v("Applies the colors of the catalogue to the component.")]),t._v(" "),a("h3",{attrs:{id:"props-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props-2"}},[t._v("#")]),t._v(" props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("theme")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",[t._v('{ primaryColor: "#0b6bb3", secondaryColor: "#f39c12" }')])]),t._v(" "),a("td",[t._v("primary and secondary colors of the catalogue")])])])]),t._v(" "),a("h3",{attrs:{id:"computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),a("p",[a("code",[t._v("applyTheme")]),t._v(" allows you to use the catalogue colors in the "),a("code",[t._v("<style>")]),t._v(" of the SFC.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--primaryColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),a("p",[t._v("Apply to the "),a("code",[t._v("app")]),t._v(" element or to root element of the parent if it's a module :")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("applyTheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("` \n")])])]),a("h2",{attrs:{id:"visibilitymodemixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visibilitymodemixin"}},[t._v("#")]),t._v(" visibilityModeMixin")]),t._v(" "),a("p",[t._v("Handles the component's visibility depending on the mode (edition or consultation).")]),t._v(" "),a("p",[t._v("If nothing is specified on the "),a("a",{attrs:{href:"https://services.sedoo.fr/metadatatemplate/swagger-ui.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("metadata template"),a("OutboundLink")],1),t._v(", the component is either always visible or its visibility is handled directly within the component.")]),t._v(" "),a("p",[t._v("Cf. example below :")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("aeris-metadata-parameters")]),t._v(" is displayed on "),a("strong",[t._v('"edition"')]),t._v(" mode only,")]),t._v(" "),a("li",[a("code",[t._v("opse-parameter-treeview-block")]),t._v(" is displayed on "),a("strong",[t._v('"consultation"')]),t._v(" mode only.")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aeris-metadata-parameters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"props"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"visibleOnlyOn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"edition"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"opse-parameter-treeview-block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"props"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"visibleOnlyOn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consultation"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"props-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props-3"}},[t._v("#")]),t._v(" props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("visibleOnlyOn")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v('visibility mode ("edition" / "consultation" / or both (if '),a("code",[t._v("visibleOnlyOn")]),t._v(" isn't specified or is "),a("code",[t._v("null")]),t._v(" ))")])])])]),t._v(" "),a("h3",{attrs:{id:"computed-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-2"}},[t._v("#")]),t._v(" computed")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("editing")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",[t._v("this.$store.getters.getIsUserEditingSheet")])]),t._v(" "),a("td",[t._v("Retrieved from the catalogue store. "),a("code",[t._v("true")]),t._v(" if the user is in edition mode ; "),a("code",[t._v("false")]),t._v(" if the user is in consultation mode.")])]),t._v(" "),a("tr",[a("td",[t._v("onlyEditionMode")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("true")]),t._v(" if the prop "),a("code",[t._v('visibleOnlyOn: "edition"')]),t._v(" is specified in the template and if "),a("code",[t._v("editing")]),t._v(" is "),a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("onlyOnConsultationMode")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("true")]),t._v(" if the prop "),a("code",[t._v('visibleOnlyOn: "consultation"')]),t._v(" is specified in the template and if "),a("code",[t._v("editing")]),t._v(" is "),a("code",[t._v("false")])])])])]),t._v(" "),a("h2",{attrs:{id:"index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-js"}},[t._v("#")]),t._v(" index.js")]),t._v(" "),a("p",[t._v("Allows to import all mixins at once :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" i18nMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" styleMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" visibilityMixin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../../mixins"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[a("Badge",{attrs:{text:"Shortcut in Codium",type:"success"}})],1)]),t._v(" "),a("p",[t._v("Start typing "),a("code",[t._v("mixins: []")]),t._v(', then the name of the mixin to import. And hit "Enter".')]),t._v(" "),a("p",[t._v("The line "),a("code",[t._v("import {...} from ...")]),t._v(" adds itself at the top.")])])}),[],!1,null,null,null);e.default=n.exports}}]);