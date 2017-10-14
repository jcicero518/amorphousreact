/*global themeApi, settings */
import DataStore from "./DataStore";
import codePostTpl from "../../templates/codePost.hbs";

const pageContainer = document.querySelector( '.pagination' );
const boxContainer = document.getElementById( 'content-inner-replace' );

class Pagination {

    constructor() {
        const {category_nicename, cat_ID} = settings.queriedObject;
        this.dataStore = new DataStore({
            postType: 'card',
            categoryId: cat_ID,
            category: category_nicename
        });

        this.pageLinks = this.parsePageLinks();
        this.watchLinks();
    }

    reAttachPageLinks() {
        this.pageLinks = this.parsePageLinks();
        this.watchLinks();
    }

    parsePageLinks() {
        if ( pageContainer ) {
            return [...pageContainer.querySelectorAll( 'a')].filter( link => {
                return ( link.classList.contains( 'next' ) || link.innerHTML.match(/\d{1,}/) );
            });
        }
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

    renderPagination( payload ) {
        pageContainer.removeChild( pageContainer.children[0] );
        pageContainer.insertAdjacentHTML( 'beforeend', payload );
        this.reAttachPageLinks();
    }

    getPage( pageNum ) {

        this.dataStore.setPage( pageNum).then( payload => {
            console.log(payload, 'setPage payload');
            if ( pageNum === 1 ) return false;
            this.renderPagination( payload );
        });

        this.dataStore.getPage().then( payload => {
            console.log(payload, 'payload');
            this.renderPage( payload );
        })
    }

    watchLinks() {
        this.pageLinks.forEach( link => {
            link.addEventListener( 'click', e => {
                e.preventDefault();
                let newPage = link.innerHTML.match(/\d{1,}/) ? link.innerHTML : link.getAttribute( 'href').match(/\d{1,}/)[0];
                console.log(this);
                this.getPage( newPage );
            });
        })
    }
}

const pagination = new Pagination().getPage(1);