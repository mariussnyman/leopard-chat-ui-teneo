(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0a47c1"],{"0748":function(e,r,t){"use strict";t.r(r),t("4160"),t("26e9"),t("fb6a"),t("159b");var s={props:{headers:{type:Array,required:!0},items:{type:Array,required:!0},search:{type:String,required:!1},footer:{type:String,required:!0},rowsPerPage:{type:Array,required:!0}},computed:{calcRowsPerPage:function(){var e=[{text:"All",value:-1}];if(this.rowsPerPage&&this.rowsPerPage.length>=0){var r=this.rowsPerPage.slice(0);(r=r.reverse()).forEach((function(r){e.unshift(r)}))}else e.unshift(5,10,25);return e}}},a=t("2877"),o=t("6544"),n=t.n(o),l=t("0798"),i=t("8fea"),u=Object(a.a)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.items&&e.items.length?t("v-data-table",{attrs:{headers:e.headers,items:e.items,search:e.search,"footer-props":{itemsPerPageOptions:e.calcRowsPerPage}},scopedSlots:e._u([{key:"\n  items",fn:function(r){return e._l(e.headers,(function(s,a){return t("td",{key:a,staticClass:"text-left",domProps:{innerHTML:e._s(r.item[s.value])}})}))}}],null,!1,2592171822)},[t("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"mdi-alert-octagram"},slot:"no-results"},[e._v('Your search for "'+e._s(e.search)+'" found no results.')]),e.footer?t("template",{slot:"footer"},[t("td",{attrs:{colspan:"100%"}},[t("strong",[e._v(e._s(e.footer))])])]):e._e()],2):e._e()}),[],!1,null,null,null);r.default=u.exports,n()(u,{VAlert:l.a,VDataTable:i.a})}}]);
//# sourceMappingURL=chunk-2d0a47c1.cb0ed378.js.map