/*global mwccRestApi, settings */
import axios from "axios";
import codePostTpl from "../../templates/codePost.hbs";

const boxContainer = document.getElementById( 'content-inner-replace' );

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
        let allBoxes = boxContainer.querySelectorAll( '.box' );
        let boxChildren = boxContainer.children;
        //boxContainer.remove( allBoxes );
        payload.forEach( (post, iterator) => {
            let eachTemplate = codePostTpl( post );

            //boxContainer.removeChild( boxChildren[iterator] );
            //console.log(eachTemplate, 'tem');
            boxContainer.insertAdjacentHTML('beforeend', eachTemplate);
            //boxContainer.appendChild( eachTemplate );
        });
        let all = boxContainer.querySelectorAll( '.box' );
        all.forEach( box => {
            console.log(box, 'box');
            box.classList.remove( 'hidden' );
            box.classList.add( 'visible' );
        })
    }

    getPage( pageNum ) {
        this.page = pageNum;

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
            });
        })
    }
}

export default Pagination;