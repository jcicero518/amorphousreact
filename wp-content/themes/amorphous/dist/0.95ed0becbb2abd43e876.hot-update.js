webpackHotUpdate(0,{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*!\nTheme Name: amorphous\nTheme URI: http://underscores.me/\nAuthor: Jeff Cicero\nAuthor URI: http://amorphouswebsolutions.com\nDescription: WP\nVersion: 1.0.0\nLicense: GNU General Public License v2 or later\nLicense URI: LICENSE\nText Domain: amorphous\nTags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready\n\nThis theme, like WordPress, is licensed under the GPL.\nUse it to make something cool, have fun, and share what you've learned with others.\n\namorphous is based on Underscores http://underscores.me/, (C) 2012-2016 Automattic, Inc.\nUnderscores is distributed under the terms of the GNU GPL v2 or later.\n\nNormalizing styles have been helped along thanks to the fine work of\nNicolas Gallagher and Jonathan Neal http://necolas.github.io/normalize.css/\n*/\n/*--------------------------------------------------------------\n>>> TABLE OF CONTENTS:\n----------------------------------------------------------------\n# Normalize\n# Typography\n# Elements\n# Forms\n# Navigation\n\t## Links\n\t## Menus\n# Accessibility\n# Alignments\n# Clearings\n# Widgets\n# Content\n\t## Posts and pages\n\t## Comments\n# Infinite scroll\n# Media\n\t## Captions\n\t## Galleries\n\n--------------------------------------------------------------*/\n/*--------------------------------------------------------------\n# Normalize\n--------------------------------------------------------------*/\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*--------------------------------------------------------------\n# Typography\n--------------------------------------------------------------*/\nbody,\nbutton,\ninput,\nselect,\noptgroup,\ntextarea {\n  color: #404040;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.5; }\n\nh1, h2, h3, h4, h5, h6 {\n  clear: both; }\n\np {\n  margin-bottom: 1.5em; }\n\ndfn, cite, em, i {\n  font-style: italic; }\n\nblockquote {\n  margin: 0 1.5em; }\n\naddress {\n  margin: 0 0 1.5em; }\n\npre {\n  background: #eee;\n  font-family: \"Courier 10 Pitch\", Courier, monospace;\n  font-size: 15px;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  margin-bottom: 1.6em;\n  max-width: 100%;\n  overflow: auto;\n  padding: 1.6em; }\n\ncode, kbd, tt, var {\n  font-family: Monaco, Consolas, \"Andale Mono\", \"DejaVu Sans Mono\", monospace;\n  font-size: 15px;\n  font-size: 0.9375rem; }\n\nabbr, acronym {\n  border-bottom: 1px dotted #666;\n  cursor: help; }\n\nmark, ins {\n  background: #fff9c0;\n  text-decoration: none; }\n\nbig {\n  font-size: 125%; }\n\n/*--------------------------------------------------------------\n# Elements\n--------------------------------------------------------------*/\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  /* Inherit box-sizing to make it easier to change the property for components that leverage other behavior; see http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */\n  box-sizing: inherit; }\n\nbody {\n  background: #fff;\n  /* Fallback for when there is no custom background color defined. */ }\n\nblockquote, q {\n  quotes: \"\" \"\"; }\n  blockquote:before, blockquote:after, q:before, q:after {\n    content: \"\"; }\n\nhr {\n  background-color: #ccc;\n  border: 0;\n  height: 1px;\n  margin-bottom: 1.5em; }\n\nul, ol {\n  margin: 0 0 1.5em 3em; }\n\nul {\n  list-style: disc; }\n\nol {\n  list-style: decimal; }\n\nli > ul,\nli > ol {\n  margin-bottom: 0;\n  margin-left: 1.5em; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin: 0 1.5em 1.5em; }\n\nimg {\n  height: auto;\n  /* Make sure images are scaled correctly. */\n  max-width: 100%;\n  /* Adhere to container width. */ }\n\nfigure {\n  margin: 1em 0;\n  /* Extra wide images within figure tags don't overflow the content area. */ }\n\ntable {\n  margin: 0 0 1.5em;\n  width: 100%; }\n\n/*--------------------------------------------------------------\n# Forms\n--------------------------------------------------------------*/\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  border: 1px solid;\n  border-color: #ccc #ccc #bbb;\n  border-radius: 3px;\n  background: #e6e6e6;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1;\n  padding: .6em 1em .4em; }\n  button:hover,\n  input[type=\"button\"]:hover,\n  input[type=\"reset\"]:hover,\n  input[type=\"submit\"]:hover {\n    border-color: #ccc #bbb #aaa; }\n  button:active, button:focus,\n  input[type=\"button\"]:active,\n  input[type=\"button\"]:focus,\n  input[type=\"reset\"]:active,\n  input[type=\"reset\"]:focus,\n  input[type=\"submit\"]:active,\n  input[type=\"submit\"]:focus {\n    border-color: #aaa #bbb #bbb; }\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ninput[type=\"search\"],\ninput[type=\"number\"],\ninput[type=\"tel\"],\ninput[type=\"range\"],\ninput[type=\"date\"],\ninput[type=\"month\"],\ninput[type=\"week\"],\ninput[type=\"time\"],\ninput[type=\"datetime\"],\ninput[type=\"datetime-local\"],\ninput[type=\"color\"],\ntextarea {\n  color: #666;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 3px; }\n  input[type=\"text\"]:focus,\n  input[type=\"email\"]:focus,\n  input[type=\"url\"]:focus,\n  input[type=\"password\"]:focus,\n  input[type=\"search\"]:focus,\n  input[type=\"number\"]:focus,\n  input[type=\"tel\"]:focus,\n  input[type=\"range\"]:focus,\n  input[type=\"date\"]:focus,\n  input[type=\"month\"]:focus,\n  input[type=\"week\"]:focus,\n  input[type=\"time\"]:focus,\n  input[type=\"datetime\"]:focus,\n  input[type=\"datetime-local\"]:focus,\n  input[type=\"color\"]:focus,\n  textarea:focus {\n    color: #111; }\n\nselect {\n  border: 1px solid #ccc; }\n\ntextarea {\n  width: 100%; }\n\n/*--------------------------------------------------------------\n# Navigation\n--------------------------------------------------------------*/\n/*--------------------------------------------------------------\n## Links\n--------------------------------------------------------------*/\na {\n  color: royalblue; }\n  a:visited {\n    color: purple; }\n  a:hover, a:focus, a:active {\n    color: midnightblue; }\n  a:focus {\n    outline: thin dotted; }\n  a:hover, a:active {\n    outline: 0; }\n\n/*--------------------------------------------------------------\n## Menus\n--------------------------------------------------------------*/\n.main-navigation {\n  clear: both;\n  display: block;\n  float: left;\n  width: 100%; }\n  .main-navigation ul {\n    display: none;\n    list-style: none;\n    margin: 0;\n    padding-left: 0; }\n    .main-navigation ul ul {\n      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);\n      float: left;\n      position: absolute;\n      top: 100%;\n      left: -999em;\n      z-index: 99999; }\n      .main-navigation ul ul ul {\n        left: -999em;\n        top: 0; }\n      .main-navigation ul ul li:hover > ul,\n      .main-navigation ul ul li.focus > ul {\n        left: 100%; }\n      .main-navigation ul ul a {\n        width: 200px; }\n    .main-navigation ul li:hover > ul,\n    .main-navigation ul li.focus > ul {\n      left: auto; }\n  .main-navigation li {\n    float: left;\n    position: relative; }\n  .main-navigation a {\n    display: block;\n    text-decoration: none; }\n\n/* Small menu. */\n.menu-toggle,\n.main-navigation.toggled ul {\n  display: block; }\n\n@media screen and (min-width: 37.5em) {\n  .menu-toggle {\n    display: none; }\n  .main-navigation ul {\n    display: block; } }\n\n.site-main .comment-navigation, .site-main\n.posts-navigation, .site-main\n.post-navigation {\n  margin: 0 0 1.5em;\n  overflow: hidden; }\n\n.comment-navigation .nav-previous,\n.posts-navigation .nav-previous,\n.post-navigation .nav-previous {\n  float: left;\n  width: 50%; }\n\n.comment-navigation .nav-next,\n.posts-navigation .nav-next,\n.post-navigation .nav-next {\n  float: right;\n  text-align: right;\n  width: 50%; }\n\n/*--------------------------------------------------------------\n# Accessibility\n--------------------------------------------------------------*/\n/* Text meant only for screen readers. */\n.screen-reader-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  word-wrap: normal !important;\n  /* Many screen reader and browser combinations announce broken words as they would appear visually. */ }\n  .screen-reader-text:focus {\n    background-color: #f1f1f1;\n    border-radius: 3px;\n    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);\n    clip: auto !important;\n    color: #21759b;\n    display: block;\n    font-size: 14px;\n    font-size: 0.875rem;\n    font-weight: bold;\n    height: auto;\n    left: 5px;\n    line-height: normal;\n    padding: 15px 23px 14px;\n    text-decoration: none;\n    top: 5px;\n    width: auto;\n    z-index: 100000;\n    /* Above WP toolbar. */ }\n\n/* Do not show the outline on the skip link target. */\n#content[tabindex=\"-1\"]:focus {\n  outline: 0; }\n\n/*--------------------------------------------------------------\n# Alignments\n--------------------------------------------------------------*/\n.alignleft {\n  display: inline;\n  float: left;\n  margin-right: 1.5em; }\n\n.alignright {\n  display: inline;\n  float: right;\n  margin-left: 1.5em; }\n\n.aligncenter {\n  clear: both;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*--------------------------------------------------------------\n# Clearings\n--------------------------------------------------------------*/\n.clear:before,\n.clear:after,\n.entry-content:before,\n.entry-content:after,\n.comment-content:before,\n.comment-content:after,\n.site-header:before,\n.site-header:after,\n.site-content:before,\n.site-content:after,\n.site-footer:before,\n.site-footer:after {\n  content: \"\";\n  display: table;\n  table-layout: fixed; }\n\n.clear:after,\n.entry-content:after,\n.comment-content:after,\n.site-header:after,\n.site-content:after,\n.site-footer:after {\n  clear: both; }\n\n/*--------------------------------------------------------------\n# Widgets\n--------------------------------------------------------------*/\n.widget {\n  margin: 0 0 1.5em;\n  /* Make sure select elements fit in widgets. */ }\n  .widget select {\n    max-width: 100%; }\n\n/*--------------------------------------------------------------\n# Content\n--------------------------------------------------------------*/\n/*--------------------------------------------------------------\n## Posts and pages\n--------------------------------------------------------------*/\n.sticky {\n  display: block; }\n\n.hentry {\n  margin: 0 0 1.5em; }\n\n.updated:not(.published) {\n  display: none; }\n\n.page-content,\n.entry-content,\n.entry-summary {\n  margin: 1.5em 0 0; }\n\n.page-links {\n  clear: both;\n  margin: 0 0 1.5em; }\n\n/*--------------------------------------------------------------\n## Comments\n--------------------------------------------------------------*/\n.comment-content a {\n  word-wrap: break-word; }\n\n.bypostauthor {\n  display: block; }\n\n/*--------------------------------------------------------------\n# Infinite scroll\n--------------------------------------------------------------*/\n/* Globally hidden elements when Infinite Scroll is supported and in use. */\n.infinite-scroll .posts-navigation,\n.infinite-scroll.neverending .site-footer {\n  /* Theme Footer (when set to scrolling) */\n  display: none; }\n\n/* When Infinite Scroll has reached its end we need to re-display elements that were hidden (via .neverending) before. */\n.infinity-end.neverending .site-footer {\n  display: block; }\n\n/*--------------------------------------------------------------\n# Media\n--------------------------------------------------------------*/\n.page-content .wp-smiley,\n.entry-content .wp-smiley,\n.comment-content .wp-smiley {\n  border: none;\n  margin-bottom: 0;\n  margin-top: 0;\n  padding: 0; }\n\n/* Make sure embeds and iframes fit their containers. */\nembed,\niframe,\nobject {\n  max-width: 100%; }\n\n/* Make sure logo link wraps around logo image. */\n.custom-logo-link {\n  display: inline-block; }\n\n/*--------------------------------------------------------------\n## Captions\n--------------------------------------------------------------*/\n.wp-caption {\n  margin-bottom: 1.5em;\n  max-width: 100%; }\n  .wp-caption img[class*=\"wp-image-\"] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n  .wp-caption .wp-caption-text {\n    margin: 0.8075em 0; }\n\n.wp-caption-text {\n  text-align: center; }\n\n/*--------------------------------------------------------------\n## Galleries\n--------------------------------------------------------------*/\n.gallery {\n  margin-bottom: 1.5em; }\n\n.gallery-item {\n  display: inline-block;\n  text-align: center;\n  vertical-align: top;\n  width: 100%; }\n  .gallery-columns-2 .gallery-item {\n    max-width: 50%; }\n  .gallery-columns-3 .gallery-item {\n    max-width: 33.33333%; }\n  .gallery-columns-4 .gallery-item {\n    max-width: 25%; }\n  .gallery-columns-5 .gallery-item {\n    max-width: 20%; }\n  .gallery-columns-6 .gallery-item {\n    max-width: 16.66667%; }\n  .gallery-columns-7 .gallery-item {\n    max-width: 14.28571%; }\n  .gallery-columns-8 .gallery-item {\n    max-width: 12.5%; }\n  .gallery-columns-9 .gallery-item {\n    max-width: 11.11111%; }\n\n.gallery-caption {\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(268);

__webpack_require__(684);

__webpack_require__(269);

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/jcicero/Homestead/Projects/amorphous/wp-content/themes/amorphous/node_modules/bulma/bulma.sass Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @charset \"utf-8\"\n| /*! bulma.io v0.5.3 | MIT License | github.com/jgthms/bulma */\n| @import \"sass/utilities/_all\"");

/***/ })

})