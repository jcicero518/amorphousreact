/*global mwccRestApi, settings */
import axios from "axios";

const categoryMount = document.getElementById( 'categoryMount' );

class Pagination {

    constructor(params) {
        const appUrl = mwccRestApi.home;
        const pageContainer = document.querySelector( '.l-pagination' );

        this.postType = params[0] ? params[0] : 'news-article';
        this.category = params[1] ? params[1] : 'general-news';
        this.categoryId = params[2] ? params[2] : 0;
        this.page = 1;
        this.endPoint = `${appUrl}/wp-json/wp/v2/${this.postType}`;
        // get category by slug
        // http://mwcc.local/wp-json/wp/v2/categories?slug=general-news
        // returns id to be used in filtering post

        // get news by category
        // general-news id = 8
        // http://mwcc.local/wp-json/wp/v2/news-article?per_page=3&categories=8
        if ( pageContainer ) {
            this.pageLinks = [...pageContainer.querySelectorAll( 'a')].filter( link => {
                return ( link.hasAttribute( 'href' ) && link.innerHTML.match(/\d{1,}/) );
            });
        }
    }

    setPostType( postType ) {
        this.postType = postType;
    }

    api( endPoint ) {
        return new Promise( ( resolve, reject ) => {
            axios.get( endPoint ).then( ( response ) => {
                resolve( response.data );
            }).catch( ( error ) => {
                reject( error );
            });
        });
    }

    getPage( pageNum ) {
        console.log(this.endPoint, 'ep');
        this.api( `${this.endPoint}?per_page=5&categories=${this.categoryId}&page=${pageNum}`).then( payload => {
            categoryMount.innerHTML = payload;
            console.log(payload, 'payload');
        });
    }

    watchLinks() {
        this.pageLinks.forEach( link => {
            link.addEventListener( 'click', e => {
                e.preventDefault();
                let newPage = link.innerHTML;
                this.getPage( newPage );
                console.log(link, 'link');
            });
        })
    }
}

console.log(settings, 'settings');
const {category_nicename, cat_ID} = settings.queriedObject;
console.log(settings.queriedObject, 'queried');
let page = new Pagination(['news-article', category_nicename, cat_ID]);
page.watchLinks();

export default Pagination;