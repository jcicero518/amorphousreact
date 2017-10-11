/*global mwccRestApi, settings */
import axios from "axios";

const categoryMount = document.getElementById( 'content-replace' );

class Pagination {

    constructor(params) {
        const appUrl = mwccRestApi.home;
        const pageContainer = document.querySelector( '.pagination' );

        this.postType = params[0] ? params[0] : 'card';
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

    renderPage( payload ) {
        payload.forEach( post => {
            let template = `<div class="box">
            <header class="entry-header">
                <h2 class="title"><a href="${post.guid.rendered}">${post.title.rendered}</a></h2>
                <div class="entry-meta">
                </div>
            </header>
            <div class="entry-content">${post.content.rendered}</div>
            </div>`;
            let fragment = document.createDocumentFragment();
            fragment.innerHTML = template;
            let element = document.createElement('DIV', fragment);
            categoryMount.appendChild( element );
        });
    }

    getPage( pageNum ) {
        console.log(this.endPoint, 'ep');
        this.api( `${this.endPoint}?per_page=5&page=${pageNum}`).then( payload => {
            console.log(payload);
            this.renderPage( payload );
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

export default Pagination;