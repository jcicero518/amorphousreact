import "bulma";
import "./webfonts/googleFonts";
import Pagination from "./pagination";
import "../../../sass/style.scss";
// https://www.keithcirkel.co.uk/es6-template-literals/
console.log(settings, 'settings');
const {category_nicename, cat_ID} = settings.queriedObject;
console.log(settings.queriedObject, 'queried');
let page = new Pagination(['card', category_nicename, cat_ID]);
page.watchLinks();
// Entry point app
//import "./index";