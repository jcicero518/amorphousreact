/*global mwccRestApi, globalPost, mainMenu */
import axios from "axios";

class PagesApi {

    constructor( postType = 'pages' ) {
        const appUrl = mwccRestApi.home;
        const restApiUrl = mwccRestApi.rest;
        const { postID } = globalPost;
        const pages = [];

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/${postType}`; // Endpoint for WP posts
        this.postIdEndPoint = `${appUrl}/wp-json/wp/v2/${postType}/${postID}`;
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

    getPage() {
        return new Promise( ( resolve, reject ) => {
            axios.get( this.postIdEndPoint).then( response => {
                resolve( Object.assign( [], response.data ))
            });
        });
    }

    getPages() {
        return new Promise( ( resolve, reject ) => {
            axios.get( this.pagesEndPoint).then( response => {
                resolve( Object.assign( [], response.data ))
            });
        });
        /*this.api(this.postsEndPoint).then(response => {
            return Object.assign({}, this.pages);
        });*/
    }
}

export default PagesApi;