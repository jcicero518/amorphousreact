webpackHotUpdate(0,{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(43);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box\">\n    <header class=\"entry-header\">\n        <h2 class=\"title\"><a href=\""
    + alias4(((helper = (helper = helpers.post_permalink || (depth0 != null ? depth0.post_permalink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_permalink","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.plaintitle || (depth0 != null ? depth0.plaintitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plaintitle","hash":{},"data":data}) : helper)))
    + "</a></h2>\n        <div class=\"entry-meta\">\n            <span class=\"tag is-info "
    + alias4(((helper = (helper = helpers.tagClass || (depth0 != null ? depth0.tagClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagClass","hash":{},"data":data}) : helper)))
    + "\">Topics</span>\n            {\n        </div>\n    </header>\n    <div class=\"entry-content\">"
    + alias4(((helper = (helper = helpers.post_excerpt || (depth0 != null ? depth0.post_excerpt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_excerpt","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});

/***/ })

})