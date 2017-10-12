webpackHotUpdate(0,{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(43);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"box\">\n    <header class=\"entry-header\">\n        <h2 class=\"title\"><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.guid : depth0)) != null ? stack1.rendered : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.title : depth0)) != null ? stack1.rendered : stack1), depth0))
    + "</a></h2>\n        <div class=\"entry-meta\">\n            <span class=\"tag is-info "
    + alias2(((helper = (helper = helpers.tagClass || (depth0 != null ? depth0.tagClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tagClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n        </div>\n    </header>\n    <div class=\"entry-content\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.rendered : stack1), depth0))
    + "</div>\n</div>`";
},"useData":true});

/***/ })

})